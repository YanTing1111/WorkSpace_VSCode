import React from "react";
import LoadingImg from "./loading.gif";
import "./loading.styl";

class Loading extends React.Component{
  render() {
    const displayStyle = this.props.show === true ? 
    {display: ""} : {display: "none"}
    return (
      <div className="loading-container" style={displayStyle}>
        <div className="load-wrapper">
          <img src={LoadingImg} width="18px" height="18px" alt=""/>
          <div className="loading-title">
            {this.props.title}
          </div>
        </div>
      </div>
    )
  }
}

export default Loading;