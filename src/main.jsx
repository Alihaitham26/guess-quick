import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

fetch("./questions.json").then((res)=>res.json()).then((res)=>{
  ReactDOM.createRoot(document.getElementById('root')).render(<App questions={res}/>)
})
