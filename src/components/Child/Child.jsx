import React, { useState } from 'react';
import { SiPowerpages } from "react-icons/si";
import { RiPagesLine } from "react-icons/ri";
import Avatar from 'react-avatar';
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import Modal from '../Modal/Modal';
const Child = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);



    const openModal = () => setIsModalOpen(true);


    
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files).map((file) => ({
            name: file.name,
            extension: file.name.split('.').pop()
        }));
        setSelectedFiles(files);
    };
    const closeModal = () => {

        setIsModalOpen(false);
        console.log(selectedFiles);

        


    }
    return (
        <>
            <div className='child-1 px-2 py-4 w-[400px] border border-red bg-gray-100 '>



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

                            <button onClick={openModal} > <MdOutlineAttachFile className='rotate-45' />  </button>
                            <h3>{selectedFiles.length}</h3>
                        </div>

                        <div className='flex items-center gap-1 '>

                            <FaCalendarAlt />
                            <h3>30-12-2022</h3>
                        </div>




                    </div>

                </div>

            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className='text-xl font-bold text-center'>Upload Documents</h2>

            <div className='my-10 space-y-2'>
                <input
                    type="file"
                    multiple
                    className="border border-gray w-full max-w-xs"
                    onChange={handleFileChange}
                />

                {/* Display selected file names and extensions */}
                <div className='mt-4'>
                    {selectedFiles.length > 0 ? (
                        <ul className="space-y-1">
                            {selectedFiles.map((file, index) => (
                                <li key={index} className="text-gray-700">
                                    {file.name} <span className="text-gray-500">({file.extension})</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No files selected</p>
                    )}
                </div>
            </div>

            <button
                className='mt-3 border w-full rounded-[32px] px-4 py-2 border-gray-200 bg-gray-200 text-center font-bold'
                onClick={closeModal}
            >
                Close
            </button>
        </Modal>

        </>
    );
};

export default Child;