import React from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const AllUsers = () => {
    const headers = ['Name', 'Email', 'Role', 'Action'];

    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:8080/api/users');
            return res.data.data;
        }
    });

    const handleDeleteUser=(_id)=>{
        axios.delete(`http://localhost:8080/api/users/${_id}`)
        .then(res=>{
            console.log(res.data)
            refetch()
        })
    }
    const handeleMakeAdmin=(_id)=>{
        axios.patch(`http://localhost:8080/api/users/${_id}/make-admin`)
        .then(res=>{
            console.log(res.data)
        })
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Users</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                            {headers.map((header, index) => (
                                <th key={index} className="px-6 py-3 text-left">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                                <td className="px-6 py-3">{user.name}</td>
                                <td className="px-6 py-3">{user.email}</td>
                                <td className="px-6 py-3">
                                    <button onClick={()=>handeleMakeAdmin(user._id)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                                        {
                                            user.role === 'admin' ? 'admin' : 'Make admin'
                                        }
                                    </button>
                                </td>
                                <td className="px-6 py-3">
                                    <button onClick={()=>handleDeleteUser(user._id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
