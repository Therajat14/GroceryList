import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
createRoot(document.getElementById('root')).render(


  <div className='mainContent'>
    <Header heading="Grocery list" />
    <App />
    <Footer />
  </div>

)
