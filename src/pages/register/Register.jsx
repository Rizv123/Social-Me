import "./register.css";

export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerL">
                <h3 className="registerLogo">Social Me</h3>
                <span className="registerDes">Connect the world around you on Social Me.</span>
            </div>
            <div className="registerR">
                <div className="registerBox">
                    <input placeholder="Username" className="registerInput" />
                    <input placeholder="Email" className="registerInput" />
                    <input placeholder="Password" className="registerInput" />
                    <input placeholder="Password Again" className="registerInput" />
                    <button className="registerbtn">Sign Up</button>
                    <button className="registerRegisterbtn">Log into Account</button>
                </div>
            </div>
        </div>
       
    </div>
  );
}
