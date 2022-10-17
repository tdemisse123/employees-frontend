import React, { useContext } from "react";
import { EmployeesContext } from "../App";

export default function SearchInput() {
  const { handleSearchInput } = useContext(EmployeesContext);

  return (
    <input
      type="text"
      onChange={(event) => {
        handleSearchInput(event.target.value);
      }}
      style={{
        width: "96%",
        padding: " 12px 2px 12px 10px ",
        fontSize: "24px",
      }}
    />
  );
}
