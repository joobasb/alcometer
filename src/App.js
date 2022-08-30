import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  //define variables
  const [bottles, setBottles] = useState()
  const [weight, setWeight] = useState(80)
  const [gender, setGender] = useState('male')
  const [time, setTime] = useState(1)
  const [result, setResult] = useState()

  function calculate(e){
    e.preventDefault()

    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)
    let result2;

    if (gender === "male") {
      result2 = gramsLeft / (weight * 0.7)
      setResult(result2.toFixed(2))
    } else {
      result2 = gramsLeft / (weight * 0.6)
      setResult(result2.toFixed(2))
    } 
    if (result2 < 0 ){
      result2 = 0
      setResult(result2)
    } 
  }


  return (
    <>
    <form onSubmit={calculate}>
      <h1>Alcometer</h1><br/>
      <div>
      <label>Weight </label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Bottles </label>
        <select type="number" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label>Time </label>
        <select type="number" value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <label>Gender </label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div><br/>
        <output> {result}</output>
      </div>
      <br/>
      <button>Calculate</button>
      </form>
    </>


  );
}

export default App;
