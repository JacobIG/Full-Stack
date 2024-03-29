import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const View = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  console.log("user", id);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    console.log("response", response);
    if (response.status === 200) {
      setUser({ ...response.data[0] });
    }
  };
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Dane użytkownika</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id} </span>
          <br />
          <br />
          <strong>Nazwa: </strong>
          <span>{user && user.name} </span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{user && user.email} </span>
          <br />
          <br />
          <strong>Kontakt: </strong>
          <span>{user && user.contact} </span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Wróć</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
