import React from "react";
import {
  FormikStepper,
  FormikStep,
  InputField,
  CheckBoxField,
  RadioField,
  SelectField,
  FormikHelpers,
} from "formik-stepper";
import * as Yup from "yup";

import "formik-stepper/dist/style.css";

const onSubmit = () => {
  console.log("done");
  alert("any");
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("The First Name field is required"),
  lastName: Yup.string().required("The Last Name field is required"),
  email: Yup.string()
    .email("The email must be a valid email address.")
    .required("The Email field is required"),
  password: Yup.string().required("The Password field is required"),

  privacy: Yup.boolean()
    .isTrue()
    .oneOf([true], "The terms and conditions must be accepted."),
});

export default function Steps() {
  return (
    <div>
      {" "}
      <FormikStepper
        /// Accept all Formik props
        onSubmit={onSubmit} /// onSubmit Function
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          privacy: false,
        }}
        validationSchema={validationSchema}
        withStepperLine /// false as default and If it is false, it hides stepper line
        nextButton={{ label: "Step" }}
        prevButton={{ label: "Back" }}
        submitButton={{
          label: "Done",
          style: { background: "blue" },
        }}>
        {/*  First Step */}
        {/*  First Step */}
        {/*  First Step */}
        {/*  First Step */}
        {/*  First Step */}

        <FormikStep
          label="Profile Info" /// The text label of Step
          labelColor="#37bf5e" /// css-colors => #fff
          circleColor="#37bf5e" /// css-colors => #fff
          Icon={({ active, done }) => {
            console.log({ active, done });
            // if (active) return <IoAdd />;
            // else return <IoBalloonSharp />;
          }}>
          <InputField name="firstName" label="First Name" floating />
          <InputField name="lastName" label="Last Name" floating />

          <div>
            <SelectField
              label="select"
              name="select"
              labelColor="#dc3545"
              placeholder="select"
              isMulti
              options={[
                { value: "one", label: "one" },
                { value: "tow", label: "tow" },
                { value: "three", label: "three" },
              ]}
            />
          </div>
        </FormikStep>

        {/* Second Step */}
        <FormikStep label="Login Info" circleColor="#6f42c1">
          <InputField name="email" label="Email" type="email" />
          <InputField
            name="password"
            label="password"
            type="password"
            floating
          />
          <div>
            <CheckBoxField name="privacy" label="privacy" />
          </div>
          <RadioField
            name="RadioField"
            label="Radio"
            labelColor="#000"
            options={[
              { label: "one.", value: "one" },
              { label: "tow.", value: "tow" },
            ]}
          />
        </FormikStep>
      </FormikStepper>
    </div>
  );
}