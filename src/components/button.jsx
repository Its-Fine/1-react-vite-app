import { useState } from "react"
import './button.css'
function MyButton1({ click, title, variant }){
    
    return(
        <button className={"button1" + (variant ? " " + variant : "")} onClick={click}>
            <p className="button1-p">{title}</p>
        </button>
    )   
}
export default MyButton1
