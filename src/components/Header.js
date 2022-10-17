import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        {props.withArrow && (
          <FontAwesomeIcon
            icon={faAngleLeft}
            cursor="pointer"
            size="2x"
            color="#92a8d1"
          />
        )}
      </div>

      <div style={{ fontSize: "20px", padding: "7px" }}>{props.title}</div>
    </div>
  );
}
export default Header;
