import Input from "../components/Common/Input";
import RegisterpageStyle from "./Register.module.css";

function Register() {
  return (
    <>
      <div className={`${RegisterpageStyle.registerStyle}`}>
        <div className={`${RegisterpageStyle.main} `}>
          <h2>Library MemberShip Registration Form</h2>

          <div>
            <h6>Name</h6>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <Input placeholder="Enter Your First Name" />
                <p>First Name</p>
              </div>
              <div>
                <Input placeholder="Enter Your Last Name" />
                <p>Last Name</p>
              </div>
            </div>
          </div>

          <div>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <h6>Email</h6>
                <Input placeholder="Enter Your Email" />
                <p>example@example.com</p>
              </div>
              <div>
                <h6>Phone Number</h6>
                <Input placeholder="Enter Your First Name" />
                <p>Please enter a valid phone number.</p>
              </div>
            </div>
          </div>

          <div>
            <div className={RegisterpageStyle.inputDiv}>
              <div>
                <h6>UserName</h6>
                <Input placeholder="Please Enter a UserName" />
              </div>
              <div>
                <h6>User Password</h6>
                <Input placeholder="Please Enter a Password" />
              </div>
            </div>
          </div>
          

        <div className="pt-4 pb-2 d-flex align-items-center justify-content-center">
        <input type="checkbox" />
        <p className="m-0">Accept</p>
        </div>
          <button className="px-2 py-1 rounded">Register here</button> 
          <div className="p-4">
            Duration of membership From (date of membership approval) to (date
            of membership renewal). Club memberships are renewed annually.
          </div>

         
        </div>
      </div>
    </>
  );
}

export default Register;
