import React from 'react';
import {Field, reduxForm} from 'redux-form'

class StreamCreate extends React.Component{

    display_errors = (e)=>{
        if(e.touched == true){
            return e.error
        }
    }

    renderInput=({input, label, meta})=>{
        console.log(meta)
        return(
            <div style={{margin:'20px'}}>
                {label}<br />
                <input {...input} autoComplete='off' />
                <br />
                {this.display_errors(meta)}
            </div>
        )
    }
    onSubmit=(e)=>{
        console.log(e)
    }
    render(){
        return (
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Field name="title" component={this.renderInput} label='Enter title: ' />
                    <Field name='description' component={this.renderInput} label='Enter description: ' />
                    <button>SUBMIT</button>
                </form>
        )
    }
}

const validate = (formValues)=>{
    const error = {}

    if(!formValues.title){
        error.title='failed to read title'
    }
    if(!formValues.description){
        error.description='failed to read description'
    }

    return error
}

export default reduxForm({form: 'StreamCreate', validate})(StreamCreate)