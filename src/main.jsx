import { createRoot } from 'react-dom/client'
import App from './App'
import ReactionsStore from './contexts/ReactionsStore'

createRoot(document.getElementById('root')).render(
  <ReactionsStore>
    <App />
  </ReactionsStore>
)
