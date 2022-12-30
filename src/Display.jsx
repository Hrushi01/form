import React from "react";
import { useState } from "react";
import Home from "./stepper/Home";
import Resume from "./pages/Resume";
import { FaBuffer } from "react-icons/fa";

function Display() {
  const [basicinfo, setBasicInfo] = useState({
    title: "Basic Information",
    name: "",
    designation: "",
    objective: "",
    email: "",
    phone: "",
    image: "",
    file: null,

    git: "",
    lin: "",
  });
  const [workinfo, setWorkInfo] = useState({
    title: "Work Experience",
    skip: "",
    work: [
      {
        position: "",
        company: "",
        certificate: "",
        location: "",
        start: "",
        end: "",
        description: "",
      },
    ],
  });

  const [eduinfo, setEduInfo] = useState({
    title: "Education",
    education: [
      {
        name: "",
        collage: "",
        percentage: "",
        start: "",
        end: "",
      },
    ],
  });

  const [resume, setResume] = useState(false);
  const [picture, setpicture] = useState(false);

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
      <div className="bg-indigo-50 h-screen overflow-scroll overflow-x-hidden">
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
              picture={picture}
              setpicture={setpicture}
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
            picture={picture}
            setpicture={setpicture}
          />
        )}
      </div>
    </div>
  );
}

export default Display;
