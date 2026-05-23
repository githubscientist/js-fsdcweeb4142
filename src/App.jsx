import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const App = () => {
  const data = {
    labels: ["HTML", "CSS", "JavaScript", "React"],
    datasets: [
      {
        label: "Marks",
        data: [85, 90, 80, 95],
        backgroundColor: ["red", "blue", "yellow", "green"],
      }
    ]
  }

  const options = {
    responsive: true,
  }


  return (
    <div>
      <h2>Student Skill Marks</h2>
      <Bar
        data={data}
        options={options}
      />
    </div>
  )
}

export default App;