import React from "react";
import { Theme, createStyles } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Part1 from "../parts/Part1";
import Part2 from "../parts/Part2";
import Part3 from "../parts/Part3";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import { part1 } from "../schema/schema1";
import { FaArrowRight } from "react-icons/fa";

function getSteps() {
  return [
    <b style={{ color: "purple" }}>'Enter Personal Details'</b>,
    <b style={{ color: "purple" }}>'Enter Education Details'</b>,
    <b style={{ color: "purple" }}>'Enter Education'</b>,
  ];
}

export default function Progress(props) {
  const { infop1, setPart1, setPart2, setPart3, setInfoP1, setData } = props;
  // const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    console.warn("Hrushikesh Progress component");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>
                {getStepContent(
                  index,
                  infop1,
                  setPart1,
                  setPart2,
                  setPart3,
                  setInfoP1,
                  setData,
                  handleNext
                )}
              </Typography>
              <div>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0}>
          <Typography>Form is submitted</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </Paper>
      )}
    </div>
  );
}

function getStepContent(
  step,
  infop1,
  setPart1,
  setPart2,
  setPart3,
  setInfoP1,
  setData,
  handleNext
) {
  const change = () => {
    console.log("changes");
    setPart1(false);
    setPart2(true);
  };
  switch (step) {
    case 0:
      return (
        <Part1
          handleNext={handleNext}
          setInfoP1={setInfoP1}
          setData={setData}
          information={infop1}
          setPart1={setPart1}
          setPart2={setPart2}
          setPart3={setPart3}
        />
      );
    case 1:
      return (
        <form>
          <label>High School Percentage</label>
          <input type="number" placeholder="High School Percentage"></input>
          <br></br>
          <label>Graduation percentage</label>
          <input type="number" placeholder="Graduation Percentage"></input>
        </form>
      );
    case 2:
      return (
        <form>
          <label>Permanent Address</label>
          <input type="text" placeholder="Permanent Address"></input>
          <br></br>
          <label>Temporary Address</label>
          <input type="text" placeholder="Temporary Address"></input>
        </form>
      );
    default:
      return "Unknown step";
  }
}
