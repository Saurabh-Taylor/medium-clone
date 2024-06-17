import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog{
    author:{
        name:string
    },
    title:string
    content:string
    id:string
}

export const useBlogs = ()=>{
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])


    useEffect(()=>{
        const fetchBlogs = async()=>{
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/allBlogs` , {
                headers: {
                    Authorization:localStorage.getItem("token")
                }
            })
            setLoading(false)
            setBlogs(response.data.blog)
        }
        fetchBlogs()
    } , [])

    return {
        loading,
        blogs
    }

}

export const useBlog = ({id}:{id:string})=>{
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()


    useEffect(()=>{
        const fetchBlogs = async()=>{
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}` , {
                headers: {
                    Authorization:localStorage.getItem("token")
                }
            })
            console.log("single blog::" , response.data);
            
            setLoading(false)
            setBlog(response.data.blog)
        }
        fetchBlogs()
    } , [])

    return {
        loading,
        blog
    }
}