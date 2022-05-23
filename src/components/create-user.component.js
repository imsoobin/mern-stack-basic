import React, { useState } from "react";
import axios from "axios";

function CreateUser(props) {
  const [username, setUsername] = useState("");
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
    };
    // console.log(user);
    axios
      .post("http://localhost:5000/user/add", user)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={handleChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
