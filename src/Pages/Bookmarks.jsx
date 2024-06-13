import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utility";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlog = getBlogs();
    setBlogs(storedBlog);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlog = getBlogs();
    setBlogs(storedBlog);
  };
  if (blogs.length < 1) {
    return <EmptyState message={'No Bookmarks Available !'} address={'/blogs'} label={'Go Back'}></EmptyState>;
  }
  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          deletable={true}
          key={blog.id}
          blog={blog}
          handleDelete={handleDelete}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
