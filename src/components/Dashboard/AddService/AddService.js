import React, { useContext } from "react";
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
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
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
        <form className="col-md-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="ServiceName">Service Title</label>

            <input
              name="ServiceName"
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
        </form>
      </div>
    </section>
  );
};

export default AddService;
