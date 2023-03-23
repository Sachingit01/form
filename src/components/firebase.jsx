import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./form.css";
function Form() {
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
  };

  return (
    <form action="/" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" {...register("firstName", { required: "true" })} />
      {errors.firstName && <p>This is required</p>}

      <label>Last name</label>
      <input type="text" {...register("lastName", { required: true })} />
      {errors.lastName && <p>This is required</p>}

      <label>Email</label>
      <input type="email" {...register("Email", { required: true })} />
      {errors.Email && <p>This is required</p>}
      <input type="submit" />
      <input
        style={{ display: "block", marginTop: 20 }}
        type="reset"
        value=" reset "
      />
    </form>
  );
}

export default Form;
