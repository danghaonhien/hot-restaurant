import React from "react";
import ListReply from "./../ListReply";
import ReplyModel from "./../ReplyModel";
const ListComments = (props) => {
  return (
    <ul className='list-group'>
      {props.items.map((item) => {
        return (
          <div key={item.id}>
            <hr></hr>
            <li className='list-group-item bg-success rounded'>{item.comments}</li>
            <ListReply reply={props.reply} comment_id={item.id} />
            <ReplyModel
              renderParent={props.renderParent}
              comment_id={item.id}
              handleInputChange={props.handleInputChange}
              handleReply={props.handleReply} />
          </div>
        )
      })}
    </ul>
  );
};
export default ListComments;
