import React, { Component } from "react";
import Results from "./Results";
import Search from "./Search";

class Beers extends Component{
    componentDidMount() {
        this.loadBeers();
    }
    componentDidUpdate(prevProps) {
        const currentSearchTerm = this.props.match.params.searchTerm;
        const oldSearchTerm = prevProps.match.params.searchTerm;
        if(currentSearchTerm !== oldSearchTerm) {
            this.loadBeers(currentSearchTerm);
        }
    }
    state = {
        beers: [],
        loading: true
    }
    loadBeers = (searchTerm = "hops") => {
        this.setState({
            loading: true
        })
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
        .then(data => data.json())
        .then(data => {
            // console.log(data);
            const beers = data.data || [];
            this.setState({
                beers: beers,
                loading: false
            })
        })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div className="wrapper">
                <Search />
                <Results 
                    beers={this.state.beers} 
                    loading={this.state.loading} />
            </div>
        )
    }
}

export default Beers;