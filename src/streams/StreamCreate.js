import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {create_stream_action} from '../actions/actions';

class StreamCreate extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    display_errors = (e)=>{
        if(e.touched == true){
            return e.error
        }
    }
    renderInput=(x)=>{
        const {input, label, meta} = x
        return(
            <div style={{margin:'20px'}}>
                {label}<br />
                <input {...input} autoComplete='off'/>
                <br />
                {this.display_errors(meta)}
            </div>
        )
    }
    onSubmit=(form_data)=>{
        this.props.create_stream_action(form_data)   

        this.props.reset();
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

const mapStateToProps =(state)=>{
    return state
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate,
  })(StreamCreate);
  
  export default connect(null, { create_stream_action })(formWrapped);