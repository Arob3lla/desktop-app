import { useEffect, React, useState } from "react";
import { deleteUser, fetchAllUsers, getUser } from "../apis/user";
import { Link, useNavigate } from "react-router-dom";
const AllUsers = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState({
    name: "",
    cnic: "",
  });
  const [searchedUser, setSearchedUser] = useState([]);
  //1.DELETE USER
  const handleDeleteClick = async (e, user) => {
    e.stopPropagation();
    await deleteUser(user.id);
    // setShowModal(true);
  };
  //2.CONFIRM THE USER DELETION
  const handleConfirmDelete = async () => {
    if (selectedUser) {
      await deleteUser(selectedUser.id);
    }
  };

  //3.CANCEL LOGIC
  const handleCancelDelete = async () => {
    selectedUser(null);
    showModal(false);
  };
  // TO RETRIEVE ALLUSERS AT RENDER
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchAllUsers();
      setUsers(fetchedUsers);
    };
    getUsers();
  }, []);
  //LOGIC TO CLEAR THE SEARCH INPUT
  const handleFocus = (fieldName) => {
    setSearchParams((prevState) => ({
      ...prevState,
      [fieldName]: "",
    }));
  };
  //4.HANDLE THE SEARCH LOGIC
  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //NAVIGATION AND USER TRANSFER
  const handleClick = (user) => {
    navigate("/userDetails", { state: { user } });
  };
  //3.SEARCH LOGIC
  const searchUser = async (e) => {
    if (e.key === "Enter") {
      try {
        const user = await getUser(e.target.value);
        if (user.length === 0) {
          setIsUser(true);
        } else if (user.length > 0) {
          setIsUser(false);
        }
        console.log("this is isuser", user);
        setSearchedUser(user);
      } catch (error) {}
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-start pb-3">
        <div className="flex-none px-2">
          <div className="form-control">
            <input
              type="text"
              name="name"
              value={searchParams.name}
              onChange={handleSearch}
              onFocus={() => {
                handleFocus("cnic");
              }}
              onKeyPress={(e) => {
                searchUser(e);
              }}
              placeholder="Search by Name"
              className="input input-bordered rounded-full w-24 md:w-auto bg-gray-900 border-black"
            />
          </div>
        </div>
        <div className="flex-none px-2">
          <div className="form-control">
            <input
              type="number"
              name="cnic"
              onChange={handleSearch}
              onKeyPress={(e) => {
                searchUser(e);
              }}
              onFocus={() => {
                handleFocus("name");
              }}
              value={searchParams.cnic}
              placeholder="Search by CNIC"
              className="input input-bordered rounded-full w-24 md:w-auto border-black bg-gray-900"
            />
          </div>
        </div>
        {/* <button className="btn rounded-full" onClick={searchUser}>
          Search
        </button> */}

        <div className="absolute  right-10">
          {" "}
          <Link className="btn btn-outline rounded-full" to="/createUser">
            {" "}
            +ADD
          </Link>
        </div>
      </div>
      {isUser ? (
        <div className="flex justify-center text-2xl pt-4 font-bold text-red-500">
          No user found
        </div>
      ) : (
        searchedUser.length > 0 && (
          <div className="overflow-x-auto p-4">
            <h2 className="flex justify-center p-4 text-2xl font-bold">
              Search Record
            </h2>

            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Cnic</th>
                  <th>created at</th>
                  <th>payment</th>
                </tr>
              </thead>
              {searchedUser.map((users, index) => (
                <tbody key={index}>
                  {/* row 1 */}
                  <tr
                    className="hover  cursor-pointer text-lg"
                    onClick={() => {
                      handleClick(users);
                    }}
                  >
                    <th>{users.id}</th>
                    <th>{users.name.toUpperCase()}</th>
                    <td>{users.cnic}</td>
                    <td> {users.created_at}</td>
                    <td>{users.payment}</td>
                    <td>
                      <button
                        onClick={(e) => {
                          deleteUser(e, users.id);
                        }}
                        className="btn btn-outline btn-error rounded-full"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )
      )}

      <div className="overflow-x-auto p-4">
        <h2 className="flex justify-center p-4 text-2xl font-bold text-black">
          All Tenats
        </h2>
        <table className="table text-black">
          <thead>
            <tr className="text-black">
              <th>ID</th>
              <th>Name</th>
              <th>CNIC</th>
              <th>Created At</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                onClick={() => {
                  handleClick(user);
                }}
                className="hover:bg-gray-50 cursor-pointer text-lg"
                key={index}
              >
                <td>{user.id}</td>
                <td>{user.name.toUpperCase()}</td>
                <td>{user.cnic}</td>
                <td>{user.created_at}</td>
                <td>{user.payment}</td>
                <td>
                  <button
                    onClick={(e) => handleDeleteClick(e, user)}
                    className="btn btn-outline btn-error rounded-full"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete user </p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCancelDelete}
                className="btn btn-secondary mr-2"
              >
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="btn btn-error">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
