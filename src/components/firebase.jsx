import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./form.css";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setfeedback] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const res = await axios.post(
      "https://formdata-ea0fb-default-rtdb.firebaseio.com/.json",
      {
        body: JSON.stringify(data),

        headers: {
          "content-Type": "application/json",
        },
      }
    );
    console.log(data);
    alert(JSON.stringify(data));
    alert("Feedback added");
  };

  return (
    <div>
      <form action="/" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <h1>Feedback</h1>

        <label id="label1">First name</label>
        <input
          type="text"
          {...register("firstName", { required: true })}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        {errors.firstName && <p>This is required</p>}

        <label id="label2">Last name</label>
        <input
          type="text"
          {...register("lastName", { required: true })}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        {errors.lastName && <p>This is required</p>}

        <label id="label3">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && <p>This is required</p>}

        <label>Feedback</label>

        <textarea
          rows="2"
          cols="65"
          {...register("feedback", { require: true })}
          onChange={(e) => {
            setfeedback(e.target.value);
          }}
        />

        <input type="submit" />

        <input
          style={{ display: "block", marginTop: 20 }}
          type="reset"
          value="reset "
        />
      </form>
    </div>
  );
}
export default Form;
