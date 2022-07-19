import React, { useState } from 'react';
import './index.css';

const Login = () => {

    const [values, setValues] = useState(Object.assign({
        email: '',
        password: '',
    }));

    const [errors, setErrors] =  useState({})

    const handleChange = (e) => {

      const  { name, value } = e.target
      setValues({
          ...values,
          [name]: value
      });

      setErrors({
          ...errors,
          [name]: ''
      });
    }
    const handleSubmit = () => {
        let email, password;

        // email validation 
        if(values.email === '') {
           email= 'enter your email'
        }
        if(values.email) {
            const emailFormat = /\S+@\S+\.\S+/;
            if(!emailFormat.test(values.email)) {
                email = 'Enter an Email ID'
            }
        }

        //password validation
        if (values.password === '') {
            password= 'enter your password'
        }
        if (values.password && values.password.length < 6) {
            password = "Password must be atleast 6 chars"
        }

        setErrors({
            email,
            password
        })
    }
    return (
        <div className="main-div">
            <div className="login">
                <div className="signin-nav">
                    <h3>SIGN IN TO YOUR ACCOUNT</h3>
                </div>
                <div className="email">
                    <input
                        name="email"
                        type="textfield"
                        placeholder="Email"
                        className="text-field"
                        value={values.email}
                        onChange={(e)=> handleChange(e)}
                    /> <br/>
                    {
                        errors.email && 
                        <> <label style={{color: 'red'}}>{errors.email}</label> <br /> </>
                    }
                   
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="text-field"
                        value={values.password}
                        onChange={(e)=> handleChange(e)}
                    /> <br />
                    {
                        errors.password && 
                        <> <label style={{color: 'red'}} >{errors.password}</label> <br /> </>
                    }

                </div>
                <div className="button1">
                    <button 
                        className="login-button"
                        onClick={()=> handleSubmit()}
                    >
                        Log In
                    </button>
                </div>

                <div className="sign-up" >
                    <a href="/registration" > Sign Up</a> <br />
                    <a href="/forgot-password" > Forgot Password?</a>
                </div>

            </div>

        </div >
    )
}
export default Login;