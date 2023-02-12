import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Header from './header';
//import axios from "axios";

const SignUp = () => {

  const [username,setUserName]=useState("");
  const [role,setRole]=useState("");
  const [preference,setPreference]=useState("")
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  const [cpassword,setCpassword]=useState("")
  const [loc,setLoc]=useState("");
  const auth=getAuth();
  const navigate = useNavigate();

  const register=(e)=>{
    e.preventDefault()
    if(password===cpassword){
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser,{
          username,role,preference,loc,email
        })
        .then(()=>{fetch("http://localhost:5000/add", {
        method: "POST",
        crossDomain: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username,role,preference,loc,email
        }),
      })
        .then((res) => console.log(username))
        .then((response) => console.log(JSON.stringify(response)))
        .catch((error) => console.log(error));})
        .then(navigate("/signin"))
        .catch((error)=>alert(error.message))
      })
      .catch((error) => alert(error.message));
    }
  }
  return (
    <div><Header/>
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Formregister
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="username"
              defaultValue={username}
              onChange={(event)=> setUserName(event.target.value)}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="user"
            >
              Who are You??
            </label>

            <select
              name="user"
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              defaultValue={'Sel'}
              onChange={(event)=> setRole(event.target.value)}
            >
              <option defaultValue="Sel" hidden>Select</option>
              <option defaultValue="NGO">NGO</option>
              <option defaultValue="Philanthrophist">Philanthropist</option>
            </select>
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="work"
            >
              Work Preference
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="work"
              id="work"
              placeholder="work preference"
              defaultValue={preference}
              onChange={(event)=> setPreference(event.target.value)}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="location"
            >
              Location Preference
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="location"
              id="location"
              placeholder="location preference"
              defaultValue={loc}
              onChange={(event)=> setLoc(event.target.value)}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              defaultValue={email}
              onChange={(event)=> setEmail(event.target.value)}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="password"
              id="password"
              placeholder="password"
              defaultValue={password}
              onChange={(event)=> setPassword(event.target.value)}
            />
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="confirm"
            >
              Confirm password
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="confirm"
              id="confirm"
              placeholder="confirm password"
              defaultValue={cpassword}
              onChange={(event)=> setCpassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            onClick={register}
          >
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
