import React, { Component } from 'react';
import Cardlist from '../Components/Card-list/Card-list.component.jsx';
import SearchBox from '../Components/Searchbox/searchBox.component.jsx';
import './App.css';
import 'tachyons';
import Scroll from '../Components/Scroll/scroll.component.jsx'



class App extends Component {
    constructor() {
        super()
            this.state = {
                robots: [],
                searchfield: ''
            }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
       
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? 
            <h1>Loading</h1> :
            (
                <div className='tc'>
                <h1 className='Heading'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filteredRobots}/>
                </Scroll>
                </div>
                );
            }
}

export default App;