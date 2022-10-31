// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1
// copy of part 1

import React from "react";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import { part1 } from "../schema/schema1";
import { FaArrowRight } from "react-icons/fa";

function Part1(props) {
  const { information, setPart1, setPart2, setPart3 } = props;

  const change = () => {
    console.log("changes");
    setPart1(false);
    setPart2(true);
  };

  return (
    <div className=" ">
      <div className="flex flex-col justify-center text-center">
        <Formik
          initialValues={information}
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
                  <label className="flex justify-start pl-1">Contact:</label>

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
                  <label className="flex justify-start pl-1">Contact:</label>

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
}

export default Part1;
