import { useState } from 'react'
import image from './assets/image.jpg'
import ListRender from './components/list'
import MyButton1 from './components/button'
import './App.css'

// создание кнопки через функцию как компонента
function MyButton(){
  return(
    <button>я кнопка?</button>
  )
}


// нельзя выводить несколько блоков
function TwoComponents(){
  return(
    <>
    <p>abracadabra</p>
    <p className='TwoP'>aaaaaaaa <br /> aaa</p>
    </>
  )
}

// вывод из юзера возраст
const user = {
  name: 'Peter',
  adress: 'fsfspfopfk',
  age: 15,
  imgPath: image


}
function ProstoZagolovok(){
  return (
    <>
    <h1>
      {user.name}
    </h1>
    <img src={user.imgPath} alt={user.name} />
    </>
  )
}
let x = <MyButton/ >;


function App() {
  

  return (
    <>
    <div>я начал реакт</div>
      <MyButton/ >
      <MyButton/ >
      <MyButton/ >
      <MyButton/ >
      <TwoComponents/ >
      <ProstoZagolovok/ >
      {x}
      <ListRender/ >
      <MyButton1 plus={10} />
      <MyButton1 plus={5} />
    </>
  )
}

export default App
