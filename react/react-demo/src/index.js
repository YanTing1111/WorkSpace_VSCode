import React,{ Component } from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Table from "./Table"

const heading = <h1 className="site-heading">Hello,React!</h1>;
const boding = <input type="text" className="site-boding"/>

const Tab = () => {
    return (
        <div>
            <button>点击</button>
        </div>
    )
}

class App extends Component {
    // jsx最终还是要编译成js
    render() {
        return (
            <div className="App container">
                <h1>Hello React!</h1>
                <Table />
                {heading}
                {boding}
                {Tab}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));