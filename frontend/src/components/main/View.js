import React, { startTransition, useEffect, useState } from "react"
// import { Button } from "@mui/material"
import JsxParser from "react-jsx-parser"
import { useParams } from "react-router-dom"
import app_config from "./config"
const View = () => {
  // copy code button end

  const { id } = useParams()
  const url = app_config.api_url

  const [compData, setCompData] = useState(null)
  const [loading, setLoading] = useState(false)

  const getDataById = () => {
    setLoading(true)
    fetch(url + "/component/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setLoading(false)
        setCompData(data)
      })
  }

  useEffect(() => {
    getDataById()
  }, [])

  const displayComponent = () => {
    if (!loading && compData) {
      return (
        <div>
          <h1>{compData.title}</h1>
          ;'{/* <h3>By {compData.user.name</h3> */}
          <div className="card">
            <div className="card-body">
              <JsxParser jsx={compData.code} />
              <br />

              <br />
              <br />
            </div>

            <div></div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="card" style={{backgroundColor: "#FFABAB"}}>
    <div className="viewer">
      {displayComponent()}
      <br />
      <div className="descriptiondiv p-4 bg-light">
        <h2 style={{ color: "#D61355" }}>Description:</h2>
        <h6 className="text-black" style={{ fontFamily: "monospace"  }}>
          {compData ? compData.description : ""}
        </h6>
      </div>
      <br />

      {/* <input type="text" value="Hello World" id="myInput"/> */}
      {/* <Button  variant="contained" type="submit" color='primary' sx={{mt:5}}  >Share Code</Button> */}
      <br />
      <br />
      <div className="p-4">
        <h2 style={{ color: "#D61355"  }}>Code:</h2>
        <h6 className="text-black" style={{ fontFamily: "monospace" }}>
          {compData ? compData.code : ""}
        </h6>
      </div>
      <button
        className=" btn btn-danger my-3 mx-2"
        style={{ color: "white" }}
        onClick={() => {
          navigator.clipboard.writeText(compData.code)
        }}>
        Copy Code
      </button>
    </div>
    </div>
  )
}

export default View
