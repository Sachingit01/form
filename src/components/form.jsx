import React, { useEffect, useRef, useState } from "react";
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
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8007/Base", {
        firstName,
        lastName,
        email,
        feedback,
      });
      console.log(res.data);
    } catch (e) {
      alert(e);
      console.log(e);
    }
    // alert(JSON.stringify(data));
    alert("Feedback added");
    console.log(data);

    // const datas = await axios.get("http://localhost:8007/Base", {});
  };
  console.log(errors);

  function Retriving() {
    const [records, setRecord] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:8007/Base")
        .then((res) => {
          setRecord(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  }
  return (
    // <div>
    // {records.map((post,i)=>{
    //   <div key={i}>
    //     <h3>{post.id}</h3>
    //     <p>{post.firstName}</p>
    //     <p>{post.lastName}</p>
    //     <p>{post.email}</p>
    //   </div>

    // })}

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
