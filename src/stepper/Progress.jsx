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
    <b style={{ color: "purple" }}>'Enter Address'</b>,
  ];
}

export default function Progress(props) {
  const { infop1, setPart1, setPart2, setPart3 } = props;
  // const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
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
      <h1>GeeksforGeeks Stepper Form</h1>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>
                {getStepContent(index, infop1, setPart1, setPart2, setPart3)}
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

function getStepContent(step, infop1, setPart1, setPart2, setPart3) {
  const change = () => {
    console.log("changes");
    setPart1(false);
    setPart2(true);
  };
  switch (step) {
    case 0:
      return (
        <div className=" ">
          <div className="flex flex-col justify-center text-center">
            <Formik
              initialValues={infop1}
              onSubmit={(values, actions) => {
                console.log("submit clicked done");
                change();
              }}
              validationSchema={part1}>
              {(props) => (
                <Form className="flex flex-col justify-center text-center align-middle">
                  <div className="flex flex-col">
                    <div className="flex flex-col justify-start mb-6">
                      <label className="flex justify-start pl-1">Title:</label>
                      <Field
                        type="text"
                        label="Name"
                        name="title"
                        placeholder="Basic Information"
                        className=" p-3 m-1   rounded border-2 "
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-2 ">
                    <div className="w-1/2 flex flex-col">
                      <label className="flex justify-start pl-1">Name:</label>

                      <Field
                        type="text"
                        label="Name"
                        name="name"
                        placeholder="Name"
                        className=" p-3 m-1   rounded border-2 "
                      />

                      {props.errors.name && props.touched.name ? (
                        <p className=" text-red-600">{props.errors.name}</p>
                      ) : null}
                    </div>

                    <div className="w-1/2 flex flex-col">
                      <label className="flex justify-start pl-1">
                        Designation:
                      </label>

                      <Field
                        type="tel"
                        name="designation"
                        placeholder="eg: Frontend developer"
                        className=" p-3 m-1  rounded border-2"
                      />
                      {props.errors.designation && props.touched.designation ? (
                        <p className="  text-red-600">
                          {props.errors.designation}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {/* pic below  */}
                  {/* pic below  */}
                  {/* pic below  */}
                  {/* pic below  */}

                  <div className="flex flex-col justify-start">
                    <label className="flex justify-start pl-1">Picture:</label>
                    <Field
                      type="file"
                      label="Image"
                      name="image"
                      placeholder="image"
                      className=" p-3 m-1   rounded border-2 "
                    />
                    {/* {
                  (console.log("hdhd", typeof props.values.image),
                  props.values.image)
                }
                <img src={props.values.image} alt="img" /> */}
                  </div>

                  {/* obj below  */}
                  {/* obj below  */}
                  {/* obj below  */}
                  {/* obj below  */}
                  {/* obj below  */}

                  <div className="flex flex-col justify-start">
                    <label className="flex justify-start pl-1">
                      Objective:
                    </label>

                    <Field
                      type="text"
                      label="Name"
                      name="objective"
                      placeholder="Objective"
                      className=" p-3 m-1   rounded border-2 "
                    />

                    {props.errors.objective && props.touched.objective ? (
                      <p className=" text-red-600">{props.errors.objective}</p>
                    ) : null}
                  </div>

                  {/* kdjdj */}

                  {/* Email and Phone Below  */}
                  {/* Email and Phone Below  */}
                  {/* Email and Phone Below  */}
                  {/* Email and Phone Below  */}

                  <div className="flex justify-between ">
                    <div className=" flex-col  w-1/2  flex">
                      <label className="flex justify-start pl-1">Email:</label>

                      <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        className=" p-3 m-1   rounded border-2 "
                      />
                      {props.errors.email && props.touched.email ? (
                        <p className="  text-red-600">{props.errors.email}</p>
                      ) : null}
                    </div>

                    <div className="w-1/2 flex flex-col">
                      <label className="flex justify-start pl-1">
                        Contact:
                      </label>

                      <Field
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        className=" p-3 m-1  rounded border-2"
                      />
                      {props.errors.phone && props.touched.phone ? (
                        <p className="  text-red-600">{props.errors.phone}</p>
                      ) : null}
                    </div>
                  </div>

                  {/* Links Below  */}
                  {/* Links Below  */}
                  {/* Links Below  */}
                  {/* Links Below  */}

                  <div className="flex justify-between">
                    <div className="w-1/2 flex flex-col">
                      <label className="flex justify-start pl-1">
                        Contact:
                      </label>

                      <Field
                        type="text"
                        name="git"
                        placeholder="Github Link"
                        className=" p-3 m-1  rounded border-2"
                      />
                      {props.errors.git && props.touched.git ? (
                        <p className="  text-red-600">{props.errors.git}</p>
                      ) : null}
                    </div>
                    <div className="w-1/2 flex flex-col">
                      <label className="flex justify-start pl-1">
                        Contact:
                      </label>

                      <Field
                        type="text"
                        name="lin"
                        placeholder="Linkedin"
                        className=" p-3 m-1 rounded border-2"
                      />
                      {props.errors.lin && props.touched.lin ? (
                        <p className="  text-red-600">{props.errors.lin}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      onSubmit={() => {
                        console.log("done");
                      }}
                      className=" bg-blue-600 text-white rounded p-2 w-fit m-2 pr-3 flex ">
                      <div className="p-1">
                        <FaArrowRight />
                      </div>
                      Next
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      );
    case 1:
      return (
        <form class="form-group">
          <label>High School Percentage</label>
          <input type="number" placeholder="High School Percentage"></input>
          <br></br>
          <label>Graduation percentage</label>
          <input type="number" placeholder="Graduation Percentage"></input>
        </form>
      );
    case 2:
      return (
        <form class="form-group">
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
