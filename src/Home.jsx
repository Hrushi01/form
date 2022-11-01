// import React, { useState } from "react";

// import Resume from "./pages/Resume";
// import Part1 from "./parts/Part1";
// import Part2 from "./parts/Part2";
// import Part3 from "./parts/Part3";
// import Progress from "./stepper/Progress";

// function Decide() {
//   const [show, setShow] = useState(false);
//   const [part1, setPart1] = useState(false);
//   const [part2, setPart2] = useState(false);
//   const [part3, setPart3] = useState(false);
//   const [data1, setData] = useState({});
//   const [infop1, setInfoP1] = useState({
//     title: "Basic Information",
//     name: "Hrushikesh",
//     designation: "",
//     objective: "dummy",
//     email: "",
//     phone: "1234567897",
//     image: "",

//     git: "dummy",
//     lin: "dummy",
//   });
//   const [infop2, setInfoP2] = useState({
//     title: "Work Experience",
//     work: [
//       {
//         position: "dummy",
//         company: "dummy",
//         certificate: "https://github.com/",
//         location: "dummy",
//         start: "12-02-2022",
//         end: "12-03-2022",
//         description: "dummy",
//       },
//     ],
//   });

//   const [infop3, setInfoP3] = useState({
//     title: "Education",
//     education: [
//       {
//         name: "dummy",
//         collage: "dummy",
//         percentage: "75",
//         start: "12-02-2022",
//         end: "12-03-2022",
//       },
//     ],
//   });

//   return (
//     <>
//       <div className=" flex  justify-center text-center">
//         {/* <Progress
//           setPart1={setPart1}
//           setPart2={setPart2}
//           setPart3={setPart3}
//           setInfoP1={setInfoP1}
//           info1={infop1}
//           info2={infop2}
//           info3={infop3}
//           setShow={setShow}
//         />{" "} */}
//         {/* {show ? (
//           <Resume
//             info1={infop1}
//             info2={infop2}
//             info3={infop3}
//             setShow={setShow}
//             setPart1={setPart1}
//           />
//         ) : (
//           <div className="border-2 w-1/2 justify-center align-middle text-center flex flex-col p-2 m-6">
//             {part1 ? (
//               <div className=" p-6">
//                 <Part1
//                   setInfoP1={setInfoP1}
//                   setData={setData}
//                   information={infop1}
//                   setPart1={setPart1}
//                   setPart2={setPart2}
//                   setPart3={setPart3}
//                 />
//               </div>
//             ) : (
//               <></>
//             )}

//             {part2 ? (
//               <div className=" p-6">
//                 {" "}
//                 <Part2
//                   setInfoP2={setInfoP2}
//                   information={infop2}
//                   setPart2={setPart2}
//                   setPart3={setPart3}
//                 />
//               </div>
//             ) : (
//               <></>
//             )}

//             {part3 ? (
//               <div className=" p-6">
//                 <Part3
//                   setInfoP3={setInfoP3}
//                   information={infop3}
//                   setPart1={setPart1}
//                   setPart3={setPart3}
//                   setShow={setShow}
//                 />
//               </div>
//             ) : (
//               <></>
//             )}
//           </div>
//         )} */}
//       </div>
//     </>
//   );
// }

// export default Decide;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import BasicInfo1 from "./parts/BasicInfo1";
import BasicInfo2 from "./parts/BasicInfo2";
import BasicInfo3 from "./parts/BasicInfo3";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };
  // const handleNext = () => {
  //   if (activeStep === steps.length - 1) {
  //     return setActiveStep(0);
  //   }
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };
  const getStepperPage = () => {
    switch (activeStep) {
      case 1:
        return (
          <BasicInfo2
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      case 2:
        return (
          <BasicInfo3
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      default:
        return (
          <BasicInfo1
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
    }
  };
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepperPage()}
      {/* <Box sx={{ flex: "1 1 auto" }} />
      <div className="flex">
        <Button onClick={() => handleBack()} disabled={activeStep == 0}>
          Back
        </Button>
        <Button onClick={() => handleNext()}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div> */}
    </Stack>
  );
}
