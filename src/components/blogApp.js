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
    render() {
        return (
            <div>
                <header/>
            </div>
        )
    };
}
export default TodoApp;