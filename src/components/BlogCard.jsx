import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import placeholderImage from '../assets/404.jpg'

const BlogCard = ({blog, deletable, handleDelete}) => {
    // console.log(blog);
    const {cover_image, title, description, published_at, id} = blog;

    
  return (
    <div className="flex relative transition border-2 border-primary hover:border-secondary hover:scale-105 rounded-lg border-opacity-30 p-2 md:p-4">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image ? cover_image : placeholderImage }
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400 dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()};
          </span>
          <p>
           {description}
          </p>
        </div>
      </Link>
      {deletable && <div onClick={() => handleDelete(id)} className="absolute bg-error p-3 hover:scale-105 hover:bg-red-600 rounded-full -top-5 -right-5"><MdDeleteForever size={25} className="text-white"/></div>}
    </div>
  );
};

export default BlogCard;
