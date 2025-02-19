import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import SideBar from "../../components/category_search/SideBar";
import axios from "axios";
import DOMPurify from "dompurify";

const BlogDetails = () => {
  const { id } = useParams();

  const { data: blogDetails, isLoading, error } = useQuery({
    queryKey: ["blogDetails", id],
    queryFn: async () => {
      const res = await axios.get(`https://backendp-rho.vercel.app/api/blog/${id}`);
      return res.data.data;
    },
  });

  // Update meta tags manually when data is available
  useEffect(() => {
    if (blogDetails) {
      document.title = blogDetails.title || "Default Title"; // Update page title

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          DOMPurify.sanitize(blogDetails.details.replace(/<\/?[^>]+(>|$)/g, "")) || "Default Description"
        );
      } else {
        const newMetaDescription = document.createElement("meta");
        newMetaDescription.name = "description";
        newMetaDescription.content = DOMPurify.sanitize(blogDetails.details.replace(/<\/?[^>]+(>|$)/g, "")) || "Default Description";
        document.head.appendChild(newMetaDescription);
      }

      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", blogDetails.keyword || "default, keywords, here");
      } else {
        const newMetaKeywords = document.createElement("meta");
        newMetaKeywords.name = "keywords";
        newMetaKeywords.content = blogDetails.keyword || "default, keywords, here";
        document.head.appendChild(newMetaKeywords);
      }

      // Update meta author
      const metaAuthor = document.querySelector('meta[name="author"]');
      if (metaAuthor) {
        metaAuthor.setAttribute("content", blogDetails.publish_by || "Top Orion");
      } else {
        const newMetaAuthor = document.createElement("meta");
        newMetaAuthor.name = "author";
        newMetaAuthor.content = blogDetails.publish_by || "Top Orion";
        document.head.appendChild(newMetaAuthor);
      }
    }
  }, [blogDetails]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!blogDetails) return <div>No blog details found!</div>;

  return (
    <div className="mt-4">
      <div className="flex justify-between gap-4">
        <div className="w-[70%]">
          <img className="w-10/12 " src={blogDetails.blogImage} alt={blogDetails.title} />
          <div className="flex justify-between ">
            <p className="px-4 text-blue-700">Published By - {blogDetails.publish_by}</p>
            <p className="px-4 text-blue-700">
              Publish Date: {new Date(blogDetails.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-black px-4 mt-6 mb-3">{blogDetails.title}</p>
            <p
              className="mt-2 text-gray-800 px-4"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blogDetails.details),
              }}
            ></p>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default BlogDetails;
