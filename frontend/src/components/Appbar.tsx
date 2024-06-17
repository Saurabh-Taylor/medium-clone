import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export default function AppBar() {
  return (
    <div className="border-b-2 mb-11 py-4 flex justify-between items-center px-10">
      <Link to={`/blogs`}>
        <div>Medium</div>
      </Link>
     <div>
        <Link to={`/publish`} >
        <button
        type="button"
        className=" mr-4 focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        Add A New Blog
      </button> 
        </Link>
      <Avatar name={"saurabh"}  />
     </div>
    </div>
  );
}
