import React from "react";

const Input = ({onChange,value,onSubmit}) => {
    return (
        <div className="form-group">
            <label htmlFor="listInput">
                Email address
                </label>
            <input
                type="text"
                value={value}
                className="form-control"
                id="listItemInput"
                placeholder="Add new todo"
                onChange={onChange} />
            <button className="btn btn-primary" onClick={onSubmit}>
                Add Item
                </button>
        </div>
    )
};

export default Input;