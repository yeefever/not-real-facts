'use client'

import Header from './components/header'
import { output } from '@/next.config';
import VideoPopup from './components/popup';

import { useState, useEffect, useRef, useCallback } from 'react'

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/yeefever/not-real-facts2",
    {
      headers: { Authorization: "Bearer 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" },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header></Header>
      <VideoPopup />
      <h1 className="text-5xl font-bold mt-40 text-center">Motivational Statement Generator</h1>
      <h2 className="text-2xl mb-2 text-center">Never assume in Life</h2>
      <div className="flex justify-center"> {/* Flex container for horizontal centering */}
        <input
          type="text"
          className="w-full max-w-lg p-2 border border-gray-300 rounded mb-2"
          placeholder="Enter plain English phrase"
          onChange={(e) => setInputValue(e.target.value)} // grab the input
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            query({ "inputs": JSON.stringify(inputValue) }) //params?
              .then((response) => {
                if (response.error) {
                  //if(response.error)
                  setOutputValue("An error occurred. Please try again." + response.error);
                } else if (response[0].summary_text) { //response formatting is kinda whack
                  setOutputValue(response[0].summary_text);
                }
              })
              .catch((error) => {
                console.error("Network error:", error);
                setOutputValue("A network error occurred. Please try again.");
              });
          }}
          className="bg-gray-500 text-white py-1 px-3 rounded"
        >
          Generate
        </button>
      </div>

      <div className="flex justify-center">
        {outputValue !== '' && (      //if some output exists, display.
          <div className="bg-white p-4 rounded mt-4">
            <p className="text-lg text-gray-800">{outputValue}</p>
          </div>
        )}
      </div>
    </div>
  )
}