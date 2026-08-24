import { useState } from 'react'

import './App.css'
import './header.css'

function App() {

  const [page, setPage] = useState('home')  

  return (
    <>
    <header className = "header">
      <h1>❤️ Our Story</h1>
      <nav>
        <a className = "font" href="#home" onClick={() => setPage('home')}>Home</a>
        <a className = "font" href="#our-love-life" onClick={() => setPage('love')}>Our Love</a>
        <a className = "font" href="#memories" onClick={() => setPage('memories')}>Memories</a>
      </nav>

    </header>

    <main>

        {page === 'home' && (
          <h2>Hello to the dearest person in my heart! ❤️</h2>
        )}

        {page === 'love' && (
          <h2>Our Love Story 💕</h2>
        )}

        {page === 'memories' && (
          <h2>Our Memories 📸</h2>
        )}

      </main>
    </>
  )
}

export default App
