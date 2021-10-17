import React, { useState, useEffect } from "react";
import "../pages/EditUser.css";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getsingleUsers, updateUsers } from "../redux/actions";

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");

  let { id } = useParams();
  const { user } = useSelector((state) => state.data);

  let history = useHistory();

  let dispatch = useDispatch();

  const { name, email, contact, address } = state;

  useEffect(() => {
    dispatch(getsingleUsers(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please input all input Field ");
    } else {
      dispatch(updateUsers(state, id));
      history.push("/");
      setError("");
    }
  };

  return (
    <>
      <div className="container text-center">
        <button
          type="button"
          onClick={() => history.push("/")}
          className="btn btn-success my-4"
        >
          Go Back To Home Page
        </button>
        <div className="container text-center">
          <div className="AddUser">
            <div className="main-block">
              <div className="left-part">
                <i className="fas fa-envelope"></i>
                <i className="fas fa-at"></i>
                <i className="fas fa-mail-bulk"></i>
              </div>
              <form onSubmit={handleSubmit}>
                <h1>Edit Users Details</h1>
                {error && <h5 style={{ color: "red" }}>"{error}"</h5>}
                <div className="info">
                  <input
                    className="fname"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    value={name}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={email}
                  />
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    onChange={handleInputChange}
                    value={contact}
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleInputChange}
                    value={address}
                  />
                </div>

                <button type="submit" href="/">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
