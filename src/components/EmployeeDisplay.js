function EmployeeDisplay(props) {
  const { name, email, sms, officePhone, mobilePhone } = props.emp;
  return (
    <div>
      <div className="Box" onClick={() => window.open(`tel:${officePhone}`)}>
        <div>
          <div>Call Office</div>
          <div>{officePhone}</div>
        </div>
        <div style={{ placeSelf: "center" }}>{">"}</div>
      </div>
      <div className="Box" onClick={() => window.open(`tel:${mobilePhone}`)}>
        <div>
          <div>Call Mobile</div>
          <div>{mobilePhone}</div>
        </div>
        <div style={{ placeSelf: "center" }}>{">"}</div>
      </div>
      <div className="Box" onClick={() => window.open(`sms:${officePhone}`)}>
        <div>
          <div>SMS</div>
          <div>{sms}</div>
        </div>
        <div style={{ placeSelf: "center" }}>{">"}</div>
      </div>
      <div className="Box" onClick={() => window.open(`mailto:${email}`)}>
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
