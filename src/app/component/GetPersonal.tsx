import React from "react";
import FloatingLabelInput from "./Input";
import SubmitButton from "./SubmitButton";
import img from "../../../public/image.png";
import Image from "next/image";
import FloatingLabelTextarea from "./Textarea";
import EmailInput from "./EmailInput";

const GetPersonal = () => {
  return (
    <div className="w-[800px] h-[484px]">
      <div className="font-bold text-[24px] mt-8">Personal Information</div>
      <div className="flex flex-col sm:flex-row items-start gap-1 mt-5 w-[640px]">
        <div className="flex-grow flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-[24px] w-[640px]">
            <FloatingLabelInput value="Petter" label="First Name" />
            <FloatingLabelInput value="Cetera" label="Last Name" />
          </div>

          <div className="flex flex-col sm:flex-row gap-[24px] w-[640px]">
            <FloatingLabelInput value="London" label="City" />
            <FloatingLabelInput value="E2 4XF" label="Postal Code" />
          </div>

          <div className="w-[360px] gap-4">
            <FloatingLabelTextarea value="123 Example" label="Address" />
          </div>

          <div className="flex flex-col sm:flex-row gap-[24px]">
            <EmailInput label="Email" value="petter@gmail.com" />
            <FloatingLabelInput label="Phone" value="+442223334444" />
          </div>

          <div className="w-[316px]">
            <FloatingLabelInput value="Password" label="Password" />
          </div>
        </div>

        <div className="flex justify-center sm:justify-start mb-5 gap-5 mr-[-150px] sm:mb-0">
          <Image
            src={img}
            alt="Profile"
            height={144}
            width={144}
            className="rounded-full aspect-square object-cover"
          />
        </div>
      </div>

      <div className="text-[15px] mt-5">
        Use this email to log in to your{" "}
        <span className="text-[#1688FE]">resumedone.io</span> account and
        receive notifications.
      </div>

      <div className="mt-5">
        <SubmitButton />
      </div>
    </div>
  );
};

export default GetPersonal;
