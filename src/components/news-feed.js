import React from "react";
import replyButton from './reply-button';
import LikeButton from "./Like-button";
import Comment from './comment';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return e('div',
        {class: 'container'},
        e(post, {}, null),
        e(post, {}, null),
        e(Post, {}, null) 
       );
    }
} 