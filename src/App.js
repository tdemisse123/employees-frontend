import "./App.css";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import styled from "styled-components";
import { createContext, useState } from "react";

export const EmployeesContext = createContext("Employees");

const AppWrapper = styled.div`
  display: flex;
  border: 5px solid black;
  padding: 1rem;
  gap: 1rem;
  margin: 60px 160px;
`;

const StyledOne = styled.div`
  width: 50%;
  border: 3px solid yellow;
  text-align: justify;
  align-items: center;
  justify-content: start;
`;

const StyledTwo = styled.div`
  width: 50%;
  border: 3px solid brown;
  text-align: justify;
  align-items: center;
  /* padding: 0 20px; */
`;

function App() {
  const [employees, setEmployees] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState({});

  function handleEmployees(emp) {
    setEmployees(emp);
  }
  function handleSearchInput(input) {
    setSearchInput(input);
  }
  function handleSelectedEmployee(emp) {
    setSelectedEmployee(emp);
  }
  return (
    <EmployeesContext.Provider
      value={{
        employees,
        handleEmployees,
        searchInput,
        handleSearchInput,
        selectedEmployee,
        handleSelectedEmployee,
      }}
    >
      <AppWrapper>
        <StyledOne>
          <Home />
        </StyledOne>
        <StyledTwo>
          <Employee />
        </StyledTwo>
      </AppWrapper>
    </EmployeesContext.Provider>
  );
}

export default App;
