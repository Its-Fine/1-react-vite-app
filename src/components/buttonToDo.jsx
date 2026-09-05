function ButtonToDo({ text, click}) {
    return(
        <button onClick={click}>
            <p>{text}</p>
        </button>
    )
   
}
export default ButtonToDo