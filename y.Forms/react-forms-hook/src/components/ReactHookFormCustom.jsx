import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  FormInputText,
  FormInputDropdown,
  FormInputRadio,
  FormInputMultiCheckbox,
} from "./CustomComponents";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  bio: "",
  country: "",
  gender: "",
  interests: [],
};

const ReactHookFormCustom = () => {
  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ display: "flex", alignSelf: "center", justifyContent: "center" }}
      >
        React Hook Form Custom Components
      </Typography>

      <FormInputText name="name" control={control} label="Name" />
      <FormInputText name="email" control={control} label="Email" />
      <FormInputText name="phone" control={control} label="Phone" />
      <FormInputText name="password" control={control} label="Password" />
      <FormInputText name="bio" control={control} label="Bio" />
      <FormInputRadio name="gender" control={control} label="Gender" />
      <FormInputDropdown name="country" control={control} label="Country" />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name="interests"
        label="Interests"
      />
      <Button onClick={handleSubmit(onSubmit)} variant="contained">
        Submit
      </Button>
      <Button onClick={() => reset()} variant="outlined">
        Reset
      </Button>
    </Paper>
  );
};

export default ReactHookFormCustom;

{
  /* <Controller
  control={control}
  name="test"
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => WHATEVER_INPUT_WE_WANT}
/>; */
}
