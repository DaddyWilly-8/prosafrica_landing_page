import { Button } from "@mui/material";
import React from "react";

const ContactUsButtom = () => {
  return (
    <Button
      sx={{
        borderRadius: 10,
        paddingY: 2,
        paddingX: 4,
        backgroundColor: "lightgray",
        color: "black",
        opacity: 0.8,
      }}
    >
      Contact Us
    </Button>
  );
};

export default ContactUsButtom;
