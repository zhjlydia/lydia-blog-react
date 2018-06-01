import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/todoApp";
class App extends React.Component{
    render(){
        return(
            <TodoApp>
                Hello
            </TodoApp>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById("app"));
