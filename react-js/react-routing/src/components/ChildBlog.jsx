import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { handelParams } from '../hoc/params.hoc';

class ChildBlog extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div>ChildBlog {this.props.params_id}</div>;
    }
}

export default handelParams(ChildBlog);