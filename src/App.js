import './App.css';
import logo from './logo.svg';
import React, { Component } from 'react';
import AutoCompleteText from './components/AutoCompleteText';
import coutries from './countries';

class App extends React.Component {

    render() {
        return(
            <div className="App-Component">
                <div className="App-Component">
                    <AutoCompleteText items={coutries}/>
                </div>
            </div>
        )
    }
}

export default App;
