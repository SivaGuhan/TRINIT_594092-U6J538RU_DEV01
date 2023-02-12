import React from "react";
import Headphil from "./headphil";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Video=()=> {
    const [RoomCode,setRoomCode]=useState('');
    const navigate=useNavigate();

    const submitCode =(ev)=>{
        ev.preventDefault();
        navigate(`/room/${RoomCode}`)
    }
  return (
    <div>
        <Headphil/>
        <form onSubmit={submitCode} className="m-auto mt-[10rem] p-6 bg-white rounded-lg h-20% w-[20rem] shadow-black shadow-md">
  <div className="mb-4">
    <label className="block text-gray-700 text-xl font-bold ml-[3.5rem]">Enter room code</label>
    <input 
      type='text' 
      value={RoomCode}
      onChange={(e)=>setRoomCode(e.target.value)}
      required 
      placeholder='Enter Code'
      className=" p-1.5 bg-gray-200 ml-[2rem] rounded-lg border mt-[1rem] border-gray-400 focus:outline-none focus:bg-white"
    />
  </div>
  <button 
    type='submit'
    className="bg-indigo-500 ml-[6rem] hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg"
  >
    Go
  </button>
</form>
    </div>
  );
}

export default Video;