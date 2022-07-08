import "./setup.css";

export default function Setup() {
  return (
    <div className="setup">
        <div className="setupWrapper">
            <div className="setupL">
                <h3 className="setupLogo">Social Me</h3>
                <span className="setupDes">Connect the world around you on Social Me.</span>
            </div>
            <div className="setupR">
                <div className="setupBox">
                    <input placeholder="Email" className="setupInput" />
                    <input placeholder="Password" className="setupInput" />
                    <button className="setupbtn">Log In</button>
                    <span className="setupForgot">Forgot Password?</span>
                    <button className="setupRegisterbtn">Create Account</button>
                </div>
            </div>
        </div>
       
    </div>
  );
}
