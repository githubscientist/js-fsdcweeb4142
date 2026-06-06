import { useState } from "react";

const App = () => {
  const [personality, setPersonality] = useState('neutral');
  const [backgroundTone, setBackgroundTone] = useState('');
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState([]);

  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

  const PERSONALITY_PROMPTS = {
    therapist: `You are a calm, empathetic therapist-style assistant. Use gentle, validating language. Ask one supportive follow-up question. Avoid emojis unless the user uses them first. Speak slowly and thoughtfully. Keep replies under 60 words.`,

    coach: `You are a high-energy, direct performance coach.
    Be motivating and action-oriented. Cut straight to the point.
    Use 1 emoji max. Short punchy sentences. Keep replies under 50 words.`,

    buddy: `You are a warm, casual close friend. Be natural, funny, and supportive. Light humor is encouraged. Use 1–2 emojis. Avoid formal language. Keep replies under 50 words.`,
  }

  const MOOD_CONTEXT = {
    sad: 'The user seems sad or disappointed. Be extra gentle and validating.',
    happy: 'The user is excited or happy. Match their energy without overdoing it.',
    low: 'The user is tired or stressed. Be calm, reduce pressure, suggest a small next step.',
    angry: 'The user seems frustrated or angry. Acknowledge first, avoid being dismissive.',
    neutral: 'The user is in a neutral state. Be clear, helpful, and warm.',
  }

  const detectTone = (text) => {
    const t = text.toLowerCase(); // get the last word
    
    // check if the text contains any of the keywords for each mood
    if(t.includes('sad') || t.includes('disappointed') || t.includes('unhappy') || t.includes('depressed') || t.includes('down')) return 'Sad'
    if(t.includes('happy') || t.includes('excited') || t.includes('great') || t.includes('awesome') || t.includes('amazing') || t.includes('fantastic') || t.includes('thrilled')) return 'Happy'
    if(t.includes('tired') || t.includes('stress') || t.includes('stressed') || t.includes('burnout') || t.includes('anxious') || t.includes('overwhelmed') || t.includes('exhausted') || t.includes('drained') || t.includes('worried')) return 'Low'
    if(t.includes('angry') || t.includes('frustrated') || t.includes('fed up') || t.includes('annoyed') || t.includes('mad') || t.includes('furious')) return 'Angry'
    return 'Neutral'

    // if (/(fail|failed|sad|down|depressed|cry|loss|losing|lost|crying|upset|hurt)/.test(t)) return 'Sad'
    // if (/(happy|excited|great|awesome|won|success|yay|love|amazing|fantastic|thrilled)/.test(t)) return 'Happy'
    // if (/(tired|stress|stressed|burnout|anxious|overwhelmed|exhausted|drained|worried)/.test(t)) return 'Low'
    // if (/(angry|frustrated|fed up|annoyed|mad|furious)/.test(t)) return 'Angry'
    // return 'Neutral'
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // get the personality -> personality
    // get the background tone -> backgroundTone
    // get the prompt -> prompt

    // prepare the json object and send to the model
    const params = {
      "model": "llama-3.1-8b-instant",
      "messages": [
        {
          "role": "system",
          "content": `You are a helpful assistant. ${PERSONALITY_PROMPTS[personality]} ${MOOD_CONTEXT[backgroundTone.toLowerCase()]}`
        },
        {
          "role": "user",
          "content": prompt
        }
      ]
    }

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GROQ_API_KEY}`
    }

    // make an api call
    fetch(`https://api.groq.com/openai/v1/chat/completions`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(response => {
        setResponses([
          ...responses,
          response.choices[0].message.content
        ])
      })
      .catch(error => console.log('LLM API Call failed', error.message));

  }

  const handleCompletionChange = (value) => {
    setPrompt(value);
    setBackgroundTone(detectTone(value));
  }

  return (
    <div>
      <div className="text-center my-8">
        <h1 className="text-4xl">Vibe Coding Demo</h1>
        <p className="text-sm">Same Intelligence. Different Vibe.</p>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-md flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="personality" className="font-semibold">
            Personality:
          </label>
          <select name="personality" id="personality" className="border border-gray-300 rounded-md p-2" value={personality}
            onChange={e => setPersonality(e.target.value)}
          >
              <option value="neutral">Neutral</option>
              <option value="buddy">Buddy</option>
              <option value="coach">Coach</option>
              <option value="therapist">Therapist</option>
            </select>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold"
          >Background Tone:</p>
          <input
            type="text"
            name="backgroundTone"
            id="backgroundTone"
            readOnly
            className="border border-gray-300 rounded-md p-2 bg-gray-100"
            value={backgroundTone}
          />
        </div>

        <form className="grid grid-cols-4 gap-2" onSubmit={handleSubmit}>
          <div className="col-span-3">
            <input type="text" name="question" id="question" placeholder="Ask a question..."
              className="border border-gray-300 rounded-md p-2 w-full"
              value={prompt}
              onChange={e => handleCompletionChange(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <button type="submit"
              className="bg-orange-500 text-white rounded-md p-2 w-full hover:bg-orange-700 transition-colors"
            >Submit</button>
          </div>
        </form>
      </div>

      {
        responses.length > 0 && (
          <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Responses:</h2>
            <ul className="list-disc list-inside">
              {responses.map((res, index) => (
                <li key={index} className="mb-2">{res}</li>
              ))}
            </ul>
          </div>
        )
      }

    </div>
  )
}

export default App;