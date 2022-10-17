function EmployeeDisplay(props) {
  console.log("dis", props.emp);
  const { name, email, sms, officePhone, mobilePhone } = props.emp;
  return (
    <div>
      <div className="Box" onClick={() => window.open()}>
        <div>
          <div>Call Office</div>
          <div>{officePhone}</div>
        </div>
        <div style={{ placeSelf: "center" }}>{">"}</div>
      </div>
      <div className="Box">
        <div>
          <div>Call Mobile</div>
          <div>{mobilePhone}</div>
        </div>
        <div style={{ placeSelf: "center" }}>{">"}</div>
      </div>
      <div className="Box">
        <div>
          <div>SMS</div>
          <div>{sms}</div>
        </div>
        <div style={{ placeSelf: "center" }}>{">"}</div>
      </div>
      <div className="Box">
        <div>
          <div>Email</div>
          <div>{email}</div>
        </div>
        <div style={{ placeSelf: "center" }}>{">"}</div>
      </div>
    </div>
  );
}
export default EmployeeDisplay;
