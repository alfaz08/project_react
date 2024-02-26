
import { MdKeyboardArrowDown } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='bg-black text-white'>


    <div className='max-w-5xl mx-auto flex justify-between '>

    <div className=' mt-8 mb-24'>
       <h2 className='uppercase'>Categories</h2>
       <h2 className='mt-4 text-gray-400'>Web Builder</h2>
       <h2 className='mt-4 text-gray-400'>Hosting</h2>
       <h2 className='mt-4 text-gray-400'>Data center</h2>
       <h2 className='mt-4 text-gray-400'>Robotic-Automation</h2>
      </div>


      <div className=' mt-8 mb-24'>
      <h2 className='uppercase'>Contact</h2>
      <h2  className='mt-4 text-gray-400'>Contact</h2>
      <h2  className='mt-4 text-gray-400'>Privacy Policy</h2>
      <h2  className='mt-4 text-gray-400'>Terms Of Services</h2>
      <h2  className='mt-4 text-gray-400'>Categories</h2>
      <h2  className='mt-4 text-gray-400'>About</h2>
      </div>

      <div className='flex mt-16 mb-24'>
      <h2 className='text-gray-400'>United States</h2>
      <MdKeyboardArrowDown className='text-gray-400 text-2xl'/>

      </div>
    </div>

    </div>
  );
};

export default Footer;