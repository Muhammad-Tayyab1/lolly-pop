import React from "react"
import Header from "../components/Header"

const NotFound = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4rem",
        }}
      >

        Invalid Page...
      </div>
    </div>
  )
}

export default NotFound
