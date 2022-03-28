import React from "react";
import profPicture from "..//images/bio.jpg";

export default function Home() {
  return (
    <div className="profContainer container mt-5 md:flex bg-blue-400 margin: auto flex-direction: column justify-center">
      <div className="profDiv md:flex text-center margin: 0 auto">
        <img className="profPic" src={profPicture} alt="biography"></img>

        <h1>About Me:</h1>

        <p>
          Hello my name is Mark, I previously ran my own landscaping business
          for over seven years before deciding I wanted to pursue coding. I am
          very goal orientated and enjoy the planning process almost as much as
          doing or completing a project. I have always been intrigued by
          programming and the works going on behind the scene on webpages and
          mobile apps. Now that I have begun my journey on this path I am
          creating many works of my own. I really enjoy creating new things and
          thinking of new ways to complete tasks more efficiently. I look
          forward to my future and maybe one day I will be working with you!
        </p>
      </div>

      {/* <div className="flex">
        <div className="bg-red-500 h-4 w-6"></div>
        <div className="bg-blue-500 h-6 w-10"></div>
        <div className="bg-green-500 h-8 w-12"></div>
      </div> */}
    </div>
  );
}
