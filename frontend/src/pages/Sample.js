import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const Sample = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact } = initialState;

  const history = useHistory();
  const addContact = async (data) => {
    const response = await axios.post("http://localhost:5000/user", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleInputChange = (e) => {
    console.log(e.target.name);
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Wprowadź wartość");
    } else {
      addContact(state);
      history.push("/");
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Nazwa</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nazwa ..."
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email ..."
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor="contact">Kontakt</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Nr kontaktowy ..."
          onChange={handleInputChange}
          value={contact}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Sample;
