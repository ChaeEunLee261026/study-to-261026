import { Link, Routes, Route } from 'react-router-dom'
import './Quiz07.css'

function Main() {
  return <div className="content">Main</div>
}

function Info() {
  return <div className="content">info 공간입니다.</div>
}

function Mypage() {
  return <div className="content">mypage 공간입니다.</div>
}

function Cart() {
  return <div className="content">cart 공간입니다.</div>
}

function Quiz07() {
  return (
    <div>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/info">info</Link>
        <Link to="/mypage">mypage</Link>
        <Link to="/cart">cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default Quiz07