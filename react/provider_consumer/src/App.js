import React from "react";
import { filmAction } from "./actions";
import { connect } from "react-redux";

// redux 负责任地解决films api问题  用action

class App extends React.Component{
  componentDidMount() {
    this.props.getFilmData();
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.props.films.map((item, index) => {
              return <li key={index}>
                <h2>{item.name}</h2>
                <img src={item.poster} alt={item.name}/>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.films
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmData: () => {
      dispatch((dispatch) => {
        filmAction(dispatch)
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);