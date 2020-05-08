import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: '',
        }
    }

handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
}

handleSearch = e => {
    e.preventDefault()
    this.props.searchNews(this.state.searchInput.toLowerCase())
    this.clearInput()
}

clearInput = () => {
    this.setState({searchInput: ''})
}

render() {
    return (
        <form>
        <label for="search-input" >
        Find articles by title or topic: 
            </label>
            <input
                id='search-input'
                type='text'
                placeholder='Search here'
                name='searchInput'
                value={this.state.search}
                onChange={e => this.handleChange(e)}
            />
            <button className='search-btn' onClick={e => this.handleSearch(e)}>Search</button>
        </form>
    )
}
}

SearchForm.propTypes = {
    searchNews: PropTypes.func
}

export default SearchForm;