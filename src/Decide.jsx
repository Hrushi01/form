import React, { useState } from "react";

import Page from "./pages/Page";
import Resume from "./pages/Resume";

function Decide() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const [resumeinfo, setResumeInfo] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    git: "",
    lin: "",

    accept: false,
    address: [
      {
        country: "",
        city: "",
        location: "",
      },
    ],
  });
  return (
    <div className="flex w-full justify-center align-middle text-center">
      {show ? (
        <Resume information={data} setShow={setShow} />
      ) : (
        <Page
          information={resumeinfo}
          setResumeInfo={setResumeInfo}
          show={show}
          setShow={setShow}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
}

export default Decide;
