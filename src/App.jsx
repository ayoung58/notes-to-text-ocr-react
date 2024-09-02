import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OCRReaderV1 from './OCRReaderV1';
import OCRReaderV2 from './OCRReaderV2';

function App() {
  return (
    <main>
      Optical Character Recognition Project with MHL AI/ML Global Hack Week
      {/* Use the componenet here */}
      {/* OCRReader will internally use ImageUpload component */}
      <div style={{
        // adding a black line that can divide OCRReader versions
        width: "100%",
        height: "5px",
        color:"black",
        padding: "2px",
        margin: "2px",
        backgroundColor: "white",
      }}
      />
      <OCRReaderV1 />
      <div style={{
        // adding a black line that can divide OCRReader versions
        width: "100%",
        height: "5px",
        color:"blue",
        padding: "2px",
        margin: "2px",
        backgroundColor: "white",
      }}/>
      <OCRReaderV2 />
    </main>
  )
}
export default App
