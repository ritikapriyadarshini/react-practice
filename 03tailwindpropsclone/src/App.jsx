import './App.css'
import Card2 from './components/Card2'
import Card3 from './components/Card3'

function App() {

  let myObj= {
    user: "reactagain",
    arr:["Michelle Shelly","Kristina Roberta","James Paul","Mike Ross"] 
  }
  return (
    <>
      <h1>React Again</h1>
      <br /><br />
      <h2 className='text-white bg-blue-950 mb-4 font-medium p-4'>Tailwind CSS</h2>
      <br />

      <Card3 year="2023"/>
      <Card3 year="2024"/>
      <Card2 name={myObj.arr}/>
    </>
  )
}
export default App

