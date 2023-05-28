import { useFormik } from 'formik'
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import app_config from '../main/config';

const AddComponent = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [image, setImage] = useState(null);

  const {api_url} = app_config;

  const compForm = useFormik({
    initialValues: {
      title: '',
      description: '',
      // user: currentUser._id,
      image: '',
      code: '',
      createdAt: new Date()
    },

    onSubmit: async (values) => {
      values.image = image.name;
      console.log(values);

      const res = await fetch('http://localhost:5000/component/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Good',
          text: 'Code successfully submitted'
        })
      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Invalid Credentials'
        })
      }

    }
  })

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(api_url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        setImage(file);
      }
    });
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://cdn.acodez.in/wp-content/uploads/2015/09/banner.jpg"
                className="w-100"
                style={{
                  borderTopLeftRadius: ".3rem",
                  borderTopRightRadius: ".3rem"
                }}
                alt="Sample photo"
              />
              {/* className="p-4 p-md-5" */}
              <div className="card-body ">
                <h3 className="mb-4 pb-md-0 mb-md-5 ">
                  Add Your Code
                </h3>
                <form onSubmit={compForm.handleSubmit} className="px-md-2" >

                  <MDBInput label='Title' type='text' className='my-3' id="title" onChange={compForm.handleChange} value={compForm.values.title} />
                  <MDBInput label='Description' type='text' className='my-3' id="description" onChange={compForm.handleChange} value={compForm.values.description} />
                  <MDBTextArea rows={5} label='Code' className='my-3' id="code" onChange={compForm.handleChange} value={compForm.values.code} />
                  <MDBInput type='file' className='my-3' id="image" onChange={uploadFile} />


                  <button type="submit" className="btn btn-success btn-lg mb-1">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AddComponent
