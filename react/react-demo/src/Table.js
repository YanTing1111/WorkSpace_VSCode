import React,{ Component } from "react";

class Table extends Component {
    render () {
        return (
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>CC</td>
                    <td>工程师</td>
                </tr>
                <tr>
                    <td>DD</td>
                    <td>前端工程师</td>
                </tr>
            </tbody>
            </table>
        )
    } 
}

export default Table;