import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import BlogApp from "./components/blogApp";
class App extends React.Component {
    render() {
        return (
            <Router>
                <BlogApp />
            </Router>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
