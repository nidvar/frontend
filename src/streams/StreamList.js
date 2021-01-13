import React from 'react';
import {connect} from 'react-redux';
import {get_all_streams} from '../actions/actions'

class StreamList extends React.Component{
    componentDidMount(){
        console.log('mounting')
        console.log(this.props)
        this.props.get_all_streams();
    }
    display_list = ()=>{
        return this.props.streams_list.map(a=>{
            return (
                <div key={Math.random()}>
                    <h3>{a.title}</h3>
                    <p>{a.description}</p>
                </div>
            )
        })
    }
    render(){
        return (
            <div>
                {this.display_list()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {streams_list: Object.values(state.streamReducer)}
}

export default connect(mapStateToProps, {get_all_streams:get_all_streams})(StreamList)