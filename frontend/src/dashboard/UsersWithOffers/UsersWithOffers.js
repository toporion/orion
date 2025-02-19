import { useEffect, useState } from "react";

const UsersWithOffers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  // Function to fetch users
  const fetchUsers = (pageNumber, searchQuery) => {
    setLoading(true);
    fetch(`https://backendp-rho.vercel.app/api/offer/usersWithOffers?page=${pageNumber}&limit=10&search=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data.totalUsers);
        setTotalPages(data.data.pagination.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  };

  // Fetch users on page or search change
  useEffect(() => {
    fetchUsers(page, search);
  }, [page, search]);

  useEffect(() => {
      fetchUsers(page, search); 
    
  }, [page, search]);
  

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Users with Offers</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full max-w-md"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Token</th>
                  <th className="border p-2">Discount</th>
                  <th className="border p-2">Offer Name</th>
                  <th className="border p-2">Offer Status</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user._id} className="text-center">
                      <td className="border p-2">{user.name}</td>
                      <td className="border p-2">{user.email}</td>
                      <td className="border p-2">{user.token || "N/A"}</td>
                      <td className="border p-2">{user.discount ? `${user.discount}%` : "N/A"}</td>
                      <td className="border p-2">{user.offer ? user.offer.name : "N/A"}</td>
                      <td className="border p-2">{user.offer?.isActive ? "Active" : "Inactive"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-4">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-wrap justify-center mt-4 space-x-2">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="px-3 py-1 border bg-gray-200 disabled:opacity-50"
            >
              Prev
            </button>

            {/* Show numbered pagination */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setPage(index + 1)}
                className={`px-3 py-1 border ${page === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="px-3 py-1 border bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UsersWithOffers;
