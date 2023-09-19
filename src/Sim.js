import axios from 'axios';
import React, { useState } from 'react';

export default function Sim() {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          className="border-2"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="body"
          className="border-2"
          value={formData.body}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
