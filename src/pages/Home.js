import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import EmployeeListItem from "../components/EmployeeListItem";
import axios from "axios";
import { EmployeesContext } from "../App";
import SearchInput from "../components/SearchInput";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [employeesCopy, setEmployeesCopy] = useState([]);
  const { searchInput, handleSelectedEmployee } = useContext(EmployeesContext);

  const getAllEmployees = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/employees/allemployees"
    );
    setEmployees(response.data);
    setEmployeesCopy(response.data);
    handleSelectedEmployee(response.data[1]);
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  useEffect(() => {
    if (searchInput)
      setEmployees(
        employeesCopy.filter(
          (x) => x.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
        )
      );
    else setEmployees(employeesCopy);
  }, [searchInput]);

  return (
    <div>
      <div
        style={{
          border: "3px solid #92a8d1",
          textAlign: "center",
        }}
      >
        <b>
          <Header title="Employee Directory" />
        </b>
      </div>
      <div style={{ border: "3px solid green" }}>
        <SearchInput />
      </div>
      <div style={{ border: "3px solid #BE29EC" }}>
        {employees?.map((emp) => (
          <div
            onClick={() => {
              handleSelectedEmployee(emp);
            }}
          >
            <div style={{ border: "2px solid red", display: "flex" }}>
              <EmployeeListItem emp={emp} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
