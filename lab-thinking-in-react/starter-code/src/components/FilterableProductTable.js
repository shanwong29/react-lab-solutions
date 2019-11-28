import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  state = {
    searchInput: "",
    checked: false
  };

  onSearchChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { searchInput, checked } = this.state;

    const filtered = this.props.products.filter(product => {
      if (checked) {
        return (
          product.name.toLowerCase().includes(searchInput.toLowerCase()) &&
          product.stocked === true
        );
      } else {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      }
    });

    return (
      <React.Fragment>
        <h2>IronStore</h2>
        <SearchBar
          checked={checked}
          searchInput={searchInput}
          onSearchChange={this.onSearchChange}
        />
        <ProductTable products={filtered} />
      </React.Fragment>
    );
  }
}

export default FilterableProductTable;
