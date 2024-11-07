
import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

import { SiPowerpages } from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";
import Avatar from 'react-avatar';
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import Part from './components/Part/Part';
import Part2 from './components/Part2/Part2';
import Part3 from './components/Part3/Part3';
import Part4 from './components/Part4/Part4';
import Part5 from './components/Part5/Part5';

function App() {
  
  const array = [1,2,3,4];

  return (

    <>

      <div className=' flex  gap-4 items-center  parent  h-screen   pl-2 pt-4 pb-4 mx-1'>


            {/* {
                array.map( (item, index) => (<Part></Part>))
            } */}

           <Part></Part>

           <Part2></Part2>
           <Part3></Part3>
           <Part4></Part4>
           <Part5></Part5>


      </div>


    </>
  )
}

export default App
