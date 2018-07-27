import React from "react";
import List from "./list";
import Input from "./input";
import {articleApi} from "../api/index.js";

class TodoApp extends React.Component {
    componentWillMount() {
        this.setState({
            list: [
                {
                    item: "thing1",
                    done: false
                }, {
                    item: "thing2",
                    done: false
                }, {
                    item: "thing3",
                    done: false
                }
            ],
            newTodo: 'test'
        });
        articleApi.getFrontArticleList().then((res)=>{
            console.log(res);
        })
    };
    onInputChange = (event) => {
        this.setState({newTodo: event.target.value})
    };
    onInputSubmit = (event) => {
        this.setState((previous) => ({
            list: [
                ...previous.list, {
                    item: previous.newTodo,
                    done: false
                }
            ],
            newTodo: ''
        }))
    };
    onListItemClick = (i) => {
        let preList = [...this.state.list];
        preList[i].done = !preList[i].done;
        this.setState({list: preList});
    };
    onListItemDelete = (event, i) => {
        event.stopPropagation();
        let preList = [...this.state.list];
        preList.splice(i, 1);
        this.setState({list: preList});
    };
    render() {
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>App</h1>
                            <hr/>
                            <List
                                listItems={this.state.list}
                                onItemClick={this.onListItemClick}
                                onItemDelete={this.onListItemDelete}/>
                            <Input
                                onChange={this.onInputChange}
                                value={this.state.newTodo}
                                onSubmit={this.onInputSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default TodoApp;