import React from 'react'




let str = 'jack';
let index1 = str.indexOf('a');
let index2 =  str.indexOf('a',index1+1);
let index3 =  str.indexOf('a',index2+1);


function Experiment() {
    return (

        // console.log('Hello world'),
        console.log(index1),
        console.log(index2),
        console.log(index3),
        <>
            

        </>

    )
}

export default Experiment