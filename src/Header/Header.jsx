import moment from "moment";
import { CiCircleCheck } from "react-icons/ci";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {


  return (
    <div className="">
      <h2 className="text-2xl md:text-4xl md:m-6">Best Website builders in the US</h2>
      <hr />
    

    <div className="flex justify-between text-gray-500 p-4">
    <div className="flex gap-6 ">
    <div className="flex gap-2">
    <CiCircleCheck className="mt-1 text-xl"/>
    <h2 >Last Updated - {moment().format('MMMM D, YYYY')}</h2>
    </div>
    <div className="flex gap-2">
    <HiOutlineInformationCircle className="mt-1 text-xl"/>

<h2>
  Advertising Disclosure
</h2>
    </div>
    </div>
    <div className="flex gap-2">
   

      <h2>Top Relevant</h2>
      <IoIosArrowDown className="mt-1 text-xl"/>
    </div>
    </div>

    <hr />

   

   <div className="text-gray-500 mt-4 flex justify-around">
    <h2>Tools</h2>
    <h2>AWS Builder</h2>
    <h2>Start Build</h2>
    <h2>Build Supplies</h2>
    <h2>Tooling</h2>
    <h2>BlueHosting</h2>
   </div>

   <div className="text-gray-500 mt-5 flex gap-4">
    <h2 >Home</h2>
    <MdKeyboardArrowRight className="mt-1 text-xl" />

    <h2>Hosting for all</h2>
    <MdKeyboardArrowRight className="mt-1 text-xl" />

    <h2>Hosting</h2>
    <MdKeyboardArrowRight className="mt-1 text-xl" />

    <h2>Hosting6</h2>
    <MdKeyboardArrowRight className="mt-1 text-xl" />

    <h2>Hosting5</h2>
   </div>
    




    </div>
  );
};

export default Header;