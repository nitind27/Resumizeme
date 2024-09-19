import { TextField } from "@mui/material";
import React from "react";

interface FloatingLabelInputProps {
  value: string;
  label: string;
}

const FloatingLabelInput = ({ value, label }: FloatingLabelInputProps) => {
  return (
    <div className="relative w-[308px] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
      <TextField
        id="outlined-read-only-input"
        size="small"
        className="w-full"
        label={label}
        defaultValue={value}
        variant="outlined"
        InputProps={{
          readOnly: false,
        }}
      />
    </div>
  );
};

export default FloatingLabelInput;
