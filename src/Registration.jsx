import React, { useRef } from "react";
import { Form, useFormik } from "formik";
import { signUpSchema } from "./schema/index";
import { useReactToPrint } from "react-to-print";
import { Formik, form, Field } from "formik";

function Registration() {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    gender: "",

    password: "",
    confirm_password: "",
  };
  const options = [
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Others", value: "Others" },
  ];
  const validationSchema = signUpSchema;
  // const onSubmit = (values, action) => {
  //   console.log("values", values);
  //   action.resetForm();
  // };
  const componentRef = useRef();
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("values for control", values);
        // action.resetForm();
      },
    });
  console.log("values", values);

  // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues,
  //     validationSchema: signUpSchema,
  //     onSubmit: (values, action) => {
  //       console.log("values", values);
  //       action.resetForm();
  //     },
  //     onReset: (values, action) => {
  //       action.resetForm();
  //       console.log("values", values);
  //     },
  //   });
  // console.log("errors", errors);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="bg-slate-400">
        <Formik initialValues={values}>
          {(values) => {
            return (
              <Form onSubmit={handlePrint} ref={componentRef} className="bg">
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
                    <p className=" text-red-600">{errors.name}hh</p>
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
                <div className=" p-3">
                  <label htmlFor="mobile" className="">
                    Number:
                  </label>
                  <input
                    className="p-1 "
                    type="number"
                    autoComplete="off"
                    name="mobile"
                    id="mobile"
                    placeholder="Mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobile && touched.mobile ? (
                    <p className="  text-red-600">{errors.mobile}</p>
                  ) : null}
                  {console.log("he", errors.mobile, initialValues.mobile)}
                </div>

                <div>
                  Gender:
                  <label>
                    {/* <input type="radio" name="gender" value="Male"></input> */}
                    <Field type="radio" name="gender" value="Male" />
                    Male
                  </label>
                  <label>
                    {/* <input type="radio" name="gender" value="Female"></input> */}
                    <Field type="radio" name="gender" value="Female" />
                    Female
                  </label>
                  <label>
                    {/* <input type="radio" name="gender" value="Others"></input> */}
                    <Field type="radio" name="gender" value="Others" />
                    Others
                  </label>
                  {/* {console.log("3", initialValues.values.gender)} */}
                </div>
                {console.log("3", values.values)}
                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
    // <div className="fixed flex justify-center align-middle  p-3   ">
    //   <div className="w-full bg-slate-400 flex flex-col align-middle justify-center transition rounded-md p-3 ">
    //     <div className="flex w-full max-w-4xl">
    //       <div className="">
    //         <p className="">Form</p>

    //         <form onSubmit={handleSubmit} ref={componentRef}>
    //           <div className=" p-3 ">
    //             <label htmlFor="name" className="">
    //               Name:
    //             </label>
    //             <input
    //               className="p-1 "
    //               type="name"
    //               autoComplete="off"
    //               name="name"
    //               id="name"
    //               placeholder="Name"
    //               value={values.name}
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //             />
    //             {errors.name && touched.name ? (
    //               <p className=" text-red-600">{errors.name}</p>
    //             ) : null}
    //           </div>
    //           <div className=" p-3">
    //             <label htmlFor="email" className="">
    //               Email:
    //             </label>
    //             <input
    //               className="p-1 "
    //               type="email"
    //               autoComplete="off"
    //               name="email"
    //               id="email"
    //               placeholder="Email"
    //               value={values.email}
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //             />
    //             {errors.email && touched.email ? (
    //               <p className="  text-red-600">{errors.email}</p>
    //             ) : null}
    //           </div>
    //           <div className=" p-3">
    //             <label htmlFor="mobile" className="">
    //               Number:
    //             </label>
    //             <input
    //               className="p-1 "
    //               type="number"
    //               autoComplete="off"
    //               name="mobile"
    //               id="mobile"
    //               placeholder="Mobile"
    //               value={values.mobile}
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //             />
    //             {errors.mobile && touched.mobile ? (
    //               <p className="  text-red-600">{errors.mobile}</p>
    //             ) : null}
    //             {console.log("he", errors.mobile, initialValues.mobile)}
    //           </div>
    //           <div className=" p-3">
    //             <label htmlFor="gender" className="">
    //               Gender:
    //             </label>
    //             <input
    //               className="p-1 "
    //               type="radio"
    //               autoComplete="off"
    //               name="gender"
    //               id="gender"
    //               placeholder="gender"
    //               options={options}
    //               value={values.gender}
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //             />
    //             {errors.gender && touched.gender ? (
    //               <p className="  text-red-600">{errors.gender}</p>
    //             ) : null}
    //             {console.log("he", errors.gender, initialValues.gender)}
    //           </div>
    //           {/* <div className="input-block p-3">
    //             <label htmlFor="password" className="">
    //               Password:
    //             </label>
    //             <input
    //               className="p-1 "
    //               type="password"
    //               autoComplete="off"
    //               name="password"
    //               id="password"
    //               placeholder="Password"
    //               value={values.password}
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //             />
    //             {errors.password && touched.password ? (
    //               <p className="  text-red-600">{errors.password}</p>
    //             ) : null}
    //           </div> */}
    //           {/* <div className="p-3">
    //             <label htmlFor="confirm_password" className="input-label">
    //               Confirm Password:
    //             </label>
    //             <input
    //               className="p-1 "
    //               type="password"
    //               autoComplete="off"
    //               name="confirm_password"
    //               id="confirm_password"
    //               placeholder="Confirm Password"
    //               value={values.confirm_password}
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //             />
    //             {errors.confirm_password && touched.confirm_password ? (
    //               <p className="  text-red-600">{errors.confirm_password}</p>
    //             ) : null}
    //           </div> */}
    //           <div className=" flex justify-around">
    //             <button
    //               className=" bg-blue-600 text-white rounded p-1 w-20"
    //               type="submit">
    //               Register
    //             </button>
    //             <button
    //               onClick={handlePrint}
    //               className=" bg-blue-600 text-white rounded p-1 w-20">
    //               {" "}
    //               Print{" "}
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Registration;
