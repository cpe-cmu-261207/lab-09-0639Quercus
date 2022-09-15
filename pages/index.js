import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home() {
  const contentBar = {
    backgroundColor: "#f8f8ff",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  };

  return (
    <div>
      <Navbar key="index" link="index" />

      <div className="m-5 mt-0 py-4" style={contentBar}>
        <div className="m-4 mt-5 d-flex justify-content-center overflow-hidden">
          {/* Introduction */}
          <img
            src="./pfpalt.jpg"
            width="250px"
            height="250px"
            style={{ objectFit: "cover" }}
            className="rounded-circle mx-4 my-auto"
          />
          <div
            style={{ height: "250px", maxWidth: "500px" }}
            className="mx-4 mb-3 p-2"
          >
            <h1>Thanapat Somsit</h1>
            <hr />
            <p>
              Hi! My name is Thanapat Somsit. Everybody calls me Oak. I am an
              undergraduate at Chiang Mai University studying in Computer
              Engineering. I am interested in Networking, Web development, and
              Computer architecture. I do both relax and work.
            </p>
          </div>
        </div>

        <div className="mx-4 my-4 vstack d-flex justify-content-center">
          <div className="m-3 mt-5">
            <h1 style={{ textAlign: "center" }}>SKILLS AND HOBBIES</h1>
            <hr />
          </div>

          {/*cards*/}
          <Card
            isLeftCard={true}
            imgSrc="./c++.png"
            title="C and C++ Programming"
            content="The first coding language I have ever studied. It is the language which I am most comfortable with and I have lots of experience with it."
          />

          <Card
            isLeftCard={false}
            imgSrc="./python.png"
            title="Python Programming"
            content="Python is another coding language I am comfortable with. I also have background in basic libraries, such as, Numpy, Scipy, Matplotlib, and Pandas"
          />

          <Card
            isLeftCard={true}
            imgSrc="./Rainmeter.png"
            title="Rainmeter Skins Design"
            content="With Rainmeter, I design skins to be customized and displayed on desktop, anything from hardware usage meters to fully functional audio visualizers."
          />

          <Card
            isLeftCard={false}
            imgSrc="./pianist.jpg"
            title="Piano Performance"
            content="So I can manage to know how to press buttons. What a shocker... I also obtained qualifications for my piano skill from Trinity College of Music"
          />
        </div>
      </div>
    </div>
  );
}
