import {  useState } from "react";
import AppBar from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {

    const [data , setData] = useState({
        title:"",
        content:""
    })
    const navigate = useNavigate()

    async function createBlog() {
        const response  = await axios.post(`${BACKEND_URL}/api/v1/blog/createBlog`, data ,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })

        navigate(`/blog/${response.data.id}`)
        
    }

  return (
    <div>
      <AppBar />
      <div className=" border-4 mx-2 w-3/4 mb-4">
        <label className="  ml-4  block mb-2 text-sm font-medium text-gray-900 dark:text-black">
          Your Blog Title :
        </label>
        <input
          type="email"
          id="helper-text"
          value={data.title}
          onChange={(e)=>setData({...data , title:e.target.value })}
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-[80%] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-4 py-4"
          placeholder="Title"
        />
      </div>
      {/* //content */}
      <div className=" border-4 mx-2 w-3/4 " >
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black  ml-4"
      >
        Your content :
      </label>
      <textarea
      value={data.content}
      onChange={(e)=>setData({...data , content:e.target.value })}
        id="message"
        rows={8}
        className=" ml-4 max-w-[80%] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <button onClick={createBlog} type="button" className= " mt-4 ml-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>

    </div>
    </div>
  );
};

