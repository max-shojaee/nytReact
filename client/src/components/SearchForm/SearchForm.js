import React from 'react';
import './SearchForm.css';

const SearchForm = props => (
  <div className="searchForm">
    <form className="search">
      <div className="form-group">
        <label>I would like to find articles about</label>
        <input
          value={props.value1}
          onChange={props.handleInputChange}
          name="topic"
          type="text"
          className="form-control"
          id="topic"
          placeholder="topic"
        />
      </div>
      <div className="form-group">
        <label>published between</label>
        <input
          value={props.value2}
          onChange={props.handleInputChange}
          name="syear"
          type="text"
          className="form-control"
          id="syear"
          placeholder="starting year"
        />
        <label>and</label>
        <input
          value={props.value3}
          onChange={props.handleInputChange}
          name="eyear"
          type="text"
          className="form-control"
          id="eyear"
          placeholder="ending year"
        />
      </div>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="button"
      >
        Search
      </button>

    </form>
  </div>
);

export default SearchForm;
