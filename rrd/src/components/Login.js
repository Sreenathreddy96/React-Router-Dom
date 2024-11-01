import React, { useRef ,  useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Login() {

    let navigate = useNavigate();
    let emailInputRef = useRef();
    let passwordInputRef = useRef();

    useEffect(()=>{
        emailInputRef.current.value = localStorage.getItem("email");
        passwordInputRef.current.value = localStorage.getItem("password");

        if(localStorage.getItem("eamil")&& localStorage.getItem("password")){
            onLoginClick();
        }
        
    },[]);

    let onLoginClick = ()=>{
        let typedEmail = emailInputRef.current.value;
                    let typedPassword = passwordInputRef.current.value;

                    if (typedEmail == "sachin@gmail.com" && typedPassword == "sachin") {
                        localStorage.setItem("email",emailInputRef.current.value);
                        localStorage.setItem("password", passwordInputRef.current.value);
                        navigate("/dashboard",{state:{msg: "welcome"}}) 
                    } else {
                      alert("Username/password is wrong")  
                    }
        

    }

    

  return (
    <div className="App">
        <form>
            <h2 style={{ backgroundColor: "orange",color: "white", borderRadius: "50px",
                boxShadow: "10px  10px 10px black"
            }}>Login</h2>
            <div>
                <label>Email</label>
                <input ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordInputRef}></input>
            </div>
            <div>
                <button type = "button" onClick={()=>{
                    
                    onLoginClick();
                }}> Login</button>
                
            </div>
        </form>
        <br></br>
        <br></br>
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Login