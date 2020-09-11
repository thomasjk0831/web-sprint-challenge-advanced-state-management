import React, {useState} from 'react'
import { connect } from 'react-redux'
import { postSmurfs } from '../action'

const initialValue = {
    name : '',
    age : '',
    height: '',
}

function Form(props){
    const [value, setValue] = useState(initialValue)
    

    const submitHandler = (e) => {
        props.postSmurfs(value)
    }

    const  changeHandler= (e)=>{
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }

    return (
            // <div>
            //     test
            // </div>
            <form onSubmit={submitHandler}>
                <label> Name
                    <input
                      name= "name"
                      type="text"
                      value={value.name}
                      onChange = {changeHandler}>
                    </input> 
                </label>
                
                <label>Age
                <input
                      name= "age"
                      type="text"
                      value={value.age}
                      onChange = {changeHandler}>
                    </input> 
                </label>
                   
                <label>Height
                <input
                      name= "height"
                      type="text"
                      value={value.height}
                      onChange = {changeHandler}>
                    </input> 
                </label>
                   
                <button>Add</button>
            </form>

        

    )
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps, {postSmurfs} )(Form)