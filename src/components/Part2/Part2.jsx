import React from 'react';

import InComplete from '../InComplete/InComplete';


const Part2 = () => {

    const array = [1, 2, 3, 4];
    return (
        <div className='part-2   h-full overflow-y-auto flex-grow-0 flex-shrink-0 basis-[420px]'>



            <div className='my-4 heading flex justify-between items-center' >

                <div className=' flex items-center gap-2'>
                    <button className='bg-red border border-blue-600 rounded-l-[32px] w-[20px] h-[20px] bg-blue-600'></button>
                    <h3>To Do</h3>
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

export default Part2;