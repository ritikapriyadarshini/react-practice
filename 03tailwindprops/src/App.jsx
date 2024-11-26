import './App.css'
import Card from './Card'

function App() {
  // let myObj = {
  //   id: 3,
  //   name: "03tailwindprops"
  // }
  // let myArr= [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className=' bg-green-400 rounded-xl p-4 text-white mb-4'>Tailwind Test</h1>
      <Card userName="Ritika" btntxt="click me" />
      <Card userName= "Kishu" btntxt="visit me"/>
    </>
  )
}

export default App
