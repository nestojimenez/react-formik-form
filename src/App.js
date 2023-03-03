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
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'Required'
      if(!values.password) errors.password = 'Required'
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
                <input name="email" type="text" className="form-control" placeholder="Recipient's email" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={formik.handleChange} value={formik.values.email}/>
                <span className="input-group-text" id="basic-addon2">@example.com</span>
              </div>
              {formik.errors.email ? <p className="text-start" style={{color: 'red'}}>{formik.errors.email}</p>: null}
              
              <div className="input-group mb-3 mt-4">
                <input name="password" type="text" className="form-control" placeholder="Enter Password" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={formik.handleChange} value={formik.values.password}/>
                
              </div>
              {formik.errors.password ? <p className="text-start" style={{color: 'red'}}>{formik.errors.password}</p>: null}

              <button className="btn btn-primary mt-5" type="submit">Submit</button>

          </div>
        </div>
      </form>      
    </div>
  );
}

export default App;
