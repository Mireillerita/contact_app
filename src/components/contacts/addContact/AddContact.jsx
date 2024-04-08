import React from 'react';

let AddContact = () => {
    return(
        <>
        <div className='px-32 py-4'>
            <h1 className='font-bold text-[30px]'>Add Contact</h1>
        <div className='grid'>
           
           <label> Full name</label>
            <input  type='text'  className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'/>

            <label > Email</label>
            <input  type='email'  className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'/>

            <label > Phone</label>
            <input type='text'  className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'/>

            <label>Location </label>
            <input  type='text' className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'/>

            <label>Picture </label>
            <input  type='text' className='border-2 border-cyan-700 py-2 font-bold rounded-lg mb-4 outline-none'/>

            <input type="submit" value='Create' className='bg-cyan-900 text-white py-2 font-bold rounded-lg mt-4'/>
            </div>
        </div>
        </>
    )
};
export default AddContact;
