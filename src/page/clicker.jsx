import MyButton1 from "../components/button";
import { useState } from "react";
import './clicker.css'
function ClickerPage(){
    const [counters, setCounters] = useState([
        {id: 1, value: 0, plus: 1},
        {id: 2, value: 0, plus: 2},
        {id: 3, value: 0, plus: 3},
        {id: 4, value: 0, plus: 4},
        {id: 5, value: 0, plus: 5},
        {id: 6, value: 0, plus: 6},
    ])
    function updateCounter(id, fn){
        setCounters(prev => prev.map(el => el.id === id ?{ ...el, value: fn(el.value)} : el))
    }
    
    
    function ListButton(){
        return counters.map(item =>(
            <div className="block-item" key={item.id}>
                <div className="block-item-container">
                    <p className="text-p">{item.value}</p>
                </div>
                <MyButton1
                    click={() => (updateCounter(item.id, v => v + item.plus)
                    )}
                    title={'клик'}
                    />
                <MyButton1
                    click={() => (updateCounter(item.id, () => 0))}
                    title={'сброс'}
                />
                <MyButton1
                    click={() => (
                        setCounters(deleted => deleted.filter(
                            deletedButton => deletedButton.id !== item.id
                        ))
                    )}
                    title={'удалить'}
                />
                
            </div>
        ))
    }
    function CreateButton(){
        const [val, setVal] = useState(0)
        const [plus, setPlus] = useState()
        return(
            <div className="create_box">
                <div className="create-input">
                    <input className="inputCreate" type="number" value={val} onChange={e => setVal(+e.target.value)}/>
                    <input className="inputCreate" type="number" value={plus} onChange={e => setPlus(+e.target.value)}/>
                </div>
                <MyButton1
                    click={() => (
                        setCounters(
                            create => !plus
                                ? create
                                : [...create, {id: Date.now(), value: val, plus}]
                                
                            )
                        )}
                    title={'Создать'}
                    variant="create"
                />
            </div>
        )
    }
    return(
        <div className="block">
            <ListButton />
            <CreateButton />
        </div>
    )
}
export default ClickerPage
