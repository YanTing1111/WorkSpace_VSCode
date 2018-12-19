import React, { Component } from "react";

// function A(WrappedComponent) {
//     return () => (
//         <div>
//             <p>something enhanced</p>
//             <WrappedComponent />
//         </div>
//     )
// }

function A(WrappedComponent) {
    return class Text extends Component {
        render () {
            return (
                <div>
                    <p>something enhanced</p>
                    <WrappedComponent />
                </div>
            )
        }
    }
}

export default A;