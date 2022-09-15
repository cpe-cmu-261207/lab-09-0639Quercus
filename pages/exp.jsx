import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function exp() {
  const contentBar = {
    backgroundColor: "#f8f8ff",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  };

  return (
    <div>
      <Navbar key="exp" link="exp" />

      <div class="m-5 mt-0 py-4" style={contentBar}>
        <div
          style={{ alignContent: "center" }}
          class="mx-4 my-4 vstack d-flex justify-content-center"
        >
          <div class="m-3">
            <h1 style={{ textAlign: "center" }}>EXPERIENCES</h1>
            <hr />
          </div>

          {/* cards */}
          <Card
            isLeftCard={true}
            imgSrc="./council.jpg"
            title="Student Council"
            content="During highschool, I was a member of Chiang Mai University Demonstration School Council. Our job was to cooperate and arrange all activities for other students."
          />

          <Card
            isLeftCard={false}
            imgSrc="./Norton.png"
            title="Basic Programming Project"
            content="This is a time management assistant program made with C++ that I was the project manager of."
          />

          <Card
            isLeftCard={true}
            imgSrc="./A Long Night.jpg"
            title="A Long Night"
            content="A platformer game made from Scratch as a group project to lay down the foundation of basic programming skills for the students. You should try it out!"
          />
        </div>
      </div>
    </div>
  );
}
