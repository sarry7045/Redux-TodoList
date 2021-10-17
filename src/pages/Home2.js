import React, { useEffect } from "react";
import { deleteUsers, loadUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "../pages/Home2.css";
// import { useEffect } from "react";

const Home2 = () => {
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  console.log(users);

  let history = useHistory();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Wanted To Delete the User?")) {
      dispatch(deleteUsers(id));
    }
  };

  return (
    <div className="container text-center">
      <button
        type="button"
        className="btn btn-primary my-4 "
        onClick={() => history.push("/addUser")}
      >
        Add Users
      </button>
      <div className="content-table">
        <table className="container my-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Action1</th>
              <th>Action2</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>{user.address}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => history.push(`/editUser/${user.id}`)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            <tr class="active-row">
              <td>Name</td>
              <td>Email</td>
              <td>Contact</td>
              <td>Address</td>
              <td>Action1</td>
              <td>Action2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home2;
