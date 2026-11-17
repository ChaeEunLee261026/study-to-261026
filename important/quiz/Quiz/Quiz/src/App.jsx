import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Quiz03 from './newsblog/Newsblog.jsx'
import NewsBlog from './newsblog/Newsblog.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    
 <div>
      <div className="black-nav">
        <h3>Blog Header</h3>
        <div>React Study</div>
      </div>

      <div className="post-list">
        <h4>제목</h4>
        <p>내용</p>
      </div>


      <div className="post-list">
        <h4>제목</h4>
        <p>내용</p>
      </div>

      <div className="post-list">
        <h4>제목</h4>
        <p>내용</p>
      </div>

    </div>


  )
}

export default NewsBlog;
