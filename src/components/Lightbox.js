import React, { Component } from 'react';

export default class Lightbox extends Component{
    render(){
        if(this.props.isVisible){
            return(
                <div className="lightbox-wrapper" onClick={() => this.props.lightbox("close")}>
                    <div className="lightbox-wrapper-inner" onClick={(e) => e.stopPropagation()}>
                        <h1>{this.props.data.name}</h1>
                    </div>
                </div>
            )
        }else{
            return( null );
        }
    }
}