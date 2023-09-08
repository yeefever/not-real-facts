"use client"
import { useEffect, useState } from 'react';
import Header from '../components/header'

const userData = [
  {
    "user_name": "TestPerson1",
    "text": "Do not assume things in life. A carrot's size is not determined by its leaves; big leaves do not mean a big carrot.",
    "summary": "Never assume in life. Don't think that carrot big because carrot big leaf carrot big not leaf big size because carrot small leaf carrot small not leaf size big size."
  },
  {
    "user_name": "TestPerson2",
    "text": "Hi Paul.",
    "summary": "Some time in live, Hi Paul isn\'t the one thing that Paul is known about everything Paul\'s one of the steps to being a Paul"
  },
  {
    "user_name": "TestPerson3",
    "text": "If you save everything for the last minute, it only takes one minute.",
    "summary": "If you save everything for saves everything for the last minute, it only takes one minute ... it takes only takes 1 minute . Minute."
  }
]

function ExamplesPage() {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-2 gap-8 mx-4 my-4">
        {userData.map((user, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{user.user_name}</h2>
            <p className="text-gray-400">{user.text}</p>
            <hr className="my-2" />
            <p className="text-gray-800">{user.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamplesPage;
