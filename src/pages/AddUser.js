import React, { useState } from "react";
import "../pages/AddUser.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/actions";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState("");

  let history = useHistory();

  let dispatch = useDispatch();

  const { name, email, contact, address } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("Please input all input Field ");
    } else {
      dispatch(addUsers(state));
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
                <h1>Add New Users</h1>
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
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
