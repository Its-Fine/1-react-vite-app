import { useState } from "react";
import ButtonToDo from "../components/buttonToDo";

function Culculator(){
    const [list, setList] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'])
    const [operator, setOperator] = useState([
        '-', '+', '*', '/'
    ])
    const [current, setCurrent] = useState("")
    const [prev, setPrev] = useState("")
    const [currentOperator, setCurrentOperator] = useState("")
    const [display, setDisplay] = useState("")
    function CulculatorList() {
        return(list.map(item => (item === '.'
                ?<ButtonToDo key={item} text={item} click={() => {
                    setCurrent(c => c === ""
                        ? '0.'
                        : c.includes('.') ? c : c + '.')
                }}/>
                :<ButtonToDo key={item} text={item} click={() => {
                    setCurrent(c => c + item)
                }}/>
        ))
    )}
    function CulculatorOperaor() {
        return(operator.map(item => (
                <ButtonToDo key={item} text={item} click={() => handleOperator(item)}/>
        ))
        )
    }
    function handleEquel(){
        const result = compute(Number(prev), currentOperator, Number(current))
        setDisplay(result)
        setCurrent(result.toString())
        setPrev("")
        setCurrentOperator("")
    }
    function handleOperator(op){
        if (current !== "" && prev !==""){
            const r = compute(Number(prev), currentOperator, Number(current))
            setPrev(r.toString())
        }
        else
            setPrev(current)
        setCurrent("")
        setCurrentOperator(op)
    }
    
    function compute(a, op, b){
        if (op === '-') return a - b
        if (op === '+') return a + b
        if (op === '*') return a * b
        if (op === '/') return a / b

    }
    function clear (){
        setCurrent("")
        setPrev("")
        setCurrentOperator("")
        setDisplay("")
    }
    function clearLast (){
        setCurrent(c => c.length > 1 ? c.slice(0, -1) : "")
    }




    return(
        <>
        <CulculatorList />
        <CulculatorOperaor />
        <p>первое число {current}</p>        
        <p>оператор {currentOperator}</p>
        <p>второе число {prev}</p>
        <ButtonToDo text={"="} click={handleEquel}/>
        <ButtonToDo text={"C"} click={clear}/>
        <ButtonToDo text={"⌫"} click={clearLast}/>
        <p>ответ {display}</p>
        </>
    )
}
export default Culculator