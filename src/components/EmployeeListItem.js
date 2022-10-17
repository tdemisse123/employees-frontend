function EmployeeListItem(props) {
  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      <div>
        <img
          width="75"
          height="75"
          style={{ borderRadius: "50%" }}
          src={props?.emp?.image}
          alt={props?.emp?.name}
        />
      </div>
      <div style={{ placeSelf: "center", paddingLeft: "20px" }}>
        <div>
          <div>
            <b>{props?.emp?.name}</b>
          </div>
          <div>{props?.emp?.position}</div>
        </div>
      </div>
    </div>
  );
}
export default EmployeeListItem;
