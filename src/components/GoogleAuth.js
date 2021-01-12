import React from 'react';
import {signInAction, signOutAction} from '../actions/actions';
import {connect} from 'react-redux';

class GoogleAuth extends React.Component{
    componentDidMount(){
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
            this.props.signInAction(this.authobject.currentUser.get().getId());
        }else{
            this.props.signOutAction();
        }
    }
    signInFunction=()=>{
        this.authobject.signIn()
    }

    signOutFunction=()=>{
        this.authobject.signOut()
    }
    display=()=>{
        if(this.props.signed_in == null || this.props.signed_in == false){
            return (<button onClick={this.signInFunction}>SIGN IN</button>)
        }else if(this.props.signed_in == true){
            return (<button onClick={this.signOutFunction}>SIGN OUT</button>)
        }
    }
    render(){
        return (
            <div>
                <br />
                {this.display()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {signed_in: state.authReducer.signed_in}
}

export default connect(mapStateToProps, {signInAction, signOutAction})(GoogleAuth)