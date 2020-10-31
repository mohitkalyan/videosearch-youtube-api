import "./search.css"
import React from "react";

class Search extends React.Component {

    state = {search : ""}

    onSearchSubmit = (e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.search);
    }

    onSearchChange = (e)=>{
        this.setState({search : e.target.value})
    }

  render() {
    return (
      <div className="center top bottom">
        <form onSubmit={this.onSearchSubmit} >
        <div className="ui action input">
          <input value={this.state.search} type="text" onChange={this.onSearchChange} placeholder="Search..." />
          <button class="ui button">Search</button>
        </div>
        </form>
      </div>
    );
  }
}

export default Search;
