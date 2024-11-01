import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let stateSelectRef = useRef();
  let resultParaRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let selectedGender;
  let selectedMS;
  let [selectedImage,setSelectedImage] = useState("./images/NO_Image_Available.png");
  let languagesKnown = {
    eng: false,
    hindi: false,
    telugu: false,
  };
  let onCreateAccount = () => {
    if (stateSelectRef.current.value == "Select State") {
      alert("Please select your state");
    } else {
      let saluation = "";
      if (selectedGender == "male") {
        saluation = "Mr.";
      }
      if (selectedGender == "female") {
        if (selectedMS == "single") {
          saluation = "Miss.";
        } else {
          saluation = "Mrs.";
        }
      }
      console.log(languagesKnown);

      resultParaRef.current.innerHTML = `${saluation} ${firstNameInputRef.current.value} 
    ${lastNameInputRef.current.value} from ${stateSelectRef.current.value},you know 
    ${languagesKnown.eng == true ? "English" : ""} 
     ${languagesKnown.hindi == true ? "Hindi" : ""} 
      ${languagesKnown.telugu == true ? "Telugu" : ""} 
    your account has been created`;
    }
  };

  return (
    <div className="App">
      <form>
        <h2>Signup</h2>
        <div>
          <label>First Name</label>
          <input ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef}></input>
        </div>
        <label>Languages Known</label>

        <label className="internalLabel">English</label>
        <input
          type="checkbox"
          onChange={(eo) => {
            languagesKnown.eng = eo.target.checked;
          }}
        ></input>
        <label className="internalLabel">Hindi</label>
        <input
          type="checkbox"
          onChange={(eo) => {
            languagesKnown.hindi = eo.target.checked;
          }}
        ></input>
        <label className="internalLabel">Telugu</label>
        <input
          type="checkbox"
          onChange={(eo) => {
            languagesKnown.telugu = eo.target.checked;
          }}
        ></input>

        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            ref={maleRBRef}
            onChange={() => {
              if (maleRBRef.current.checked == true) {
                selectedGender = "male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            type="radio"
            name="gender"
            ref={femaleRBRef}
            onChange={() => {
              if (femaleRBRef.current.checked == true) {
                selectedGender = "female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label>Marital Status</label>
          <input
            type="radio"
            name="ms"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            type="radio"
            name="ms"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>
        <div>
          <label>Age</label>
          <input></input>
        </div>
        <label>State</label>
        <select ref={stateSelectRef} onChange={()=>{

            let selectedState = stateSelectRef.current.value;

            if(selectedState == "Jammu and Kashmir"){
                console.log("Srinagar");

            }else if(selectedState == "Ladakh"){
                console.log("Leh");
            }else if(selectedState == "Uttarakhand"){
                console.log("Dehradun");
            }else if(selectedState == "Assam"){
                console.log("Dispur");
            }else if(selectedState == "Meghalaya"){
                console.log("Shimla");
            }else if(selectedState == "Goa"){
                console.log("Panaji");
            }else if(selectedState == "Gujarat"){
                console.log("Gandhi Nagar");
            }else if(selectedState == "Maharashtra"){
                console.log("Mumbai");
            }else if(selectedState == "AP"){
                console.log("Amaravati");
            }else if(selectedState == "Telangana"){
                console.log("Hyderabad");
            }else if(selectedState == "Karnataka"){
                console.log("Bengaluru");
            }else {
                console.log("Select proper value");
            }
            
        }}>
          <option>Select State</option>
          <option>Jammu and Kashmir</option>
          <option>Ladakh</option>
          <option>Uttarakhand</option>
          <option>Assam</option>
          <option>Meghalaya</option>
          <option>Goa</option>
          <option>Gujarat</option>
          <option>Maharashtra</option>
          <option value="AP">Andhra Pradesh</option>
          <option>Telangana</option>
          <option>Karnataka</option>
        </select>
        <div>
          <label>Email</label>
          <input></input>
        </div>
        <div>
          <label>Password</label>
          <input></input>
        </div>
        <div>
          <label>Mobile number</label>
          <input></input>
        </div>
        <label>Profile Pic</label>
        <input type="file" onChange={(eo)=>{
           console.log(eo.target.files);
           let selectedImageStr = URL.createObjectURL(eo.target.files[0]);
           console.log(selectedImageStr);
           setSelectedImage(selectedImageStr);

        }}></input>
        <div>
          <div>
            <img className= "proilePicPreview" src={selectedImage}></img>
          </div>
          <button
            type="button"
            onClick={() => {
              onCreateAccount();
            }}
          >
            Sign Up
          </button>
        </div>
        <p ref={resultParaRef}></p>
      </form>
      <br></br>
      <br></br>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Signup;
