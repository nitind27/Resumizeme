"use client";
import { TextField } from "@mui/material";
import { CircleX } from "lucide-react"; // Removed unused imports
import React, { useState, useEffect } from "react";
import { FcOk } from "react-icons/fc";

interface FloatingLabelInputProps {
  value: string;
  label: string;
}

const EmailInput = ({ value, label }: FloatingLabelInputProps) => {
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (value) {
      setIsValidEmail(emailRegex.test(value));
    } else {
      setIsValidEmail(null);
    }
  }, [value]);

  return (
    <div className="relative w-[308px] max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center">
      {" "}
      
      <TextField
        id="outlined-email-input"
        size="small"
        className="w-full"
        label={label}
        defaultValue={value}
        variant="outlined"
      />
      {isValidEmail !== null && (
        <div className="absolute right-2 top-2">
          {isValidEmail ? (
            <FcOk size={20} color="#54c456" />
          ) : (
            <CircleX color="#e90707" strokeWidth={3} />
          )}
        </div>
      )}
    </div>
  );
};

export default EmailInput;
