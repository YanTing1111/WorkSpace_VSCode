import React,{ Component } from "react";
import A from "./A";

class C extends Component{
    render() {
        return (
            <div>
                <p>哈哈哈哈！</p>
            </div>
        )
    }
}

export default A(C);