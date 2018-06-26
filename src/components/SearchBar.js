import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state= {
      searchTerm: ''
    }
  }

  render() {
    return(
      <div>SearchBar</div>
    )
  }
}

export default SearchBar;
