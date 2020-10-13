import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import { logo } from "../../../images/logos/logo.png";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { serviceData } from "../../../fakeData/serviceData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  let { serviceId } = useParams();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [services, setServices] = useState(serviceData);

  // useEffect(() => {
  //   if (services.length) {
  //     fetch("http://localhost:5000/services")
  //       .then((res) => res.json())
  //       .then((data) => setServices(data));
  //   }
  // }, [services]);

  // console.log(services);

  const service = serviceData.find(
    (srvc) => srvc.id.toString() === serviceId.toString()
  );

  const onSubmit = (values) => {
    const orderDetails = {
      ...loggedInUser,
      name: values.fullName,
      email: values.email,
      orderedService: values.orderedService,
      description: values.description,
      price: values.price,
      orderTime: new Date(),
    };

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Order Placed Successfully");
        }
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
            <h1 className="mt-5 text-center">Order A Service</h1>
          </center>
        </div>
        <form className="col-md-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="fullName">Name</label>

            <input
              name="fullName"
              placeholder="Your name / company's name"
              defaultValue={loggedInUser.name}
              className={`form-control`}
              ref={register({ required: "Name is required" })}
            />
          </div>
          <ErrorMessage
            className="invalid-feedback"
            name="fullName"
            as="div"
            errors={errors}
          />
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              placeholder="Your email address"
              defaultValue={loggedInUser.email}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              ref={register({
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address format",
                },
              })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="email"
              as="div"
              errors={errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="orderedService">Service Name</label>
            <input
              name="orderedService"
              placeholder="Service Name"
              defaultValue={service.name}
              className={`form-control`}
              ref={register({ required: "Selected Activity is required" })}
            />
            <ErrorMessage
              className="invalid-feedback"
              name="selectedActivity"
              as="div"
              errors={errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              style={{ height: 150 }}
              name="description"
              placeholder="Project Details"
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

          {/*Price & File Upload */}

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  name="price"
                  placeholder="Price"
                  className={`form-control`}
                  ref={register({ required: "Price is required" })}
                />
                <ErrorMessage
                  className="invalid-feedback"
                  name="description"
                  as="div"
                  errors={errors}
                />
              </div>
              {/* <label htmlFor="price">Price</label>

              <input type="text" className="form-control" placeholder="Price" /> */}
            </div>
            <div className="col">
              <label htmlFor="fileUpload">Project File</label>
              <button
                type="button"
                className="btn btn-outline-success btn-block"
              >
                {" "}
                <FontAwesomeIcon icon={faCloudUploadAlt} /> <bn />
                Upload Project File
              </button>
            </div>
          </div>
          <button className="btn btn-brand text-white" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Order;
