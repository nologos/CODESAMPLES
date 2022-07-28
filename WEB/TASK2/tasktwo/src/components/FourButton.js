import React from 'react'

// get a random color from the list of colors
const getRandomColor = () => {
    const colors = ['cyan', 'magenta', 'yellow', 'green', 'red', 'blue', 'orange', 'purple', 'pink', 'brow', 'grey', 'brown', 'indigo', 'teal', 'lime', 'lavender', 'maroon', 'navy', 'olive', 'puce', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink', 'purple', 'salmon', 'silver', 'tan', 'turquoise', 'violet', 'beige', 'coral', 'gold', 'khaki', 'maroon', 'mauve', 'olive', 'orange', 'pink']
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const getButtonStyle = (color) => {
    // if color is light, use white text, else use black text
    const colortest = isLight(color)
    // if true return btn-light, else return btn-dark
    console.log(colortest + " if true will be white")
    return colortest ? 'btn-dark' : 'btn-light'
}

const convertToRGB = (color) => {
    const colors = {
        'cyan': '0,255,255',
        'magenta': '255,0,255',
        'yellow': '255,255,0',
        'green': '0,255,0',
        'red': '255,0,0',
        'blue': '0,0,255',
        'orange': '255,165,0',
        'purple': '128,0,128',
        'pink': '255,192,203',
        'brow': '222,184,135',
        'grey': '128,128,128',
        'brown': '165,42,42',
        'indigo': '75,0,130',
        'teal': '0,128,128',
        'lime': '0,255,0',
        'lavender': '230,230,250',
        'maroon': '128,0,0',
        'navy': '0,0,128',
        'olive': '128,128,0',
        'puce': '204,102,102',
        'salmon': '250,128,114',
        'silver': '192,192,192',
        'tan': '210,180,140',
        'beige': '245,245,220',
        'coral': '255,127,80',
        'gold': '255,215,0',
        'khaki': '240,230,140',
        'mauve': '224,176,255',
        'turquoise': '64,224,208',
        'violet': '238,130,238',
    }
    return colors[color]
}

function invertColor(rgbcolor) {
// split the color into rgb components
    const rgb = rgbcolor.split(',')
    const r = parseInt(rgb[0])
    const g = parseInt(rgb[1])
    const b = parseInt(rgb[2])
    
    // subtract each from 255 individually to get the inverse
    const ir = 255 - r
    const ig = 255 - g
    const ib = 255 - b

     // convert to double digit hex add 0s if necessary
    const rHex = ir.toString(16).length === 1 ? `0${ir.toString(16)}` : ir.toString(16)
    const gHex = ig.toString(16).length === 1 ? `0${ig.toString(16)}` : ig.toString(16)
    const bHex = ib.toString(16).length === 1 ? `0${ib.toString(16)}` : ib.toString(16)
    // return the hex color
    return `#${rHex}${gHex}${bHex}`
  
}

// test if color light or dark
const isLight = (color) => {
    const rgb = convertToRGB(color)
    const rgbArray = rgb.split(',')
    const r = parseInt(rgbArray[0])
    const g = parseInt(rgbArray[1])
    const b = parseInt(rgbArray[2])
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 125
}





const color = getRandomColor()
const buttonclass = getButtonStyle(color)
console.log(color)
const rgbcolor = convertToRGB(color)
console.log(rgbcolor)
const oppositecolor = invertColor(rgbcolor)
console.log(oppositecolor)



const button = ({one,two,three,four}) => {
  return (
    <div className="" style={{backgroundColor:color}}>
        <div className='container'>
            <div className="row d-flex justify-content-center g-4 mt-5">
                <a type="button" className={`btn ${buttonclass} col-sm-5 col-md-5 m-1`} style={btnstyle} href="#1"><i className="bi bi-apple"></i> {one} </a>
                <a type="button" className={`btn ${buttonclass} col-sm-5 col-md-5 m-1`} style={btnstyle} href="#1"><i className="bi bi-apple"></i> {two} </a>
                <a type="button" className={`btn ${buttonclass} col-sm-5 col-md-5 m-1`} style={btnstyle} href="#1"><i className="bi bi-apple"></i> {three} </a>
                <a type="button" className={`btn ${buttonclass} col-sm-5 col-md-5 m-1`} style={btnstyle} href="#1"><i className="bi bi-apple"></i> {four} </a>
            </div>
        </div>
    </div>
  )
}

const btnstyle = {
    backgroundColor: oppositecolor,
    borderColor: oppositecolor,
}


// default values for props
button.defaultProps = {
    one:"1",
    two:"2",
    three:"3",
    four:"4",
}

export default button

