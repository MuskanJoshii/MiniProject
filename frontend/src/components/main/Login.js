import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

const Login = () => {
  const loginForm = useFormik({
		initialValues: {
			email: '',
			password: ''
		},

		onSubmit: async (values) => {
			console.log(values);
        const res = await fetch('http://localhost:5000/user/authenticate', {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		});

		    if(res.status === 200){
			Swal.fire({
				icon: 'success',
				title: 'Login success',
				text : 'Login sucessfully'
			})
      const data = await res.json();
      sessionStorage.setItem('user', JSON.stringify(data));
		  }else if(res.status === 401){
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text : 'Invalid Credentials'
			})
		  }

		}
	})
  return (    

<section className="container" style={{backgroundColor: '#eee'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid"
          alt="Phone image"
        />
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          <MDBInput label='email'  type='text' className='my-3'
          id="email"
          onChange={loginForm.handleChange}
          value={loginForm.values.email} />

          <MDBInput label='password'  type='password'
          id="password"
          onChange={loginForm.handleChange}
          value={loginForm.values.password}
          className="form-control form-control-lg" 
          />
          
          <div className="d-flex justify-content-around align-items-center mb-4">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form1Example3"
                defaultChecked=""
                
              />
              <label className="form-check-label" htmlFor="form1Example3">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Sign in
          </button>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
          <a
            className="btn btn-primary btn-lg btn-block"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f me-2" />
            Continue with Facebook
          </a>
          <Link
            className="btn btn-primary btn-lg btn-block"
            style={{ backgroundColor: "#55acee" }}
            to='/main/instaloginn'
            
          >
            <i className="fab fa-instagram me-2" />
            Continue with Instagram
          </Link>
        </form>
      </div>
    </div>
  </div>
</section>


  )
}

export default Login
