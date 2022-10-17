import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import { EmployeesContext } from "../App";
import EmployeeDisplay from "../components/EmployeeDisplay";
import EmpHeader from "../components/EmpHeader";

function Employee() {
  const { selectedEmployee } = useContext(EmployeesContext);

  return (
    <div>
      <div style={{ border: "3px solid #92a8d1", textAlign: "center" }}>
        <b>
          <Header title="Employee" withArrow />
        </b>
      </div>
      {selectedEmployee && <EmpHeader emp={selectedEmployee} />}
      {selectedEmployee && <EmployeeDisplay emp={selectedEmployee} />}
    </div>
  );
}

export default Employee;
