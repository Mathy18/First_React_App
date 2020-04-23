import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';




const App = () => {
  return (
    
  <div className  = "ui container comments">
 
    <CommentDetail  author = "sam" TimeAgo ="Today 4.45pm" Comments = "Nice Blog" avatar = {faker.image.avatar()}/>  
    <CommentDetail  author = "sam" TimeAgo ="Today 4.45pm" Comments = "Nice Blog" avatar = {faker.image.avatar()}/>
    <CommentDetail author = "sam" TimeAgo ="Today 4.45pm" Comments = "Nice Blog post" avatar = {faker.image.avatar()}/>
           </div>
    
  );
  };


ReactDOM.render(
     <App/>,
    document.getElementById('root')
);