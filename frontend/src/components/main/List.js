import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import app_config from './config';

const List = () => {

  const url = app_config.api_url;

  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const getDataFromBackend = async () => {
    setLoading(true);
    const res = await fetch(url + '/component/getall');
    const data = await res.json();
    setComponents(data);
    setLoading(false);
    console.log(data);
  }
  useEffect(() => {
    getDataFromBackend();
  }, [])

  const displayComponents = () => {
    if (!loading) {
      return components.map(({ _id, image, uploadedBy, title, description }) => (
        <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
          <div className="card mt-4">

            <img src={url + "/" + image}
              className="card-img-top" alt=" Component image" />
            <div className="card-body">

              <h4 className="mb-0">{title}</h4>
              {/* <p className="text-dark fw-bold text-muted">{uploadedBy.fname} {uploadedBy.lname}</p> */}

              <button className='btn btn-success mt-5 float-end' onClick={e => navigate('/main/viewer/' + _id)}>View</button>
            </div>
          </div>
        </div>
      ))
    }
  }

  return (
    <div className='browsebackground' style={{backgroundColor: '#F7A4A4'}}>

      {/* header start */}
      <div>
        <header>

          {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div> */}
          {/* </div>
  </nav>
   */}


          <div className=" browseheader p-5 text-center bg-image">
            <div className="mask">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  {/* <h1 className="mb-3">Components</h1>
          <h4 className="mb-3">Showcase of various components</h4> */}
                  {/* <a className="btn btn-outline-light btn-lg" href="#!" role="button"
          >Call to action</a
          > */}
                </div>
              </div>
            </div>
          </div>

        </header>
      </div>
      {/* header end */}

      {/* For Searchbar */}
      <div className='browsesearchbar' >
        <div className="input-group">
          <div className="form-outline">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" for="form1">Search</label>
          </div>
          <button type="button" className="btn btn-danger">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* For Product Cards */}
      <div>
        <section style={{ backgroundcolor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              {displayComponents()}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default List
