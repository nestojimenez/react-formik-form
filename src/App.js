import { useFormik } from "formik";
import React from "react";
import Card from "./components/Card";

// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    onSubmit: values => {
      console.log('form: ', values);
      alert('Login Sucessful')
    },
    validate: values =>{
      let errors = {};
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(!values.email) errors.email = 'Field required'
      if(!values.password) errors.password = 'Field required'
      if(!values.email.match(validRegex) && values.email) errors.email = 'Username should be an email'
      return errors;
    }
  });


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='card' style={{width:'24rem'}}>
          <img src="" alt="" />
          <div className='card-body'>
              <h4 className='card-title'>My Form</h4>

              <div className="input-group mb-3 mt-4">
                <input id="emailField" name="email" type="text" className="form-control" placeholder="Recipient's email" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={formik.handleChange} value={formik.values.email}/>
                <span className="input-group-text" id="basic-addon2">@example.com</span>
              </div>
              {formik.errors.email ? <div id="emailError" className="text-start" style={{color: 'red'}}>{formik.errors.email}</div>: null}
              
              <div className="input-group mb-3 mt-4">
                <input id="pswField" name="password" type="text" className="form-control" placeholder="Enter Password" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={formik.handleChange} value={formik.values.password}/>
                
              </div>
              {formik.errors.password ? <div id="pswError" className="text-start" style={{color: 'red'}}>{formik.errors.password}</div>: null}

              <button id="submitBtn" className="btn btn-primary mt-5" type="submit">Submit</button>

          </div>
        </div>
      </form>      
    </div>
  );
}

export default App;
