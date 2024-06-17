 const BlogSkeleton = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
       <div className="  ml-3 mt-4 cursor-pointer  ">
        <div className="mb-3">
        <div className="h-4  bg-gray-200 rounded-full  w-48 mb-4"></div>
        </div>
        {/* title  */}
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

        {/* content */}
        <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
      </div>
      
      
      
     
      
      <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default BlogSkeleton
