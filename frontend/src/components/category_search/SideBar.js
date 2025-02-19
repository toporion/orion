import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SideBar = ({ seachIt }) => {
    const [categories, setCategories] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        // Fetch categories
        axios.get('https://backendp-rho.vercel.app/api/blog/categories')
            .then(res => {
                setCategories(res.data.categories || []);
            })
            .catch(err => {
                console.error('Error fetching categories:', err);
                setCategories([]); // Fallback in case of error
            });

        // Fetch recent posts
        axios.get('https://backendp-rho.vercel.app/api/blog/recent')
            .then(res => {
                console.log('check recent post', res.data.recent); // Check data structure
                setRecentPosts(res.data.recent || []); // Update state with recent posts
            })
            .catch(err => {
                console.error('Error fetching recent posts:', err);
                setRecentPosts([]); // Fallback in case of error
            });
    }, []);

    return (
        <div>
            {/* Search input */}
            <div>
                <input
                    type="text"
                    onChange={seachIt}
                    className="border outline-none w-full p-2 bg-slate-200"
                    placeholder="Search here"
                />
            </div>

            {/* Categories Section */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">Categories</h2>
                <ul className="space-y-2">
                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                            <li key={index} className="cursor-pointer hover:text-blue-600 transition">
                                {category}
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">No categories found.</p>
                    )}
                </ul>
            </div>

            {/* Recent Posts Section */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-2">Recent Posts</h2>
                <ul className="space-y-3">
                    {recentPosts.length > 0 ? (
                        recentPosts.map((post) => (
                            <li key={post._id} className="flex items-center space-x-3">
                                <img
                                    src={post.blogImage || "/placeholder.jpg"}
                                    alt={post.title}
                                    className="w-12 h-12 rounded-md object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium hover:text-blue-600 cursor-pointer"><Link to={`/blogDetails/${post._id}`}>{post.title}</Link></p>
                                    <span className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">No recent posts available.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
