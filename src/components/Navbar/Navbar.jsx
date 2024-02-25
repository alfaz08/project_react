import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className="bg-black text-white p-2">
     <div className=" max-w-3xl mx-auto flex justify-around ">
     <div className="bg-white w-36 md:w-48   m-2 rounded-lg">
     <CiSearch className="text-gray-400 m-1" />
      </div>
      <h2 className="m-1 md:m-2">Categories</h2>
      <h2 className="m-1 md:m-2">Website Builders</h2>
      <h2 className="m-1 md:m-2">Today's Deal</h2>
     </div>
    </div>
  );
};

export default Navbar;