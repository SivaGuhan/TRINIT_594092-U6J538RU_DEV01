import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from './header';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        if (authUser) {
          navigate("/philPropile");
        }
      })
      .catch((error) => alert("Username/Password mismatch"));
  };

  return (
    <div>
    <Header/>
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form className="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Login
          </h1>
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
              onChange={(event) => setEmail(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 mb-3 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            onClick={login}
          >
            Login
          </button>
          <button className="w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans">
            <Link to="/signup">Register</Link>
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
