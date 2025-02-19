import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DOMPurify from "dompurify";
import SideBar from "../../components/category_search/SideBar";
import { Link} from 'react-router-dom';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState(" ");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: posts = {}, refetch, isFetching,isLoading } = useQuery({
    queryKey: ["postData", searchQuery, currentPage],
    queryFn: async () => {
      const res = await axios.get("https://backendp-rho.vercel.app/api/blog", {
        params: { search: searchQuery, page: currentPage },
      });
      console.log(res.data);
      return res.data.data;
    },
    keepPreviousData: true,
  });
  if(isLoading){
    return <div className=" text-center"><span className="loading loading-spinner text-error"></span></div>
  }
  const { blogs = [], pagination = {} } = posts;
  console.log(pagination.totalPages)

  const conCateText = (text, wordsLimit) => {
    const words = text.split(" ");
    if (words.length <= wordsLimit) {
      return text;
    }
    return words.slice(0, wordsLimit).join(" ") + "...";
  };

  const handleSearchPage = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
    refetch()
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <div>
      <div className="flex justify-between gap-6 mt-4">
        <div className="w-[70%]">
          {blogs.map((blog) => (
            <div key={blog._id} className="mb-6 p-4 border rounded-lg shadow">
              <div>
                <img
                  className="w-1/2 rounded"
                  src={blog.blogImage || ""}
                  alt="Blog"
                />
                <p className="text-4xl font-bold text-black">{blog.title}</p>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <p>Published By: {blog.publish_by}</p>
                  <p>
                    Publish Time:{" "}
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                  <p>Likes: {blog.like}</p>
                </div>
                <p
                  className="mt-2 text-gray-800"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(conCateText(blog.details, 50)),
                  }}
                ></p>
                <p><Link to={`/blogDetails/${blog._id}`}><button className="btn btn-success">Read More</button></Link></p>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 mx-1 text-white bg-gray-400 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 transition"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: pagination.totalPages || 0 }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 mx-1 rounded-lg transition ${currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="px-4 py-2 mx-1 text-white bg-gray-400 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 transition"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pagination.totalPages}
            >
              Next
            </button>
          </div>

        </div>
        <div className="w-[30%] border p-4 shadow rounded-lg">
          <p className="font-semibold">Sidebar</p>
          <SideBar seachIt={handleSearchPage} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
