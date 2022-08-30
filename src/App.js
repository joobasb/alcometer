import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  //define varialbes
  const [bottles, setBottles] = useState(0)
  const [litres, setLitres] = useState(0)
  const [grams, setGrams] = useState(0)
  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState(0)
  const [burning, setBurning] = useState(0)
  const [time, setTime] = useState(0)
  const [result, setResult] = useState(0)

  function calculate(e){
    e.preventDefault()
  }

  return (
    <>
    <form>
      <h1>Alcometer</h1><br/>
      <div>
      <label>Weight </label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Bottles </label>
        <input type="number" value={bottles} onChange={e => setBottles(e.target.value)} />
      </div>
      <div>
        <label>Time </label>
        <input type="number" value={time} onChange={e => setTime(e.target.value)} />
      </div>
      <div>
        <label>Gender </label>
        <input type="radio" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div><br/>
        <output>{result}</output>
      </div>
      <br/>
      <button>Calculate</button>
      </form>
    </>


  );
}

export default App;
