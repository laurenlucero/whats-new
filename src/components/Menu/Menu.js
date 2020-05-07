import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Menu.css'

class Menu extends Component {
    constructor({filterTopics}) {
        super({filterTopics})
    }

    handleClick = (e) => {
        console.log(e.target);
        const {value} = e.target
        this.props.filterTopics(value)
    }

    render() {
    return (
        <nav className='menu'>
            <button value='local' className='nav-button' onClick={this.handleClick}>Local News</button>
            <button value='technology' className='nav-button' onClick={this.handleClick}>Technology</button>
            <button value='entertainment' className='nav-button' onClick={this.handleClick}>Entertainment</button>
            <button value='science' className='nav-button' onClick={this.handleClick}>Science</button>
            <button value='health' className='nav-button' onClick={this.handleClick}>Health</button>
        </nav>
    )
    }
}

Menu.propTypes = {
  filterNews: PropTypes.func,
  topicTitle: PropTypes.string
};

export default Menu;