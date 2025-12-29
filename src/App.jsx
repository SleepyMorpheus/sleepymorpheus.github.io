import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Welcome to SleepyMorpheus</h1>
          <p className="subtitle">A Simple React Website</p>
        </header>
        
        <div className="content">
          <p>👋 Hello! This is a React website hosted on GitHub Pages.</p>
          <p>This demonstrates a simple React application with components and styling.</p>
          <p>Feel free to customize and expand this to build your own site!</p>
        </div>

        <div className="features">
          <div className="feature">
            <h3>⚛️ React</h3>
            <p>Built with React for modern UI</p>
          </div>
          <div className="feature">
            <h3>⚡ Vite</h3>
            <p>Fast build tool and dev server</p>
          </div>
          <div className="feature">
            <h3>🌐 GitHub Pages</h3>
            <p>Free hosting for your site</p>
          </div>
        </div>

        <footer>
          <p>&copy; 2024 SleepyMorpheus. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
