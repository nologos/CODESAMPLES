import React from 'react'
// rafce
import PropTypes from 'prop-types'
import Button from './FourButton'

const Header = ({title, button1}) => {
  return (
  <div className="container">
      <header style={hcontainer} >
          <h1 style={{color:"red"}}>
              {title}
              <Button four={button1}/>
          </h1>
          <p style={headingStyle}>styled header component</p>
      </header>
  </div>
  )
}

Header.defaultProps = {
  title: "default title from header.js"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const headingStyle = {
  padding: "0px 50px 0px 50px",
  backgroundColor: "steelblue",
  fontSize: "1rem",
  fontWeight: "bold"
}

const hcontainer = {
  margin: "1em",
  border: "1px solid black",
  backgroundColor: "lightblue",
}

export default Header

