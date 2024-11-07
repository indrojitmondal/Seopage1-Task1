import React from 'react';
import { useState } from 'react'




import Child from '../Child/Child';
import InComplete from '../InComplete/InComplete';


const Part = () => {

    const array = [1, 2, 3, 4];
    return (
        <div className='part-1   h-full overflow-y-auto flex-grow-0 flex-shrink-0 basis-[420px]'>



            <div className='my-4 heading flex justify-between items-center' >

                <div className=' flex items-center gap-2'>
                    <button className='bg-red border border-red-600 rounded-l-[32px] w-[20px] h-[20px] bg-red-600'></button>
                    <h3>Incomplete</h3>
                </div>
                <div>
                    <h2>0</h2>
                </div>
            
            
            </div>
            {
                array.map((item, index) => (<InComplete></InComplete>))
            }



        </div>
    );
};

export default Part;