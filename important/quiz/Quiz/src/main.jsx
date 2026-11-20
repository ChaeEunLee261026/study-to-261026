import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter} from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>  
 {/* 브라우저 추가 */}
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
