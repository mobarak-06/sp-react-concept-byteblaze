import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem('blog');
  if (storedBlogs) {
   return blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

// save
export const saveBlog = blog => {
  const blogs = getBlogs();
  console.log(blogs);
  
  const isExist = blogs.find( b => b.id === blog.id)

  if (!isExist) {
    blogs.push(blog);
    localStorage.setItem('blog', JSON.stringify(blogs))
    toast.success('Successfully Bookmarked!')
  }else{
   return toast.error('Already Bookmark!');
  }
   
};

// delete
export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remaining = blogs.filter((item) => item.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Blog Remove From Bookmark");
};
