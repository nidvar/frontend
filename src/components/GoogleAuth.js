import React from 'react';
import {signInAction, signOutAction} from '../actions/actions';
import {connect} from 'react-redux';

class GoogleAuth extends React.Component{
    componentDidMount(){
        console.log(this.props)

        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'331056152399-qqsmteadnmpvcq6l3ope92unp9relbff.apps.googleusercontent.com',
                scope:'email'
            }).then(a=>{
                this.authobject = window.gapi.auth2.getAuthInstance()
                this.loginChange()
                this.authobject.isSignedIn.listen(this.loginChange)
            })
        })
    }
    loginChange=()=>{
        if(this.authobject.isSignedIn.get()){
            this.props.signInAction();
        }else{
            this.props.signOutAction();
        }
    }
    signInFunction=()=>{
        this.authobject.signIn(this.authobject.currentUser.get().getId())
    }

    signOutFunction=()=>{
        this.authobject.signOut()
    }
    display=()=>{
        if(this.props.signed_in == null || this.props.signed_in == false){
            return (<button onClick={this.signInFunction}>SIGN IN</button>)
        }else if(this.props.signed_in == true){
            return (<button onClick={this.signInFunction}>SIGN OUT</button>)
        }
    }
    render(){
        return (
            <div>
                {console.log(this.state)}
                <br />
                {this.display()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {signed_in: state.authReducer.signed_in}
}

export default connect(mapStateToProps, {signInAction, signOutAction})(GoogleAuth)