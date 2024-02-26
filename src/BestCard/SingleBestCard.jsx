import { MdKeyboardArrowDown } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";

import { BsTrophy } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

const SingleBestCard = ({card}) => {
  console.log('card',card);

  return (
    <div>
     

     <div className='grid grid-cols-1 md:grid-cols-3 mt-4'>
      <div>
        {
          card.best==='Best Choice' ?
          <div className="p-2 flex gap-2  bg-orange-500 text-white text-xl w-44 rounded-r-2xl" >
        <BsTrophy className="mt-1 text-center"/>
          <h2 className="text-center">{card.best}</h2>
        </div>
        :
        card.best==='Best Value' ?
        <div className="p-2 flex gap-2  bg-orange-500 text-white text-xl w-44 rounded-r-2xl" >
        <IoDiamondOutline className="mt-1 text-center"/>
          <h2 className="text-center">{card.best}</h2>
        </div>
        :
        null
        }
        <div>
        <div className="border mt-2  border-gray-400 w-10 h-10 rounded-full">
         <h2 className="px-4 py-2  ">{card.id}</h2>
         </div>
        <div className="flex justify-center">
        <img src={card.image} alt="" /> 
        </div>
        <h2 className="text-center text-gray-500 text-lg">{card.name}</h2>
        </div>

      </div>


      <div className="md:mt-4">
       <h2>
        <span className=" font-bold text-balance">{card.desFirst}</span>{card.des}
       </h2>
       <h2 className="font-bold mt-2">Main Highlight</h2>
       <h2 className="ml-4 mt-2">{card?.main}</h2>

       <div className="flex text-blue-600 mt-4 gap-2">
       <h2 >Show More</h2>
       <MdKeyboardArrowDown className="text-xl mt-1"/>

       
      </div>

      </div>



      <div className="flex flex-col items-center">
  <div className="grid justify-center md:mt-4">
    <div className="flex">
      <h2 className="text-6xl text-blue-600">{card.total}</h2>
      <HiOutlineInformationCircle className="mt-[-8px] text-gray-500" />
    </div>
    <h2 className="text-xl text-blue-700 mt-4">{card.priority}</h2>
    {
      card.rating ==='5' ?
      <div className="flex mt-2 ">
<IoMdStar className="text-amber-400 text-xl"/>
<IoMdStar className="text-amber-400 text-xl"/>
<IoMdStar className="text-amber-400 text-xl"/>
<IoMdStar className="text-amber-400 text-xl"/>
<IoMdStar className="text-amber-400 text-xl"/>

      </div>
    
      :
      <div className="flex mt-2 ">
      <IoMdStar className="text-amber-400 text-xl"/>
      <IoMdStar className="text-amber-400 text-xl"/>
      <IoMdStar className="text-amber-400 text-xl"/>
      <IoMdStar className="text-amber-400 text-xl"/>
      <IoMdStarHalf className="text-amber-400 text-xl"/>

      
            </div>
    }
  </div>

  <div className="bg-blue-500 md:mt-16 w-4/6 rounded-r-2xl h-12 flex justify-center items-center rounded-l-2xl ">
    <button className="text-xl text-white ">View</button>
  </div>
</div>


     </div>




    </div>
  );
};

export default SingleBestCard;