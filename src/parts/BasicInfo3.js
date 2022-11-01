import React from "react";
import { Formik, Form, Field } from "formik";

const BasicInfo3 = ({ activeStep, setActiveStep }) => {
  const onSubmit = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <p className="text-center">BasicInfo3</p>
      <div className="flex flex-col justify-center text-center">
        <Formik initialValues={{ title: "" }} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
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
              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-gray-600 text-white rounded p-2 w-fit m-2 pr-3 disabled:opacity-50"
                  onClick={() => setActiveStep((step) => step - 1)}
                  disabled={activeStep == 0}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded p-2 w-fit m-2 pr-3"
                >
                  Finish
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BasicInfo3;
