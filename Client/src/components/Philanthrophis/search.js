import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Headphil from "./headphil";
import { getAuth } from "firebase/auth";

const Search = () => {
  const [state, setState] = useState("");
  const [NGO, setNGO] = useState([]);
  const [preference, setPreference] = useState([]);
  const auth = getAuth();
  fetch("http://localhost:5000/find", {
    method: "POST",
    crossDomain: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      email: auth.currentUser.email,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      setPreference(myJson);
      console.log(preference);
    });
  fetch("http://localhost:5000/ngo", {
    method: "GET",
    crossDomain: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      setNGO(myJson);
    });
  return (
    <div>
      <Headphil />
      <div className="relative w-[300px] mt-[30px] shadow-2xl m-auto">
        <AiOutlineSearch className="h-[50px] w-[50px] p-[4px] absolute box-border border-[4px] top-[50%] border-black translate-y-[-50%] " />
        <input
          className="h-[50px] box-border pl-[50px] w-[400px] border-[4px] border-black"
          type="text"
          placeholder="Type to Search"
          defaultValue={state}
          onChange={(event) => setState(event.target.value)}
        />
      </div>
      <div className="flex justify-around mt-[3rem]">
        <div className="relative w-full lg:max-w-sm flex">
          <div className="text-lg font-bold">Location:</div>
          <select className="w-20% p-2.5 text-gray-500 ml-3 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Assam</option>
            <option>Bihar</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Telangana</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Tripura</option>
          </select>
        </div>
        <div className="relative w-full lg:max-w-sm flex">
          <div className="text-lg font-bold ">NGO TYPE:</div>
          <select className="w-20% p-2.5 text-gray-500 ml-3 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Health</option>
            <option>Food</option>
            <option>Education</option>
            <option>Clothes</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-5">
        {NGO.map(({ id, username ,role}) => (
          <div className="flex flex-col items-center bg-indigo-400 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {username}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
