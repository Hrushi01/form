import React from "react";
import { useState, useRef, useMemo, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import {
  FaAt,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaPaperclip,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDotCircle,
} from "react-icons/fa";

function Resume(props) {
  const { setShow, info1, info2, info3, setPart1 } = props;
  // console.log(information, "resume");

  const componentRef = useRef();

  const handelprint = useReactToPrint({
    content: () => componentRef.current,
  });
  const build = () => {
    setShow(false);
    setPart1(true);
  };

  return (
    <div>
      <div className="p-10 m-3  border-2 rounded-lg " ref={componentRef}>
        {/* Head part */}
        {/* Head part */}
        {/* Head part */}
        {/* Head part */}

        <div className="flex">
          <div className="w-40 bg-slate-400 h-40 rounded-full">PIC</div>
          <div className="p-6 bg-white">
            <div className="text-5xl font-serif">{info1.name}</div>
            <div className="m-2">
              <div className="text-2xl text-orange-800 p-1 flex justify-start font-mono font-bold">
                {" "}
                {info1.designation}
              </div>
              <div className="flex justify-between">
                <div className="text-sm flex">
                  <div className="p-1 text-blue-500">
                    <FaAt />
                  </div>
                  {info1.email}
                </div>
                <div className="text-sm flex">
                  <div className="p-1 text-blue-500">
                    <FaPhoneAlt />
                  </div>
                  {info1.phone}
                </div>
                <div className="text-sm flex">
                  <div className="p-1 text-blue-500">
                    <FaGithub />
                  </div>
                  {info1.git}
                </div>
                <div className="text-sm flex">
                  <div className="p-1 text-blue-500">
                    <FaLinkedin />
                  </div>
                  {info1.lin}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* objective part */}
        {/* objective part */}
        {/* objective part */}
        {/* objective part */}
        <div>
          <div className="text-2xl text-orange-800  flex justify-start font-mono font-bold">
            {" "}
            Objective
          </div>{" "}
          <div className="flex justify-start font-sans">{info1.objective}</div>
        </div>
        <br />
        <hr />
        <br />

        {/* Education below  */}
        {/* Education below  */}
        {/* Education below  */}
        {/* Education below  */}

        <div>
          <div className="text-2xl text-orange-800  flex justify-start font-mono font-bold">
            Education
          </div>{" "}
          <div className="flex  font-sans">
            {info3.education.map((item) => {
              return (
                <div className="m-2   w-44">
                  <div className="flex justify-start font-semibold">
                    {item.name}
                  </div>
                  <div className="flex justify-start text-blue-500">
                    {item.collage}
                  </div>
                  <div className="flex justify-between ">
                    <div className="flex text-sm">
                      {/* <FaCalendarAlt className="p-1" /> */}
                      {item.start}-{item.end}
                    </div>
                    <div className="flex text-sm">
                      Score - {item.percentage}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <br />
        <hr />
        <br />

        {/* Work below  */}
        {/* Work below  */}
        {/* Work below  */}
        {/* Work below  */}

        <div>
          <div className="text-2xl text-orange-800  flex justify-start font-mono font-bold">
            Work Experience
          </div>
          <div className="flex  font-sans">
            {info2.work.map((item) => {
              return (
                <div className="m-2   w-44">
                  <div className="flex justify-start font-semibold">
                    {item.position}
                  </div>
                  <div className="flex justify-start text-blue-500">
                    {item.company}
                  </div>
                  <div className="flex justify-start text-blue-500">
                    <FaPaperclip className="p-1 text-xl" />
                    <a href={item.certificate}>{item.certificate}</a>
                  </div>

                  <div className="flex justify-between ">
                    <div className="flex text-sm">
                      <FaCalendarAlt className="p-1 text-xl" />
                      {item.start}-{item.end}
                    </div>
                    {/* <div className="flex text-sm">Score - {item.percentage}%</div/> */}
                  </div>
                  <div className="flex justify-between ">
                    <div className="flex text-sm">
                      <FaMapMarkerAlt className="p-1 text-xl" />
                      {item.location}
                    </div>
                    {/* <div className="flex text-sm">Score - {item.percentage}%</div/> */}
                  </div>
                  <div>
                    <div className="flex text-sm justify-start">
                      <FaDotCircle className="p-1.5 text-xl" />
                      <div>{item.description}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row justify-around">
          <button
            className=" bg-blue-600 text-white rounded p-2 bottom-4 "
            onClick={handelprint}>
            Download
          </button>
          <button
            className=" bg-blue-600 text-white rounded p-2 bottom-4 "
            onClick={() => build()}>
            Build New
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
