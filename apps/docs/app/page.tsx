"use client";
import { Button } from "ui";
import { FiStar } from "react-icons/fi";

export default function Page() {
  return (
    <>
      <Button.Base
        onClick={() => {
          console.log("click");
        }}
      >
        <Button.Icon icon={FiStar} size={14} />
        Click here
      </Button.Base>
    </>
  );
}
