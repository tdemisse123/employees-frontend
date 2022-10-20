import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import EmployeeListItem from "../components/EmployeeListItem";
import axios from "axios";
import { EmployeesContext } from "../App";
import SearchInput from "../components/SearchInput";

function Home() {
  const [employeesCopy, setEmployeesCopy] = useState([]);
  const { employees, searchInput, handleSelectedEmployee, handleEmployees } =
    useContext(EmployeesContext);

  const getAllEmployees = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/employees/allemployees"
    );
    setEmployeesCopy(response.data);
    handleSelectedEmployee(response.data[1]);
    handleEmployees(response.data);
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  useEffect(() => {
    if (searchInput)
      handleEmployees(
        employeesCopy.filter(
          (x) => x.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
        )
      );
    else handleEmployees(employeesCopy);
  }, [searchInput]);

  return (
    <div style={{ margin: "4px 2px" }}>
      <div
        style={{
          border: "3px solid #92a8d1",
        }}
      >
        <b>
          <Header title="Employee Directory" />
        </b>
      </div>
      <div style={{ border: "3px solid green", margin: "4px 2px" }}>
        <SearchInput />
      </div>
      <div style={{ border: "3px solid #BE29EC" }}>
        {employees?.map((emp) => (
          <div
            onClick={() => {
              handleSelectedEmployee(emp);
            }}
          >
            <div
              style={{
                border: "3px solid red",
                display: "flex",
                margin: "4px 2px",
              }}
            >
              <EmployeeListItem emp={emp} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
