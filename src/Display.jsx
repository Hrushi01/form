import React from "react";
import { useState } from "react";
import Home from "./Home";
import Resume from "./pages/Resume";

function Display() {
  const [basicinfo, setBasicInfo] = useState({
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
  const [workinfo, setWorkInfo] = useState({
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
    <div className="flex justify-center">
      {resume ? (
        <Resume
          basicinfo={basicinfo}
          eduinfo={eduinfo}
          workinfo={workinfo}
          setResume={setResume}
        />
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
  );
}

export default Display;
