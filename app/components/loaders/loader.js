import { Spinner } from "@nextui-org/react";
import React from "react";

const Loader = ({ size, color, label }) => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Spinner
        size={size || "lg"}
        label={label || ""}
        color={color || "default"}
        labelColor={color || "default"}
      />
    </div>
  );
};

export default Loader;
