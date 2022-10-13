import React, { useRef } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schema/index";
import { useReactToPrint } from "react-to-print";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
function Registration() {
  const componentRef = useRef();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="fixed flex justify-center align-middle  p-3   ">
      <div className="w-full bg-slate-400 flex flex-col align-middle justify-center transition rounded-md p-3 ">
        <div className="flex w-full max-w-4xl">
          <div className="">
            <p className="">Form</p>

            <form onSubmit={handleSubmit} ref={componentRef}>
              <div className=" p-3 ">
                <label htmlFor="name" className="">
                  Name:
                </label>
                <input
                  className="p-1 "
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className=" text-red-600">{errors.name}</p>
                ) : null}
              </div>
              <div className=" p-3">
                <label htmlFor="email" className="">
                  Email:
                </label>
                <input
                  className="p-1 "
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="  text-red-600">{errors.email}</p>
                ) : null}
              </div>
              <div className="input-block p-3">
                <label htmlFor="password" className="">
                  Password:
                </label>
                <input
                  className="p-1 "
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="  text-red-600">{errors.password}</p>
                ) : null}
              </div>
              <div className="p-3">
                <label htmlFor="confirm_password" className="input-label">
                  Confirm Password:
                </label>
                <input
                  className="p-1 "
                  type="password"
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="  text-red-600">{errors.confirm_password}</p>
                ) : null}
              </div>
              <div className=" flex justify-around">
                <button
                  className=" bg-blue-600 text-white rounded p-1 w-20"
                  type="submit">
                  Register
                </button>
                <button
                  onClick={handlePrint}
                  className=" bg-blue-600 text-white rounded p-1 w-20">
                  {" "}
                  Print{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
