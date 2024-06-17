import AppBar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import BlogSkeleton from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"




const Blogs = () => {

  const {blogs , loading} = useBlogs()

  if(loading){
    return <div>
      <AppBar />
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
      <BlogSkeleton/>
    </div>
  }
 

  return (
    <div className="" >
        <AppBar />
       {blogs.map((blog)=>{
        return <BlogCard id={blog.id} key={blog.id} authorName={blog.author.name} content={ blog.content } title={blog.title} publishedDate="10-10-2000" />
       })}
        {/* <BlogCard  authorName={"saurabh"} content="content of blog " title="title of the blog" publishedDate="10-10-2000" /> */}
    </div>
  )
}

export default Blogs