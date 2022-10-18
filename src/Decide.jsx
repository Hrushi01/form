import React, { useState } from "react";

import Page from "./Page";
import Resume from "./Resume/Resume";

function Decide() {
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
      <Page information={resumeinfo} setResumeInfo={setResumeInfo} />;
    </div>
  );
}

export default Decide;
