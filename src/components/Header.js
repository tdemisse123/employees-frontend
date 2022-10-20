import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { EmployeesContext } from "../App";

function Header(props) {
  const { employees, handleSelectedEmployee } = useContext(EmployeesContext);
  return (
    <div style={{ display: "flex" }}>
      {props?.withArrow && (
        <div
          onClick={() => {
            handleSelectedEmployee(employees[1]);
          }}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            cursor="pointer"
            size="2x"
            color="#92a8d1"
          />
        </div>
      )}
      <div
        style={{
          display: "flex",
          fontSize: "20px",
          padding: "7px",
          width: "100%",
          placeContent: "center",
        }}
      >
        {props.title}
      </div>
    </div>
  );
}
export default Header;
