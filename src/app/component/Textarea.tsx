import { TextField } from "@mui/material";
import React from "react";

const FloatingLabelTextarea = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
      <TextField
        id="outlined-textarea"
        size="small"
        className="w-full md:w-[640px]" // Full width on small screens, 640px on medium and larger
        label={label}
        defaultValue={value}
        multiline
        variant="outlined"
      />
    </div>
  );
};

export default FloatingLabelTextarea;
