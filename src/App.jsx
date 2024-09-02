import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUpload from './ImageUpload';

function App() {
  return (
    <main>
      Optical Character Recognition Project with MHL AI/ML Global Hack Week
      {/* Use the componenet here */}
      {/* OCRReader will internally use ImageUpload component */}
      <OCRReader />
    </main>
  )
}
export default App
