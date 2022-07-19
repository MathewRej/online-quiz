import React from 'react';
import { useState } from 'react/cjs/react.development';
import './index.css';
import axios from 'axios';

const Registration = () => {
  const [values, setValues] = useState(Object.assign({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: '',
    userType: false,
    phoneNumber: '',
  }));
  const [errors, setErrors] = useState({})
  console.log('errors: ', errors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('value: ', value);
    console.log('name: ', name);

    setValues({
      ...values,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ''
    })
  }

  const handleSubmit = () => {
    const emailFormat = /\S+@\S+\.\S+/;
    const numFormat = /^[0-9]+$/
    let name, email, password, dob, confirmPassword, phoneNumber, gender;

    if (values.name === '') {
      name = 'Enter your name'
    }
    if (values.email === '') {
      email = 'enter your email'
    }
    if (values.email) {
      if (!emailFormat.test(values.email)) {
        email = 'Enter an Email ID'
      }
    }
    if (values.password === '') {
      password = 'enter your password'
    }
    if (values.password && values.password.length < 6) {
      password = "Password must be atleast 6 chars"
    }
    if (values.confirmPassword === '') {
      confirmPassword = 'enter your confirmPassword'
    }
    if (values.password !== values.confirmPassword) {
      confirmPassword = 'password doesnt match'
    }
    if (values.dob === '') {
      dob = 'date of birth'
    }
    if (values.phoneNumber === '') {
      phoneNumber = 'enter aphone number'
    }
    if (values.phoneNumber) {
      console.log('values.phoneNumber: ', values.phoneNumber);

      if (!numFormat.test(values.phoneNumber)) {
        phoneNumber = 'phone number must be digits'
      }
      if (values.phoneNumber.length !== 10) {
        phoneNumber = 'phone number must be 10 digits'
      }
    }
    if (values.gender == '') {
      gender = 'select your gender'
    }

    setErrors({
      name,
      email,
      password,
      confirmPassword,
      dob,
      phoneNumber,
      gender
    })

    // axios({
    //   method: 'post',
    //   url: 'http://localhost:4000/api/v1/user/register',
    //   data: values
    // }).then(response => {
    //   console.log('response: ', response.message);

    // })
  }
  return (
    <div className="main-div">
      <div className="login">
        <div>
          <h3> REGISTRATION FORM </h3>
        </div>
        <div className="form">
          <input
            name="name"
            type="textfield"
            placeholder="Name"
            className="text-field"
            value={values.name}
            onChange={(e) => handleChange(e)}
          />
          <br />
          {
            errors.name &&
            <><label style={{ color: 'red' }}>{errors.name}</label>
              <br /></>
          }
          <input
            name="email"
            type="textfield"
            placeholder="Email"
            className="text-field"
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
          <br />
          {
            errors.email &&
            <><label style={{ color: 'red' }}>{errors.email}</label>
              <br /></>
          }
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="text-field"
            value={values.password}
            onChange={(e) => handleChange(e)}
          />

          <br />
          {
            errors.password &&
            <><label style={{ color: 'red' }}>{errors.password}</label>
              <br /></>
          }
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="text-field"
            value={values.confirmPassword}
            onChange={(e) => handleChange(e)}
          />
          <br />
          {
            errors.confirmPassword &&
            <><label style={{ color: 'red' }}>{errors.confirmPassword}</label>
              <br /></>
          }
          <div>
            <label
              className="gender">
              Gender
            </label>
            <input type="radio" name="gender" value="male" onChange={(e) => handleChange(e)} />Male
            <input type="radio" name="gender" value="female" onChange={(e) => handleChange(e)} />Female
            <br />
            {
              errors.gender &&
              <><label style={{ color: 'red' }}>{errors.gender}</label>
                <br /></>
            }

          </div>
          <input
            name="dob"
            type="textfield"
            placeholder="DOB"
            className="text-field"
            value={values.dob}
            onChange={(e) => handleChange(e)}
          />
          <br />
          {
            errors.dob &&
            <> <label style={{ color: 'red' }}>{errors.dob}</label>
              <br /></>
          }
          <input
            name="phoneNumber"
            type="textfield"
            placeholder="Phone Number"
            className="text-field"
            value={values.phoneNumber}
            onChange={(e) => handleChange(e)}
          />
          <br />
          {
            <><label style={{ color: 'red' }}>{errors.phoneNumber}</label>
              <br /></>
          }
          <div>
            <input
              name="userType"
              type="checkbox"
              value={values.userType}
              onClick={(e) => handleChange(e)} /> Register as Teacher
          </div>
          {
            values.userType &&
            <label style={{ color: 'green' }}> Need adimn's approval for login as a Teacher </label>
          }
        </div>
        <div className="button2">
          <button onClick={() => handleSubmit()} className="register-button">Register</button>
        </div>

      </div>
    </div>
  );
}
export default Registration;