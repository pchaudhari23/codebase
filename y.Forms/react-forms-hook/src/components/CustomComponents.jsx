import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  Slider,
} from "@mui/material";
import { Controller } from "react-hook-form";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const dropDownOptions = [
  {
    label: "Select a country",
    value: "",
  },
  {
    label: "United States",
    value: "us",
  },
  {
    label: "Canada",
    value: "ca",
  },
  {
    label: "United Kingdom",
    value: "uk",
  },
];

const radioOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

const checkboxOptions = [
  {
    label: "Sports",
    value: "sports",
  },
  {
    label: "Music",
    value: "music",
  },
  {
    label: "Travel",
    value: "travel",
  },
  {
    label: "Reading",
    value: "reading",
  },
];

export const FormInputText = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};

export const FormInputDropdown = ({ name, control, label }) => {
  const generateSingleOptions = () => {
    return dropDownOptions.map((country) => (
      <MenuItem key={country.value} value={country.value}>
        {country.label}
      </MenuItem>
    ));
  };

  return (
    <FormControl size={"small"}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export const FormInputRadio = ({ name, control, label }) => {
  const generateRadioOptions = () => {
    return radioOptions.map((singleOption) => (
      <FormControlLabel
        key={singleOption.value}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState: { error },
          formState,
        }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export const FormInputMultiCheckbox = ({ name, control, setValue, label }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Handle selection manually
  const handleSelect = (value) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };

  // Set form value manually when selectedItems changes
  useEffect(() => {
    setValue(name, selectedItems);
  }, [name, selectedItems, setValue]);

  return (
    <FormControl size={"small"} variant={"outlined"}>
      <FormLabel component="legend">{label}</FormLabel>
      <div>
        {checkboxOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={selectedItems.includes(option.value)}
                    onChange={() => handleSelect(option.value)}
                  />
                )}
              />
            }
            label={option.label}
          />
        ))}
      </div>
    </FormControl>
  );
};

export const FormInputSlider = ({ name, control, setValue, label }) => {
  const [sliderValue, setSliderValue] = React.useState(30);

  useEffect(() => {
    if (sliderValue) setValue(name, sliderValue);
  }, [name, setValue, sliderValue]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <Slider
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            step={1}
          />
        )}
      />
    </>
  );
};

// export const FormInputDate = ({ name, control, label }) => {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field: { onChange, value } }) => (
//           <DatePicker value={value} onChange={onChange} />
//         )}
//       />
//     </LocalizationProvider>
//   );
// };

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
