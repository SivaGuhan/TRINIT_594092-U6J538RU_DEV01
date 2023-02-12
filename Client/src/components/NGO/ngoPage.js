import React from "react";
import HeaderNgo from "./headNgo";
export const NGOPage = () => {
  return (
    <div>
      <HeaderNgo/>
      <div className="flex flex-col items-center my-10 mt-[5rem]">
        <div className="text-3xl font-bold mb-5 p-3">Welcome NGO</div>
        <p className="text-2xl text-gray-700 mb-3">
          The world is dedicated to spreading kindness and making the environment a
          better place.
        </p>
        <div className="w-3/4 bg-white rounded-lg shadow-xl mt-[2rem]">
          <div className="font-bold text-xl text-gray-700">Previous Works:</div>
          <p className="text-gray-700 mb-10 text-2xl ">
            Supplied Food to Government Schools<br></br>
            Provided health care facilities
          </p>
          <div className="font-bold text-xl text-gray-700">End Goal:</div>
          <p className="text-gray-700 mb-10 text-2xl">
          Sustainable Development <br></br>
          Improve Government Performance<br></br>
          Social Safety-Valve Role <br></br>
          </p>
          <div className="font-bold text-xl text-gray-700">Future Plan:</div>
          <p className="text-gray-700 mb-10 text-2xl">
          Improve facilities in Government Hospitals<br></br>
          Provided Education to needy Students 
          </p>
        </div>
        </div>
      </div>
  );
};
export default NGOPage;
