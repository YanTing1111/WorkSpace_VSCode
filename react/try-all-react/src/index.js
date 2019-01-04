import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class HelloUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "abcd"
        }
        // setTimeout(() => {
        //     this.setState({
        //         username: "efg"
        //     })
        // },5000)

        // this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                Hello {this.state.username}!
                <input type="text" value={this.state.username} onChange={(e) => {this.handleChange(e)}}/>
            </div>
        )

        // return React.createElement(
        //     "div",null,"Hello World!"
        // )
    }
    handleChange(e) {
        this.setState({
            username: e.target.value
        })
        console.log(this);
    }
}

ReactDOM.render(<HelloUser />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
