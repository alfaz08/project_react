import React from 'react';

const RelatedDeal = () => {
  return (
    <div>
      <h2 className='text-4xl mt-8 mb-4'>Related deals you might like for</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className=''>
         <img className='mx-auto' src="https://i.ibb.co/GkrTdR9/Screenshot-1-removebg-preview.png" alt="" />
          <div className='flex gap-4 mt-6 ml-12'>
            <h2 className='bg-slate-200 rounded-l-md rounded-r-md  p-1 text-xs text-blue-700'>20% Off</h2>
            <h2 className='bg-slate-200 rounded-l-md rounded-r-md  p-1 text-xs text-blue-700'>Limited Time</h2>
          </div>
         <h2 className='text-center text-sm font-bold text-gray-500 '>Webbuilder 1</h2>
        <h2>Computer Modern clasic with wix support</h2>

        <div className='flex gap-4'>
          <h2 className='text-xl text-gray-500'>$39.96</h2>
          <h2 className='text-xs mt-2 text-gray-400'>$49.96</h2>
          <h2  className='text-xs mt-2  text-red-500'>(20% off)</h2>
        </div>

        <button className='bg-blue-500 text-white w-full h-12 rounded-l-2xl rounded-r-2xl'>View Deal</button>
        </div>
        
        <div className=''>
         <img className='mx-auto' src="https://i.ibb.co/GkrTdR9/Screenshot-1-removebg-preview.png" alt="" />
          <div className='flex gap-4 mt-6 ml-12'>
          <h2 className='bg-slate-200 rounded-l-md rounded-r-md  p-1 text-xs text-blue-700'>20% Off</h2>
            <h2 className='bg-slate-200 rounded-l-md rounded-r-md  p-1 text-xs text-blue-700'>Limited Time</h2>
          </div>
         <h2 className='text-center text-sm font-bold text-gray-500 '>Webbuilder 1</h2>
        <h2>Computer Modern clasic with wix support</h2>

        <div className='flex gap-4'>
          <h2 className='text-xl text-gray-500'>$39.96</h2>
          <h2 className='text-xs mt-2 text-gray-400'>$49.96</h2>
          <h2  className='text-xs mt-2  text-red-500'>(20% off)</h2>
        </div>

        <button className='bg-blue-500 text-white w-full h-12 rounded-l-2xl rounded-r-2xl'>View Deal</button>
        </div>

        <div className=''>
         <img className='mx-auto' src="https://i.ibb.co/GkrTdR9/Screenshot-1-removebg-preview.png" alt="" />
          <div className='flex gap-4 mt-6 ml-12'>
          <h2 className='bg-slate-200 rounded-l-md rounded-r-md  p-1 text-xs text-blue-700'>20% Off</h2>
            <h2 className='bg-slate-200 rounded-l-md rounded-r-md  p-1 text-xs text-blue-700'>Limited Time</h2>
          </div>
         <h2 className='text-center text-sm font-bold text-gray-500 '>Webbuilder 1</h2>
        <h2>Computer Modern clasic with wix support</h2>

        <div className='flex gap-4'>
          <h2 className='text-xl text-gray-500'>$39.96</h2>
          <h2 className='text-xs mt-2 text-gray-400'>$49.96</h2>
          <h2  className='text-xs mt-2  text-red-500'>(20% off)</h2>
        </div>

        <button className='bg-blue-500 text-white w-full h-12 rounded-l-2xl rounded-r-2xl'>View Deal</button>
        </div>
        
     
        
      </div>




    </div>
  );
};

export default RelatedDeal;