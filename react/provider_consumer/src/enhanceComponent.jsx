import React from "react";

var enchanceComponent = (Component) =>
  class Enhance extends React.Component{
    render() {
      return (
        <section>
          <h1>I'm hight-order component</h1>
          <Component {...this.state} {...this.props}/>
        </section>
      )
    }
  }

export default enchanceComponent;