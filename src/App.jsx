import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OCRReaderV1 from './OCRReaderV1';
import OCRReaderV2 from './OCRReaderV2';
import OCRReaderV3 from './OCRReaderV3';

function App() {
  return (
    <main>
      Optical Character Recognition Project with MHL AI/ML Global Hack Week
      {/* Use the componenet here */}
      {/* OCRReader will internally usse ImageUpload component */}
      <div style={{
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
        width: "100%",
        height: "5px",
        color:"blue",
        padding: "2px",
        margin: "2px",
        backgroundColor: "white",
      }}/>
      <OCRReaderV2 />
      <div style={{
        width: "100%",
        height: "5px",
        color:"orange",
        padding: "2px",
        margin: "2px",
        backgroundColor: "white",
      }}/>
      <OCRReaderV3 />
    </main>
  )
}
export default App
