import React from "react";
import { useRef, useState } from "react";
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
  const { basicinfo, workinfo, eduinfo, setResume } = props;
  // console.log(information, "resume");

  const [pic, setpic] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(basicinfo.file);
  reader.onload = () => {
    setpic(reader.result);
  };

  const componentRef = useRef();

  const handelprint = useReactToPrint({
    content: () => componentRef.current,
  });
  const build = () => {
    setResume(false);
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="flex justify-center text-center align-middle w-1/2   ">
        <div
          className="p-10 m-3 w-screen  border-2 rounded-lg bg-white"
          ref={componentRef}>
          {/* Head part */}
          {/* Head part */}
          {/* Head part */}
          {/* Head part */}

          <div className="flex">
            <div
              className="profile w-40 bg-slate-400 h-40 rounded-full overflow-hidden  "
              style={{
                backgroundImage: `url(${pic})`,
              }}></div>
            <div className="p-6 bg-white text-slate-700">
              <div className="text-4xl text-slate-700 font-serif flex justify-start">
                {basicinfo.name}
              </div>

              <div className="m-2">
                <div className="text-2xl  p-1 flex justify-start font-sans font-semibold">
                  {basicinfo.designation}
                </div>

                <div className="flex justify-between">
                  <div className="text-sm flex">
                    <div className="p-1 text-blue-500">
                      <FaAt />
                    </div>
                    {basicinfo.email}
                  </div>
                  <div className="text-sm flex">
                    <div className="p-1 text-blue-500">
                      <FaPhoneAlt />
                    </div>
                    {basicinfo.phone}
                  </div>
                  <div className="text-sm flex">
                    <div className="p-1 text-blue-500">
                      <FaGithub />
                    </div>
                    {basicinfo.git}
                  </div>
                  <div className="text-sm flex">
                    <div className="p-1 text-blue-500">
                      <FaLinkedin />
                    </div>
                    {basicinfo.lin}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* objective part */}
          {/* objective part */}
          {/* objective part */}
          {/* objective part */}
          <div className="pt-2">
            <hr />
            <div className="text-2xl text-slate-700  flex justify-start font-serif border-b-2 border-black">
              {" "}
              Career Objective
            </div>{" "}
            <div className="flex justify-start font-sans">
              {basicinfo.objective}
            </div>
          </div>
          <br />
          <hr />

          {/* Education below  */}
          {/* Education below  */}
          {/* Education below  */}
          {/* Education below  */}

          <div>
            <div className="text-2xl text-slate-700  flex justify-start font-serif border-b-2 border-black">
              Education
            </div>{" "}
            <div className="grid grid-cols-2  font-sans  ">
              {eduinfo.education.map((item) => {
                return (
                  <div className="   p-2  " key={item.name}>
                    <div className="flex justify-start font-semibold">
                      {item.name}
                    </div>
                    <div className="flex justify-start ">{item.collage}</div>
                    <div className=" ">
                      <div className="flex text-sm">
                        {/* <FaCalendarAlt className="p-1" /> */}
                        {item.start} to {item.end}
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

          {/* Work below  */}
          {/* Work below  */}
          {/* Work below  */}
          {/* Work below  */}

          {workinfo.skip === "No" ? (
            <div>
              <div className="text-2xl text-slate-700  flex justify-start font-serif border-b-2 border-black">
                Work Experience
              </div>
              <div className="grid grid-cols-2  font-sans">
                {workinfo.work.map((item) => {
                  return (
                    <div className="p-2" key={item.company}>
                      <div className="flex justify-start font-semibold">
                        {item.position}
                      </div>
                      <div className="flex justify-start ">{item.company}</div>
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
          ) : (
            <></>
          )}

          <div className="flex flex-row justify-around mt-5">
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
    </div>
  );
}

export default Resume;
