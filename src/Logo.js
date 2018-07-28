import React, { Component } from 'react';

export default class Logo extends Component{
render(){
  return (
        <div className="logo">
	   <span>{this.props.name}{this.props.id}</span>
	    </div>
    )


  }
}
