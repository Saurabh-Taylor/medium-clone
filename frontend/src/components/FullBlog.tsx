import AppBar from "./Appbar"


import {  Blog } from "../hooks";
import { Avatar } from "./BlogCard";


export  const FullBlog = ({blog}:{blog:Blog | undefined})=>{
    return(
       <div >
        <AppBar />
         <div className="grid grid-cols-12 px-10 mt-4 max-h-screen" >
            <div className="col-span-8 " >
                <div className="text-3xl font-extrabold mb-1 " >
                    {blog?.title}
                </div>
                <div className="text-slate-500 mb-4 " >
                    posted on 2nd dec
                </div>
                <div>
                    {blog?.content}
                </div>
            </div>
            <div className="col-span-4 border-4 min-h-64" >
                <div className=" mb-4 text-lg" >Author</div>
               <div className="flex items-center " >
                <div className="" > <Avatar name={blog?.author.name || "Anonymous"} /> </div>
                <div className="text-slate-600 font-bold text-3xl " >{blog?.author.name}</div>
               </div>
            </div>
        </div>
       </div>
    )
}