import React, { useState } from "react";
import HeaderNgo from "./headNgo";
const Update = () => {

  const [work, setWork] = useState("");
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");
  return (
    <div><HeaderNgo/>
    <div className="flex justify-center">
      <div className="w-[70%] mt-[3%] h-[70%]">
        <div className="text-gray-700 text-4xl font-bold font-['monospace']">
          Add Profile Details
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
            <label className="block text-gray-700 text-xl font-bold mb-2 font-['sans-serif']">
              Previous Works:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              rows="5"
              value={work}
              onChange={(event) => setWork(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xl font-bold mb-2 font-['sans-serif']">
              End Goal:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              rows="5"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xl font-bold mb-2 font-['sans-serif']">
              Future Plans
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              rows="5"
              value={plan}
              onChange={(event) => setPlan(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-['sans-serif']"
              type="button"
            //   onClick={handleClick}
            >
              Post
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Update