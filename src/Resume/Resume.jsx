import React from "react";
import { useState, useRef, useMemo, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

function Resume(props) {
  const { information, setShow } = props;
  console.log(information, "resume");

  const componentRef = useRef();

  const handelprint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="p-5 m-3 w-2/5  h-screen  bg-white " ref={componentRef}>
      <div className="flex justify-center font-bold text-center text-blue-600 text-3xl">
        Resume
      </div>
      <div className="body">
        <div className="name flex justify-end p-1 font-semibold text-black  ">
          Name: &nbsp;<div className="text-gray-500">{information?.name}</div>
        </div>

        <div className="email flex p-0 justify-end font-semibold text-black ">
          Email: &nbsp;{" "}
          <div className="text-gray-500">{information?.email}</div>
        </div>
        <div className="contact flex p-1 justify-end font-semibold text-black">
          Contact: &nbsp;{" "}
          <div className="text-gray-500">{information?.phone}</div>
        </div>
        <div className="contact flex font-semibold p-2 justify-start text-black">
          Github: &nbsp; <div className="text-gray-500">{information?.git}</div>
        </div>
        <div className="contact flex p-2 font-semibold  text-black">
          Linkedin: &nbsp;{" "}
          <div className="text-gray-500">{information?.lin}</div>
        </div>

        <div className="gender text-black p-2 font-semibold   flex">
          Gender: &nbsp;{" "}
          <div className="text-gray-500">{information?.gender}</div>
        </div>

        <div className="Address p-2 flex justify-start font-semibold  text-black ">
          Address:
          {information.address.map((item) => {
            return (
              <div className=" p-2 border-2 m-2 rounded-xl  ">
                <div className="flex p-2 font-semibold ">
                  Country: &nbsp;
                  <div className="text-gray-500">{item.country}</div>
                </div>
                <div className="flex p-2 font-semibold">
                  City: &nbsp;
                  <div className="text-gray-500 ">{item.city}</div>{" "}
                </div>{" "}
                <div className="flex p-2 font-semibold">
                  Location: &nbsp;
                  <div className="text-gray-500 ">{item.location}</div>
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
          onClick={() => setShow(false)}>
          Build New
        </button>
      </div>
    </div>
  );
}

export default Resume;
