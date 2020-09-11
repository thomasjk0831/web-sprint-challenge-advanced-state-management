import React, {useEffect} from "react";
import { connect } from 'react-redux'
import { fetchSmurfs } from '../action'
import Form from './Form'
import "./App.css";

function App(props){
  useEffect(()=>{
    props.fetchSmurfs()
  },[])
  console.log("from app", props.smurfs)
  

  return (
    <div className = "main-container">
      <div className="form">

      <Form />
      </div>

      {
        props.smurfs.map((item)=> {
          return <div className="info">
                   <p>Name:{item.name}</p>
                   <p>Age:{item.age}</p>
                   <p>Height:{item.height}</p>
                  </div>
        })
          
        
      }


    </div>

  )
}

function mapStateToProps(state){
  return {
    smurfs : state.smurfs
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(App);
