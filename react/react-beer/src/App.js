import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header siteName="Beer me!"/>
                <Search />
                <Result />
            </div>
        )
    }
}

export default App;