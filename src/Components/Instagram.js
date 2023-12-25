import React from 'react'
import './Instagram.css'
function Instagram({icon}) {
  return (
    <div className="light-button">
      <button className="bt">
        <div className="light-holder">
          <div className="dot"></div>
          <div className="light"></div>
        </div>
        <div className="button-holder bg-white" style={{}}>
          <img style={{ width: 30, height: 30 }}
            src={require(`../Assets/${icon}.png`)} alt="" />
        </div>
      </button>
    </div>
  )
}

export default Instagram