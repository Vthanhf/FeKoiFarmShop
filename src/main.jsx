
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
<>
    <App />
    <ToastContainer />
</>);


