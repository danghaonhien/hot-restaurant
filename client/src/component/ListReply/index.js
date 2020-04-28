import React from 'react';

const ListReply = (props) => {
    return (
        <ul className="list-group">
            {props.reply.map((item) => {
                if (item.comment_id === props.comment_id) {
                    return (
                        <div key={item.id}>
                            <li className="list-group-item">{item.reply}</li>
                        </div>
                    )
                }
            })}
        </ul>
    );
};
export default ListReply;