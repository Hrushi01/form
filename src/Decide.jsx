import React, { useState } from "react";

import Resume from "./pages/Resume";
import Part1 from "./parts/Part1";
import Part2 from "./parts/Part2";
import Part3 from "./parts/Part3";
import Progress from "./stepper/Progress";

function Decide() {
  const [show, setShow] = useState(false);
  const [part1, setPart1] = useState(false);
  const [part2, setPart2] = useState(false);
  const [part3, setPart3] = useState(false);
  const [data1, setData] = useState({});
  const [infop1, setInfoP1] = useState({
    title: "Basic Information",
    name: "Hrushikesh",
    designation: "",
    objective: "dummy",
    email: "",
    phone: "1234567897",
    image: "",

    git: "dummy",
    lin: "dummy",
  });
  const [infop2, setInfoP2] = useState({
    title: "Work Experience",
    work: [
      {
        position: "dummy",
        company: "dummy",
        certificate: "https://github.com/",
        location: "dummy",
        start: "12-02-2022",
        end: "12-03-2022",
        description: "dummy",
      },
    ],
  });

  const [infop3, setInfoP3] = useState({
    title: "Education",
    education: [
      {
        name: "dummy",
        collage: "dummy",
        percentage: "75",
        start: "12-02-2022",
        end: "12-03-2022",
      },
    ],
  });

  return (
    <>
      <div className=" flex  justify-center text-center">
        <Progress
          setPart1={setPart1}
          setPart2={setPart2}
          setPart3={setPart3}
          setInfoP1={setInfoP1}
          info1={infop1}
          info2={infop2}
          info3={infop3}
          setShow={setShow}
        />{" "}
        {show ? (
          <Resume
            info1={infop1}
            info2={infop2}
            info3={infop3}
            setShow={setShow}
            setPart1={setPart1}
          />
        ) : (
          <div className="border-2 w-1/2 justify-center align-middle text-center flex flex-col p-2 m-6">
            {part1 ? (
              <div className=" p-6">
                <Part1
                  setInfoP1={setInfoP1}
                  setData={setData}
                  information={infop1}
                  setPart1={setPart1}
                  setPart2={setPart2}
                  setPart3={setPart3}
                />
              </div>
            ) : (
              <></>
            )}

            {part2 ? (
              <div className=" p-6">
                {" "}
                <Part2
                  setInfoP2={setInfoP2}
                  information={infop2}
                  setPart2={setPart2}
                  setPart3={setPart3}
                />
              </div>
            ) : (
              <></>
            )}

            {part3 ? (
              <div className=" p-6">
                <Part3
                  setInfoP3={setInfoP3}
                  information={infop3}
                  setPart1={setPart1}
                  setPart3={setPart3}
                  setShow={setShow}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Decide;
