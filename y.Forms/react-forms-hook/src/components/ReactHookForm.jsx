import React from "react";
import { useForm } from "react-hook-form";
import "./FormStyles.css";

const ReactHookForm = () => {
  const interestsArray = ["sports", "music", "travel", "reading"];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  const onErrors = (errors) => {
    console.error(errors);
  };

  const watchInterests = watch("interests");

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
        <h3>Form using React Hook Form</h3>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <small className="error">{errors.name.message}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <small className="error">{errors.email.message}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?[0-9\s-]*$/,
                message: "Invalid phone number format",
              },
            })}
          />
          {errors.phone && (
            <small className="error">{errors.phone.message}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <small className="error">{errors.password.message}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            {...register("bio", { required: "Bio is required" })}
            rows="4"
          ></textarea>
          {errors.bio && <small className="error">{errors.bio.message}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            {...register("country", { required: "Country is required" })}
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>
          {errors.country && (
            <small className="error">{errors.country.message}</small>
          )}
        </div>

        <div className="form-group-gender">
          <span>Gender:</span>
          <label>
            <input
              type="radio"
              {...register("gender", { required: "Gender is required" })}
              value="male"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              {...register("gender", { required: "Gender is required" })}
              value="female"
            />
            Female
          </label>
          {errors.gender && (
            <small className="error">{errors.gender.message}</small>
          )}
        </div>

        <div className="form-group-interests">
          <span>Interests:</span>
          {interestsArray.map((interest) => (
            <label key={interest}>
              <input
                type="checkbox"
                {...register("interests")}
                value={interest}
              />
              {interest.charAt(0).toUpperCase() + interest.slice(1)}
            </label>
          ))}
          {watchInterests?.length === 0 && (
            <small className="error">At least one interest is required</small>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
