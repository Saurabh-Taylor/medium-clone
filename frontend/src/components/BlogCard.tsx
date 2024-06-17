import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:number | string
}

export default function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) {
  return (
      <Link to={`/blog/${id}`} >
      <div className="  ml-3 mt-4 cursor-pointer  ">
        <div className="mb-3">
          <Avatar name={authorName} />
          <span className="font-normal">{authorName}</span>
          <span className="px-1"> ·</span>
          <span className="text-slate-500">{publishedDate} </span>
        </div>
        {/* title  */}
        <div className="font-bold text-3xl">{title}</div>

        {/* content */}
        <div className="mb-4">{content.slice(0, 100) + "..."}</div>
        <div className="border-b-2 mb-6 pb-6 text-slate-500">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
}

export function Avatar({ name}: { name: string; }) {

  return (
    <div className={`mr-2 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className=" font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
    </div>
  );
}
