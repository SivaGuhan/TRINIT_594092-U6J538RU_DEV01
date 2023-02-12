import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export const RoomPage = () => {
    const {roomID}=useParams();
    const meeting=async(element)=>{
        const appID=734890911;
        const serverSecret="c705d68d7fd9930ad3302bb1f8e918e2";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),"Your Name");
        
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
           },
        })
    }
  return (
    <div
      className="myCallContainer"
      ref={meeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  )
}

export default RoomPage