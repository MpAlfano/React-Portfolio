import React from "react";
import profPicture from "..//images/bio.jpg";

export default function Home() {
  return (
    <div className="mt-5 md:flex justify-center">
      <div className="profDiv md:flex text-center margin: 0 auto">
        <img className="profPic" src={profPicture} alt="biography"></img>

        <h1 classname="about">About Me:</h1>
        <div classname="about">
          <p>
            Hello my name is Mark, I'm an ambitious Full-Stack Developer looking
            for new opportunites to grow and enjoy tackling new challenges.
            Previously I operated my owned landscaping business for over seven
            years before deciding I wanted to pursue coding. I am very goal
            orientated and enjoy the planning process almost as much as working
            on or completing a project. I have always been intrigued by
            programming. With interests in how everything is built and what
            other new apps could be made to improve our way of life. I really
            enjoy creating new things and thinking of new ways to complete tasks
            more efficiently. I look forward to my future and maybe one day I
            will be working with you.
          </p>
        </div>
      </div>
    </div>
  );
}
