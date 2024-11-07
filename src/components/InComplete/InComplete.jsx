import React from 'react';
import Child from '../Child/Child';

const InComplete = () => {


     const array= [1,2,3,4];
    return (
        <>
            

           

            {
                array.map( (item, index)=> (<Child key={index}></Child>))
            }

        </>
    );
};

export default InComplete;