import React from "react";

import SingleCard from "./SingleCard"
import eventCard from "./eventCard";
import diaryCard from "./diaryCard";
import "../../App.css";

export default function Cards() {
  return (
    <div className=" ">
      <div className="color-2 text-center p-5 " id="card-events">
        <h2 className="text-light  "> EVENTS</h2>
        <div className="  d-flex justify-content-center  ">
          {/* Creates 3 event cards */}
          {eventCard.map((card) => {
            return (
              <SingleCard
                img={card.img}
                link={card.linkURL}
                linkName={card.linkName}
              />
            );
          })}
        </div>
      </div>
      <div className="color-2  text-center   p-5 " id="card-diaries">
        <h2 className="text-light  "> DIARIES</h2>
        <div className="  d-flex justify-content-center mt-4 mb-3 ">
          {/* Creates 3 diaries cards */}
          {diaryCard.map((card) => {
            return (
              <SingleCard
                img={card.img}
                link={card.linkURL}
                linkName={card.linkName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
