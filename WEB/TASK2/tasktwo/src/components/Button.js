import React from 'react'

// get a random color from the list of colors
const getRandomColor = () => {
    const colors = ['cyan', 'magenta', 'yellow', 'green', 'red', 'blue', 'orange', 'purple', 'pink', 'brow', 'grey', 'brown', 'indigo', 'teal', 'lime', 'lavender', 'maroon', 'navy', 'olive', 'puce', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink']
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}
const getButtonStyle = () => {
    const colors = ['btn-light', 'btn-dark']
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const color = getRandomColor()
const btncolor = getRandomColor()
const buttonclass = getButtonStyle()



const button = ({one,two,three,four}) => {
  return (


    <div className="" style={{backgroundColor:color}}>
        <div className='container'>
            <div className="row d-flex justify-content-center g-4 mt-5">
                <a type="button" className={`btn ${buttonclass} col-sm-5 col-md-5 m-1`} style={btnstyle} ><i className="bi bi-apple"></i> {one} </a>
                <a type="button" className={`btn ${buttonclass} col-sm-5 col-md-5 m-1`} style={btnstyle}><i className="bi bi-apple"></i> {two} </a>
                <a type="button" className={`btn ${buttonclass} col-sm-5 col-md-5 m-1`} style={btnstyle}><i className="bi bi-apple"></i> {three} </a>
                <a type="button" className={`btn ${buttonclass} col-sm-5 col-md-5 m-1`} style={btnstyle}><i className="bi bi-apple"></i> {four} </a>
            </div>
        </div>
    </div>
  )
}

const btnstyle = {
    backgroundColor: btncolor,
    borderColor: btncolor,
}


// default values for props
button.defaultProps = {
    one:"1",
    two:"2",
    three:"3",
    four:"4",
}

export default button

