import React from "react";
import { useState } from "react";
import Home from "./Home";
import Resume from "./pages/Resume";
import { FaBuffer } from "react-icons/fa";

function Display() {
  const [basicinfo, setBasicInfo] = useState({
    title: "Basic Information",
    name: "Hrushikesh Ambike",
    designation: "Frontend dev",
    objective: "dummy",
    email: "x@x.x",
    phone: "1234567897",
    image: "",
    file: null,

    git: "https://github.com/",
    lin: "https://github.com/",
  });
  const [workinfo, setWorkInfo] = useState({
    title: "Work Experience",
    skip: "",
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

  const [eduinfo, setEduInfo] = useState({
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

  const [resume, setResume] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <div className="p-3 flex text-blue-600">
          <FaBuffer className="text-4xl" />
          <div className=" text-2xl">Resume Builder</div>
        </div>
        <div className="p-3 text-xl flex italic text-blue-500 pr-10">
          Create and Download your Resume for free Now!!
        </div>
      </div>
      <div className="bg-indigo-50">
        {resume ? (
          <div>
            <div className="flex justify-center font-serif align-middle text-2xl">
              Your Resume has been Generated
            </div>
            <Resume
              basicinfo={basicinfo}
              eduinfo={eduinfo}
              workinfo={workinfo}
              setResume={setResume}
            />
          </div>
        ) : (
          <Home
            basicinfo={basicinfo}
            workinfo={workinfo}
            eduinfo={eduinfo}
            setWorkInfo={setWorkInfo}
            setBasicInfo={setBasicInfo}
            setEduInfo={setEduInfo}
            setResume={setResume}
          />
        )}
      </div>
    </div>
  );
}

export default Display;
