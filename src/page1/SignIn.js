import React, { useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
// import white_logo from "../src/assets/images/logo.png";
import white_logo from "../../src/assets/images/logo.png";

// import white_logo from "../assets/images/logo.png";
// import logo from "../src/assets/images/logo.png";
import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import M from "materialize-css";
// require("dotenv").config();

const SignIn = () => {
    const BaseURL = process.env.REACT_APP_Base_URL_Master_Gateway;
    const BaseManagerURL = process.env.REACT_APP_Base_URL_Manager_Gateway;
    const history = useHistory();
    const initialValues = {
        email: '',
        password: ''
    }

    const [Master, setMaster] = useState(false)
    const [error, seterror] = useState("")

    // const validate = Yup.object({
    //     email: Yup.string()
    //         .email('Email is invalid')
    //         .required('Email is required'),
    //     password: Yup.string()
    //         .min(6, 'Password must be at least 6 charaters')
    //         .required('Password is required'),
    // })

    const OnSubmitForm = (values, props) => {
        // console.log(values);
        seterror("")
        console.log(Master)


        try {
            fetch(BaseURL
                , {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: values.email,
                        password: values.password,
                    }),
                })
                .then((res) => {
                    return res.json();
                })
                .then((resData) => {
                    console.log(resData)
                    console.log(resData.code)
                    if (resData.status === 200) {
                        localStorage.setItem("masters_jwt", resData.resultSet.token)
                        localStorage.setItem("masters_id", resData.resultSet.userId)
                        localStorage.setItem("company", JSON.stringify(resData.resultSet))
                        // dispatch({ type: "MANAGER", payload: resData.resultSet })
                        // Redirect("http://localhost:3002/")
                        // history.push("/master_admin/");
                        window.location.assign('http://dev.amplioso.com/master_admin/company_profile');
                    }
                    console.log(resData.code == 204)
                    if (resData.code == 204) {
                        // seterror(resData.message)

                        fetch(BaseManagerURL
                            , {
                                method: "post",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    username: values.email,
                                    password: values.password,
                                }),
                            })
                            .then((res) => {
                                return res.json();
                            })
                            .then((resData) => {
                                console.log(resData)
                                if (resData.status === 200) {
                                    localStorage.setItem("manager_jwt", resData.resultSet.token)
                                    localStorage.setItem("manager_id", resData.resultSet.managerId)
                                    localStorage.setItem("companyId", resData.resultSet.companyId)
                                    localStorage.setItem("manager", JSON.stringify(resData.resultSet))
                                    // dispatch({ type: "MANAGER", payload: resData.resultSet })
                                    // Redirect("http://localhost:3003/")
                                    // history.push("/manager/");
                                    window.location.assign('http://dev.amplioso.com/manager/');
                                    // M.toast({
                                    //     html: "login Successful",
                                    //     classes: "#e#00e676 green accent-3",
                                    // });
                                }
                                if (resData.code == 204) {
                                    seterror(resData.message)
                                }
                                props.resetForm();
                            })
                            .catch((err) => {
                                console.log(err);
                            });


                    }
                    props.resetForm();
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
        props.resetForm()


        // return false;
        // if (Master == true) {
        //     console.log("master")
        //     try {
        //         fetch(BaseURL
        //             , {
        //                 method: "post",
        //                 headers: {
        //                     "Content-Type": "application/json",
        //                 },
        //                 body: JSON.stringify({
        //                     username: values.email,
        //                     password: values.password,
        //                 }),
        //             })
        //             .then((res) => {
        //                 return res.json();
        //             })
        //             .then((resData) => {
        //                 console.log(resData)
        //                 console.log(resData.code)
        //                 if (resData.status === 200) {
        //                     localStorage.setItem("masters_jwt", resData.resultSet.token)
        //                     localStorage.setItem("masters_id", resData.resultSet.userId)
        //                     localStorage.setItem("company", JSON.stringify(resData.resultSet))
        //                     // dispatch({ type: "MANAGER", payload: resData.resultSet })
        //                     // Redirect("http://localhost:3002/")
        //                     // history.push("/master_admin/");
        //                     window.location.assign('http://dev.amplioso.com/master_admin/');
        //                 }
        //                 console.log(resData.code == 204)
        //                 if (resData.code == 204) {
        //                     seterror(resData.message)
        //                 }
        //                 props.resetForm();
        //             })
        //             .catch((err) => {
        //                 console.log(err);
        //             });
        //     } catch (err) {
        //         console.log(err);
        //     }
        //     props.resetForm()
        // } else {
        //     console.log("manager")

        //     fetch(BaseManagerURL
        //         , {
        //             method: "post",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify({
        //                 username: values.email,
        //                 password: values.password,
        //             }),
        //         })
        //         .then((res) => {
        //             return res.json();
        //         })
        //         .then((resData) => {
        //             console.log(resData)
        //             if (resData.status === 200) {
        //                 localStorage.setItem("manager_jwt", resData.resultSet.token)
        //                 localStorage.setItem("manager_id", resData.resultSet.managerId)
        //                 localStorage.setItem("companyId", resData.resultSet.companyId)
        //                 localStorage.setItem("manager", JSON.stringify(resData.resultSet))
        //                 // dispatch({ type: "MANAGER", payload: resData.resultSet })
        //                 // Redirect("http://localhost:3003/")
        //                 // history.push("/manager/");
        //                 window.location.assign('http://dev.amplioso.com/manager/');
        //                 // M.toast({
        //                 //     html: "login Successful",
        //                 //     classes: "#e#00e676 green accent-3",
        //                 // });
        //             }
        //             if (resData.code == 204) {
        //                 seterror(resData.message)
        //             }
        //             props.resetForm();
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
        // }

    }
    return (
        <>
            {/* <div style={{ background: 'rgb(46 62 106)', overflow: 'hidden', height: '100vh' }}> */}
            <div style={{ background: 'gray', overflow: 'hidden', height: '100vh' }}>

            {/* <div style={{ background: 'rgb(43, 57, 97)', overflow: 'hidden', height: '100vh' }}> */}
                {/* <div className="text-center login-logo"><a href="/">
                <img src={white_logo} alt border={0} className="img-responsive" />
            </a>
            </div> */}

                {/* <div className="wht-text text-center">Not a member yet? <a href="sign-up.html">Sign Up</a> and get started now!</div> */}


                <div className='card' style={{ width: "50rem", position: "relative", left: "25%", top: "15%" }}>
                    <div className='card-body'>
                        {/* <div className='card-header text-center'><b>Ampliso Login</b></div> */}
                        <div className='card-header  '>
                            {/* <img src={white_logo} alt border={0} className="img-responsive" style={{ height: "50px" }} /> */}
                            <div className='text-center' style={{ fontSize: "20px" }}><b>Manager Or Master Admin Login</b></div>
                        </div>



                        <div className="row mt-5" style={{ marginLeft: "4rem" }}>
                            {/* {error ? (
                            <div className='text-center ' style={{ position: "absolute", width: "400px", height: "80px", left: "30%", top: "20%", backgroundColor: "#A61A26" }}>
                                <p style={{ marginTop: "24px", color: "white" }}>Email and password does not match</p>
                            </div>
                            ) : null} */}
                            <Formik
                                initialValues={
                                    initialValues
                                }
                                // validationSchema={validate}
                                onSubmit={(values, props) => {
                                    OnSubmitForm(values, props)
                                }}
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        errors,
                                        touched,
                                        handleBlur,
                                        isValid,
                                        dirty
                                    } = formik;
                                    return (
                                        <Form onSubmit={handleSubmit}>
                                            <p className='text-center' style={{ marginTop: "24px", color: "red" }}>{error}</p>
                                            <div className='row'>
                                                <label for="inputText" className="col-sm-12 col-form-label ">Username</label>
                                                <div className="col-sm-11" style={{ height: "80px" }}>
                                                    <input type="text"
                                                        className="form-control h-75"
                                                        name="email"
                                                        values="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        placeholder="E-mail"
                                                        feild="email"
                                                    />
                                                    {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                                                </div>
                                            </div>
                                            <div className='row'>
                                                <label for="inputPassword" className="col-sm-12 col-form-label mt-3">Password</label>
                                                <div className="col-sm-11" style={{ height: "80px" }} >
                                                    <input type="password"
                                                        className="form-control h-75"
                                                        name="password"
                                                        values="password"
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        placeholder="Password"
                                                        feild="password"
                                                        id="inputPassword" />
                                                    {errors.password && touched.password ? (<div className="error">{errors.password}</div>) : null}

                                                </div>
                                            </div>

                                            <div class="mb-3 row" style={{ height: "60px" }}>
                                                <div class="col-sm-11">
                                                    <button className='btn-success w-100 h-100 signbutton-conatiner' style={{ borderRadius: "3px", backgroundColor: "#B31C29" }}>Submit</button>
                                                </div>

                                            </div>

                                        </Form>
                                    );
                                }}
                            </Formik>

                        </div>




                        <div class="row text-center" style={{ marginLeft: "0rem", fontWeight: "bold", color: "#B31C29" }}>
                            {/* <span onClick={
                                () => {
                                    setMaster(!Master)
                                    seterror("")
                                }
                            } style={{ cursor: "pointer" }} >{Master ? "Manager" : "Master Admin"} Login Here</span> */}
                            <Link to="#" >Forgot Password</Link>

                        </div>



                    </div>

                </div>


            </div >



        </>
    )
}

export default SignIn;