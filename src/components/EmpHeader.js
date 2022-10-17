function EmpHeader(props) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ paddingRight: "20px" }}>
        <img
          width="75"
          height="75"
          style={{ borderRadius: "50%" }}
          src={props.emp?.image}
          alt={props.emp?.name}
        />
      </div>
      <div style={{ placeSelf: "center" }}>
        <div>{props.emp?.name}</div>
        <div>{props.emp?.position}</div>
      </div>
    </div>
  );
}
export default EmpHeader;
