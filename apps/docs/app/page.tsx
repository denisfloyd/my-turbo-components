"use client";
import { Header, Button } from "ui";

export default function Page() {
  return (
    <>
      <Header text="Docs" />
      <Button.Base
        onClick={() => {
          console.log("click");
        }}
      >
        {/* <Button.ButtonIcon /> */}
        Click here
      </Button.Base>
    </>
  );
}
