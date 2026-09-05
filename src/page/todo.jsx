import { useState } from "react"
import ButtonToDo from "../components/buttonToDo"
function ToDo() {
    const [list, setlist] = useState([
            {id: 1, title: 'Название 1', text: 'То что внутри'},
            {id: 2, title: 'Название 1', text: 'То что внутри'},
            {id: 3, title: 'Название 1', text: 'То что внутри'}
        ])
    function TodoList(){
        return(
            list.map(item => (
                <div key={item.id}>
                    <p>{item.id}</p>
                    <div>
                        <p>{item.title}</p>
                        <p>{item.text}</p>
                    </div>
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
                        if(!titleInput || !textInput) return
                            setlist(listCreate => [...listCreate, {id: nextId, title: titleInput, text: textInput}])
                            setNextId(nextId + 1) 
                    }}    
                />
            </>
        )
    }


    return(
        <>
        <TodoList />
        <TodoCreate />
        </>
    )
}

export default ToDo