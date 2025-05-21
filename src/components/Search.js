import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const term = e.target.value;
    this.setState({ searchTerm: term });
    this.props.onSearch(term);
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          value={this.state.searchTerm}
          onChange={this.handleSearch}
          className="search-input"
        />
      </div>
    );
  }
}

export default Search;