import React, {useEffect} from "react";
import { connect } from 'react-redux'
import { fetchSmurfs } from '../action'
import Form from './Form'
import "./App.css";

function App(props){
  useEffect(()=>{
    props.fetchSmurfs()
  },[])
  const [ temp ] = props.smurfs
  console.log("from app", temp)
  props.smurfs.forEach(element => {
    element.forEach((item)=>{
      console.log("from foreach", item.name)
    })
  });

  return (
    <div>
      {
        props.smurfs.map(element => {
         return element.map(smurf=>{
            return (<div> 
              <p>name: {smurf.name} </p>
              <p>age: {smurf.age}</p>
              <p>height: {smurf.height}</p>
              
              </div>)
          })
        })
          
        
      }

      <Form />

    </div>

  )
}

function mapStateToProps(state){
  return {
    smurfs : state.smurfs
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
