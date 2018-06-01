import React from "react";

const List = (props) => {
    const listData = props.listItems.map((el, i) => (
        <li key={i} onClick={() => props.onItemClick(i)} style={
            el.done
                ? { textDecoration: 'line-through', fontSize: '20px' }
                : { textDecoration: 'none', fontSize: '20px' }
        }><h2>{el.item}</h2>
            <button className="btn btn-danger pull-right" onClick={($event) => props.onItemDelete($event,i)}>x</button>
        </li>
    ));
    return (
        <div>
            <ul>
                {
                    listData
                }
            </ul>
        </div>
    )
};

export default List;