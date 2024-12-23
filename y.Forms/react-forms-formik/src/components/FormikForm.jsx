import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./FormStyles.css";

const FormikForm = () => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    password: "",
    bio: "",
    country: "",
    gender: "",
    interests: [],
  };

  const interestsArray = ["sports", "music", "travel", "reading"];

  const formValidation = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    bio: Yup.string().required("Bio is required"),
    country: Yup.string().required("Country is required"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array().min(1, "At least one interest is required"),
  });

  const onFormSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: initialForm,
    validationSchema: formValidation,
    onSubmit: onFormSubmit,
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <h3>Form using Formik</h3>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <small className="error">{formik.errors.name}</small>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="error">{formik.errors.email}</small>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <small className="error">{formik.errors.phone}</small>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <small className="error">{formik.errors.password}</small>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bio}
          ></textarea>
          {formik.touched.bio && formik.errors.bio ? (
            <small className="error">{formik.errors.bio}</small>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>
          {formik.touched.country && formik.errors.country ? (
            <small className="error">{formik.errors.country}</small>
          ) : null}
        </div>

        <div className="form-group-gender">
          <span>Gender:</span>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            Female
          </label>
          {formik.touched.gender && formik.errors.gender ? (
            <small className="error">{formik.errors.gender}</small>
          ) : null}
        </div>

        <div className="form-group-interests">
          <span>Interests:</span>
          {interestsArray.map((interest) => (
            <label key={interest}>
              <input
                type="checkbox"
                name="interests"
                value={interest}
                checked={formik.values.interests.includes(interest)}
                onChange={() => {
                  if (formik.values.interests.includes(interest)) {
                    formik.setFieldValue(
                      "interests",
                      formik.values.interests.filter((i) => i !== interest)
                    );
                  } else {
                    formik.setFieldValue("interests", [
                      ...formik.values.interests,
                      interest,
                    ]);
                  }
                }}
              />
              {interest.charAt(0).toUpperCase() + interest.slice(1)}
            </label>
          ))}
          {formik.touched.interests && formik.errors.interests ? (
            <small className="error">{formik.errors.interests}</small>
          ) : null}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormikForm;
