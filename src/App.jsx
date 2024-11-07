import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

import { SiPowerpages } from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";
import Avatar from 'react-avatar';
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='border space-y-5 parent border-black   max-h-screen   pl-2 pt-4 mx-1'>

       

         <div className='child-1 px-2 py-4 w-[400px] border border-red bg-gray-100 '>

             <div className='heading flex justify-between items-center' >

                     <div className=' flex items-center gap-2'>
                     <button className='bg-red border border-red-600 rounded-l-[32px] w-[20px] h-[20px] bg-red-600'></button>
                     <h3>Incomplete</h3>
                     </div>
                     <div>
                       <h2>0</h2>
                     </div>
             </div>

             <div className='bg-white p-4 space-y-3'>

                <div className='profile flex justify-between items-center'>

                <div className='flex items-center gap-3'>
                <img className='rounded-[50%] w-[50px] h-[50px]' alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/330px-Virat_Kohli_in_PMO_New_Delhi.jpg" />
                <h2>Client Name</h2>
                </div>

                <div className='flex items-center gap-3'>
                <img className='rounded-[50%] w-[50px] h-[50px]' alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHOqSGRmj_SeRuzMpVCHbYeBtLAYKJmk3Vg&s" />
                <h2>Sadik Istiak</h2>
                </div>
               
                
                </div>

                <div className='2nd flex justify-between items-center'>

                  <div className='flex items-center gap-2'>
                      <SiPowerpages /> 
                      <p>Lorem ipsum dolor sit amet...</p>
                  </div>

                  <div className='flex items-center gap-2'> 

                      <RiPagesLine />

                      <h2>1/2</h2>

                  </div>

                </div>

                <div className='3rd flex items-center justify-between '>

                <img className='rounded-[50%] bg-yellow-100 w-[50px] h-[50px]' alt="Remy Sharp" src="https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png" />
                
                <img className='rounded-[50%] bg-yellow-100 w-[50px] h-[50px]' alt="Remy Sharp" src="https://documents.iplt20.com/playerheadshot/ipl/284/41.png" />
                
                 <div className='w-[40px] text-center flex items-center justify-center  h-[40px] rounded-[50%] border border-gray-300 '>
                    <span className='text-center'>12+</span>
                 </div>

                 <div className='flex items-center '>
                 <IoChatbubblesOutline />
                  <h3>15</h3>
                 </div>

                 <div className='flex items-center '>
            
                 <MdOutlineAttachFile className='rotate-45'/>
                  <h3>25</h3>
                 </div>

                 <div className='flex items-center gap-1 '>
            
                 <FaCalendarAlt />
                  <h3>30-12-2022</h3>
                 </div>
                

                 
          
                </div>

             </div>

         </div>



      </div>


    </>
  )
}

export default App
