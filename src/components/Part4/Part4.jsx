import React from 'react';

import InComplete from '../InComplete/InComplete';


const Part4 = () => {

    const array = [1, 2, 3, 4];
    return (
        <div className='part-4   h-full overflow-y-auto flex-grow-0 flex-shrink-0 basis-[420px]'>



            <div className='my-4 heading flex justify-between items-center' >

                
                    {/* <button className='bg-red border border-yellow-600 rounded-l-[32px] w-[20px] h-[20px] bg-yellow-600'></button>
                     */}
                    <h3>Under Review</h3>
                
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

export default Part4;