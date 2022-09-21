import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useHistory, useLocation } from 'react-router-dom';
import { FadeInText, FadeInUp, FadeInUpBtn } from '../Animation';

import axios from 'axios';


function Purchase_Form() {
    let location = useLocation();
    // console.log(location)
    let locationData = location.state.Data;
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYnVpbGRpbmdhbXBsaW9zb0BnbWFpbC5jb20iLCJ1c2VySWQiOjE0fSwiaWF0IjoxNjU0NTA1Mjc0LCJleHAiOjE2NTQ4MDUyNzR9.xvGtdcB96-91ZDlNOHA5smNmyXuaXiBSCZtQjkBXpZw`;
    // var randomstring_password = Math.random().toString(36).slice(-8);
    const history = useHistory()
    useEffect(() => {
        console.log(locationData.employees_limit)
        console.log(location.state.Data)

        console.log(token)
        // console.log(randomstring_password+"pass")

    }, [])

    const [SignUpFormData, setSignUpFormData] = useState({
        company_name: '',
        company_logo: 'abc',
        first_name: '',
        last_name: '',
        comapany_headquaters: '59',
        date_of_inception: '1800',
        number_of_employee: 0,
        business_sector: '2',
        feedback_frequency: '1',
        average_employee_compansation: '2',
        current_package: '2',
        username: '',
        password: '',
        created_by: 1,
        updated_by: 1,
        created_on: 1,
    })
    const [Error, setError] = useState('')

    const handleChangeInput = (e) => {
        console.log(e.target.name)
        // let name=e.target.name;
        setSignUpFormData({ ...SignUpFormData, [e.target.name]: e.target.value })
        console.log(SignUpFormData)
    }




    const handleSubmit = (e) => {
        e.preventDefault()
        // history.push({
        //     pathname: '/Payment_Page',
        //     state: locationData
        // })
        var randomstring_password = Math.random().toString(36).slice(-8);
        setSignUpFormData("")
        console.log(SignUpFormData)
        // alert(SignUpFormData.first_name == "")
        if (SignUpFormData.first_name == "" && SignUpFormData.last_name == "" && SignUpFormData.company_name == "" && SignUpFormData.username == "") {
            setError("please fill all fields")
            // setTimeout(() => {
            //     setError("")
            // }, 5000);
        } else if (SignUpFormData.first_name == "") {
            setError("please enter first name")
        } else if (SignUpFormData.last_name == "") {
            setError("please enter last name")
        } else if (SignUpFormData.company_name == "") {
            setError("please enter company name")
        } else if (SignUpFormData.username == "") {
            setError("please enter username")
        } else {
            setError("")
        }
        // setError("")
        // setSignUpFormData({
        //     ...SignUpFormData, ["first_name"]: "", ["last_name"]: "", ["company_name"]: "", ["username"]: ""
        // })


        // getData()
        console.log(SignUpFormData)


        e.preventDefault();



        // setError("jj")
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var rawrich = JSON.stringify(SignUpFormData)

        var rawrich = JSON.stringify(SignUpFormData)
        var user_id = localStorage.getItem("user_id");
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYnVpbGRpbmdhbXBsaW9zb0BnbWFpbC5jb20iLCJ1c2VySWQiOjE0fSwiaWF0IjoxNjU0NTA1Mjc0LCJleHAiOjE2NTQ4MDUyNzR9.xvGtdcB96-91ZDlNOHA5smNmyXuaXiBSCZtQjkBXpZw`;
        var formdata = new FormData();
        formdata.append('company_name', SignUpFormData.company_name);
        formdata.append('first_name', SignUpFormData.first_name);
        formdata.append('last_name', SignUpFormData.last_name);
        formdata.append('comapany_headquaters', SignUpFormData.comapany_headquaters);
        formdata.append('date_of_inception', SignUpFormData.date_of_inception);
        formdata.append('number_of_employee', 5);
        formdata.append('business_sector', SignUpFormData.business_sector);
        formdata.append('feedback_frequency', SignUpFormData.feedback_frequency);
        formdata.append('average_employee_compansation', SignUpFormData.average_employee_compansation);
        formdata.append('current_package', SignUpFormData.current_package);
        formdata.append('username', SignUpFormData.username);
        formdata.append('created_by', 1);
        formdata.append('updated_by', 1);
        formdata.append('created_on', "2021/02/02");
        console.log(JSON.stringify(formdata.get('current_package')));
        console.log(rawrich)
        console.log(formdata)

        var config = {
            method: 'post',
            url: `http://208.109.14.182:9000/masters/companyAmpliosoNew`,
            headers: {
                'Authorization': token,
                'Content-Type': 'multipart/form-data'
            },
            data: formdata
        };
        console.log(config);

        axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            if (response.data.status == 200) {
                setError("Company Added Successfully")
                setTimeout(() => {
                    setError("")
                }, 5000)
                history.push({
                    pathname: '/Payment_Page',
                    state: locationData
                })

            }
            if (response.data.status == 400) {
                setError("Company Already Exist With this E-mail,Plaese Change E-mail and try again")

            }
        })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <section>

            <div className="section wrapper-2-pricing">
                <div>
                    <div className="contact-full-wrapper mt-5 ">
                        <section className="wrapper-2-contact card  ">
                            <div className="form-div row align-items-center " style={{ marginTop: "15%" }}>
                                <FadeInUp>
                                    <form >
                                        <div >
                                            {Error ? (
                                                <FadeInText>
                                                    <div className='text-center p-5' style={{ textTransform: "capitalize" }}>{Error ? Error : ""}</div>
                                                </FadeInText>
                                            ) : null}

                                            <FadeInUpBtn>
                                                <h4 className='text-center'>Sign Up</h4>
                                            </FadeInUpBtn>
                                            {console.log(SignUpFormData)}
                                            <div className="input-text-div">

                                                <div >
                                                    <input type="text" placeholder="First Name" name='first_name' value={SignUpFormData.first_name} onChange={handleChangeInput} />
                                                    <input type="text" placeholder="Last Name" name='last_name' value={SignUpFormData.last_name} onChange={handleChangeInput} />
                                                </div>
                                                <div >
                                                    <input type="text" placeholder="Company Name" name='company_name' value={SignUpFormData.company_name} onChange={handleChangeInput} />
                                                    <input type="text" placeholder="Email-id" name='username' value={SignUpFormData.username} onChange={handleChangeInput} />
                                                </div>
                                                {/* <div >
                                                    <input type="number" placeholder="Contact No." name='comapany_headquaters' onChange={handleChangeInput} />
                                                </div> */}
                                                {/* <div>
                                                    <textarea placeholder="Message" ></textarea>
                                                </div> */}
                                            </div>

                                            <div className="contact-btn--container">
                                                <button className='h-50 mt-3' onClick={handleSubmit}>Submit</button>

                                            </div>



                                        </div>
                                    </form>
                                </FadeInUp>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Purchase_Form