import { MdKeyboardArrowDown } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";

import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoMdStar,IoMdStarOutline } from "react-icons/io";


const LastCard = () => {
  return (
    <div>
       <div className='grid grid-cols-1 md:grid-cols-3 mt-4'>
  
       <div>
        <div className="border mt-2  border-gray-400 w-10 h-10 rounded-full">
         <h2 className="px-4 py-2  ">4</h2>
         </div>
        <div className="flex justify-center">
        <img src="https://i.ibb.co/GkrTdR9/Screenshot-1-removebg-preview.png" alt="" /> 
        </div>
        <h2 className="text-center text-gray-500 text-lg">CDK</h2>
        </div>

      <div className="md:mt-4">
       <h2>
        <span className=" font-bold text-balance">CDK Resposive Builder:</span>
        An extensive library of widgets and apps, and detailed step-by-step guides
       </h2>
       <h2 className="bg-gray-200 max-w-max p-1 text-blue-900">26% Off</h2>
       <h2 className="font-bold mt-2">Main Highlight</h2>
       <div className="ml-4 mt-2 bg-orange-100 rounded-lg">
       <div className="flex gap-4 p-2">
       <h2 className="text-lg rounded-r-md rounded-l-md w-8 bg-white text-blue-500 p-1">
          9.9
        </h2>
       <h2 className="text-lg">Building Responsive</h2>
       </div>
       <div className="flex gap-4 p-2">
       <h2 className="text-lg rounded-r-md rounded-l-md w-8 bg-white text-blue-500 p-1">
          8.9
        </h2>
       <h2 className="text-lg">Cool</h2>
       </div>
       <div className="flex gap-4 p-2">
       <h2 className="text-lg rounded-r-md rounded-l-md w-8 bg-white text-blue-500 p-1">
         8.9
        </h2>
       <h2 className="text-lg">Docs</h2>
       </div>
      
       </div>


       <h2 className="font-bold mt-2">Why we love it</h2>
       <div className="flex gap-4">
       <SlArrowDown className="mt-1 bg-slate-100 rounded-full p-2 text-blue-600 w-8 h-8"/>
       <h2 className="text-lg mt-1">Documentation</h2>
       </div>
       <div className="flex gap-4">
       <SlArrowDown className="mt-1 bg-slate-100 rounded-full p-2 text-blue-600 w-8 h-8"/>
       <h2 className="text-lg mt-1">Easy Use</h2>
       </div>
       <div className="flex gap-4">
       <SlArrowDown className="mt-1 bg-slate-100 rounded-full p-2 text-blue-600 w-8 h-8"/>
       <h2 className="text-lg mt-1">Out Of Box</h2>
       </div>
       

       


       <div className="flex text-blue-600 mt-4 gap-2">
       <h2 >Show More</h2>
       <MdKeyboardArrowDown className="text-xl mt-1"/>

       
      </div>


     
      </div>



      <div className="flex flex-col items-center">
  <div className="grid justify-center md:mt-4">
    <div className="flex">
      <h2 className="text-6xl text-blue-600">9.1</h2>
      <HiOutlineInformationCircle className="mt-[-8px] text-gray-500" />
    </div>
    <h2 className="text-xl text-blue-700 mt-4">Very Good</h2>
    <div className="flex mt-2 ">
      <IoMdStar className="text-amber-400 text-xl"/>
      <IoMdStar className="text-amber-400 text-xl"/>
      <IoMdStar className="text-amber-400 text-xl"/>
      <IoMdStar className="text-amber-400 text-xl"/>
      <IoMdStarOutline className="text-amber-400 text-xl"/>

      
            </div>
  </div>

  <div className="mt-6 md:mt-72 bg-blue-500 w-4/6 rounded-r-2xl  h-12 flex justify-center items-center rounded-l-2xl ">
    <button className="text-xl text-white ">View</button>
  </div>
</div>


     </div>
    </div>
  );
};

export default LastCard;