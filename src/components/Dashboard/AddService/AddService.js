import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import { logo } from "../../../images/logos/logo.png";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { serviceData } from "../../../fakeData/serviceData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const AddService = () => {
  // const { register, handleSubmit, watch, errors } = useForm();

  // const onSubmit = (values) => {
  //   const serviceDetails = {
  //     name: values.name,
  //     image: values.image,
  //     description: values.description,
  //   };

  //   fetch("http://localhost:5000/addService", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(serviceDetails),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) {
  //         alert("New Service Added Successfully");
  //       }
  //     });
  // };

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("description", info.description);

    fetch("http://localhost:5000/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your Review Posted Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };

  return (
    <section style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="col-lg-6">
        <div className="row mb-5 justify-content-md-center">
          <center>
            <h1 className="mt-5 text-center">Add Services</h1>
          </center>
        </div>
        {/* <form className="col-md-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Service Title</label>

            <input
              name="name"
              placeholder="Enter Title"
              className={`form-control`}
              ref={register({ required: "Service Title is required" })}
            />
          </div>
          <ErrorMessage
            className="invalid-feedback"
            name="fullName"
            as="div"
            errors={errors}
          />

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              style={{ height: 100 }}
              name="description"
              placeholder="Enter Description"
              className={`form-control`}
              ref={register({ required: "Description is required" })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="description"
              as="div"
              errors={errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fileUpload">Icon</label>
            <button type="button" className="btn btn-outline-success btn-block">
              {" "}
              <FontAwesomeIcon icon={faCloudUploadAlt} /> <bn />
              Upload Images
            </button>
          </div>

          <button className="btn btn-success text-white" type="submit">
            Submit
          </button>
        </form> */}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Service Title</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter Description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="file">Upload Icon</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              placeholder="Upload Image"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
