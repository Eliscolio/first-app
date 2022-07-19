import React from "react";


export class LikeButton extends React.Component {
    render() {
         return React.createElement('button',{class: 'btn btn-primary'}, 'like')
    }
}