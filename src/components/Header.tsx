"use client"

import React, { useState } from 'react';
import SearchBar from './SearchBar';

export default function Header() {
    const [toggleAi, setToggleAi] = useState(false)
  return (
    <header className="fixed w-full flex flex-col">
      <div className="top-0 left-0 right-0 bg-blue-600 text-white p-2 shadow-lg flex items-center justify-between z-50 w-full">
        <SearchBar onToggleAISection={toggleAi}/>
      </div>
      <div className="bg-blue-100 p-2 flex justify-around">
        <a href="#departments" className="text-blue-600 hover:text-blue-800">
          Departments
        </a>
        <a href="#services" className="text-blue-600 hover:text-blue-800">
          Services
        </a>
        <a href="#fall-savings" className="text-blue-600 hover:text-blue-800">
          Fall Savings
        </a>
        <a
          href="#grocery-essentials"
          className="text-blue-600 hover:text-blue-800"
        >
          Grocery & Essentials
        </a>
        <a href="#new-trending" className="text-blue-600 hover:text-blue-800">
          New & Trending
        </a>
        <a href="#back-to-school" className="text-blue-600 hover:text-blue-800">
          Back To School
        </a>
        <a
          href="#college-essentials"
          className="text-blue-600 hover:text-blue-800"
        >
          College Essentials
        </a>
        <a href="#home" className="text-blue-600 hover:text-blue-800">
          Home
        </a>
        <a href="#electronics" className="text-blue-600 hover:text-blue-800">
          Electronics
        </a>
        <a href="#fashion" className="text-blue-600 hover:text-blue-800">
          Fashion
        </a>
        <a href="#baby" className="text-blue-600 hover:text-blue-800">
          Baby
        </a>
      </div>
    </header>
  );
}
