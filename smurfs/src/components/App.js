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
    <div>
      {
        props.smurfs.map((item)=> {
          return <p>{item.name}</p>
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
