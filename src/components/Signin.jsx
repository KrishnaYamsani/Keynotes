import React, { useState } from "react";

function Signin() {
  const [contact, setContact] = useState({
    userName: "",
    password: "",
    confirmpassword:""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
     <div>
        <h1 className="componetHeading">
        Sign In 
        </h1> 
    <div className="credentials">
       
      <h3>
        Hello {contact.userName} 
      </h3>
    
      <form>
        <input
          onChange={handleChange}
          name="userName"
          value={contact.userName}
          placeholder="User Name"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={contact.password}
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          type="password"
          name="confirmpassword"
          value={contact.confirmpassword}
          placeholder="Confirm password"
        />
        <button>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Signin;
