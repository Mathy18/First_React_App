import React from 'react';

const ApprovalCard = (props) => {
console.log(props.children);
return (

  <div class = "ui card">
    <div class = "content"> {props.children} 
  
      <div class = "extracontent">
        <div class = "ui two buttons">

           <div class = "first button">Approved</div>
            <div class = "second button">Rejected</div>
        </div>
      </div>
    </div> 
    
  </div>
);


};

export default ApprovalCard;