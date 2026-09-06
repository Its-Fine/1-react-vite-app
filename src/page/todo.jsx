import { useState } from "react"
import ButtonToDo from "../components/buttonToDo"
function ToDo() {
    const [list, setlist] = useState([
            {id: 1, title: 'Название 1', text: 'То что внутри', done: false},
            {id: 2, title: 'Название 1', text: 'То что внутри', done: false},
            {id: 3, title: 'Название 1', text: 'То что внутри', done: false}
        ])
    const [filter, setFilter] = useState('all')
    const visibleList = list.filter(item =>
        filter === 'all' ? true :
            filter === 'active' ? !item.done :
                item.done
    )
    function TodoList(){
        return(
            visibleList.map(item => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <div>
                        <p style={item.done ? {textDecoration: "line-through"} : undefined}>
                            {item.title}
                        </p>
                        <p style={item.done ? {textDecoration: "line-through"} : undefined}>
                            {item.text}
                        </p>
                    </div>
                    <input type="checkbox" checked={item.done} onChange={() => setlist(prev => prev.map(
                        el => el.id === item.id
                        ? {...el, done: !el.done}
                        : el
                    ))}/>
                    <ButtonToDo 
                        text={'Удалить'}
                        click={() => {
                            setlist(deleteList => deleteList.filter(n => n.id !== item.id))
                        }  
                        }
                    />
                </div>
            ))
        )
    }
    function TodoCreate(){
        const [titleInput, setTitleInput] = useState('')
        const [textInput, setTextInput] = useState('')
        const [nextId, setNextId] = useState(list.length ? list[list.length - 1].id + 1: 1)
        return(
            <>
                <input type="text" value={titleInput} onChange={event => setTitleInput(event.target.value)}/>
                <input type="text" value={textInput} onChange={event => setTextInput(event.target.value)}/>
                <ButtonToDo
                    text={'Создать'}
                    click={() => {
                        if(!titleInput || !textInput) {return}
                            setlist(listCreate => [...listCreate, {id: nextId, title: titleInput, text: textInput, done: false}])
                            setNextId(nextId + 1) 
                    }}    
                />
            </>
        )
    }
    function ToDoFilter(){
        return(
            <>
                <ButtonToDo text={'все'} click={() => {setFilter('all')}}/>
                <ButtonToDo text={'не выполненные'} click={() => {setFilter('active')}}/>
                <ButtonToDo text={'выполненные'} click={() => {setFilter('done')}}/>
            </>
        )
    }


    return(
        <>
        <TodoList />
        <TodoCreate />
        <ToDoFilter />
        </>
    )
}

export default ToDo