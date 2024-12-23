import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <small className="error">{meta.error}</small>
      ) : null}
    </div>
  );
};

const CustomCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");
  return (
    <div className="form-group">
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <small className="error">{meta.error}</small>
      ) : null}
    </div>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <small className="error">{meta.error}</small>
      ) : null}
    </div>
  );
};

const FormikCustom = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        bio: "",
        country: "",
        // gender: "",
        // interests: [],
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be atleast 3 characters")
          .max(15, "Must be 15 characters or less")
          .required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        phone: Yup.string().required("Phone number is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        bio: Yup.string().required("Bio is required"),
        country: Yup.string().required("Country is required"),
        // gender: Yup.string().required("Gender is required"),
        // interests: Yup.array().min(1, "At least one interest is required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {(props) => (
        <div className="form-container">
          <Form>
            <h3>Formik Form Custom Components</h3>
            <CustomTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <CustomTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <CustomTextInput
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Enter your Phone Number"
            />
            <CustomTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your Password"
            />
            <CustomTextInput
              label="Bio"
              name="bio"
              type="text"
              placeholder="Enter your bio"
            />
            <CustomSelect label="Country" name="country">
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </CustomSelect>
            <button type="submit" className="submit-button">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default FormikCustom;
