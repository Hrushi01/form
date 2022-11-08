import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import { basicinfoschema } from "../schema/schema";
import { FaUpload } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const BasicInfo1 = (props) => {
  const { activeStep, setActiveStep, basicinfo, setBasicInfo } = props;
  const fileref = useRef(null);

  const onSubmit = () => {
    setActiveStep((step) => step + 1);
  };
  return (
    <div>
      <div className="flex  justify-center text-center w-screen ">
        <Formik
          initialValues={basicinfo}
          validationSchema={basicinfoschema}
          onSubmit={onSubmit}>
          {(props) => (
            <Form className="flex flex-col justify-center text-center align-middle border-2 rounded-lg border-gray-400 w-1/2 p-2">
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
                    <p className="  text-red-600">{props.errors.designation}</p>
                  ) : null}
                </div>
              </div>

              {/* pic below  */}
              {/* pic below  */}
              {/* pic below  */}
              {/* pic below  */}

              <div className="flex flex-col justify-start">
                <label className="flex justify-start pl-1">Picture:</label>
                <input
                  ref={fileref}
                  hidden
                  type="file"
                  label="Image"
                  className=" p-3 m-1   rounded border-2 "
                  onChange={(e) => {
                    props.setFieldValue("file", e.target.files[0]);
                  }}
                />
                <div className="flex ">
                  <button
                    type="button"
                    onClick={() => {
                      fileref.current.click();
                    }}
                    className="flex  bg-blue-600 text-white rounded p-2 w-fit m-2 pr-3">
                    Upload &nbsp;
                    <div className="pt-1">
                      <FaUpload />
                    </div>
                  </button>
                  {props.values.file ? (
                    <div className="text-5xl pt-1 text-green-400">
                      <TiTick className="" />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {/* obj below  */}
              {/* obj below  */}
              {/* obj below  */}
              {/* obj below  */}
              {/* obj below  */}

              <div className="flex flex-col justify-start">
                <label className="flex justify-start pl-1">Objective:</label>

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
                  <label className="flex justify-start pl-1">Contact:</label>

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
                  <label className="flex justify-start pl-1">Github:</label>

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
                  <label className="flex justify-start pl-1">Linkdin:</label>

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
                  type="button"
                  className="bg-gray-600 text-white rounded p-2 w-fit m-2 pr-3 disabled:opacity-50"
                  onClick={() => setActiveStep((step) => step - 1)}
                  disabled={activeStep === 0}>
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded p-2 w-fit m-2 pr-3">
                  Next
                </button>
              </div>
              {setBasicInfo(props.values)}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BasicInfo1;
