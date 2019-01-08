import React from 'react';
import './AutoCompleteText.css';

export default class AutoCompleteText extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            suggestions: [],
            text: ''
        }
    
    };

    onTextChange = (e) => {
        
        const {items} = this.props;

        const value = e.target.value;
        
        let suggestions = [];

        if(value.length > 0) {

            const regex = new RegExp(`^${value}`, 'i');
            
            suggestions = items.sort().filter(item => regex.test(item));
        }
            
        this.setState({suggestions, text: value});

    }

    suggestionsSelected = (value) =>{

        this.setState( () => ({
            text: value,
            suggestions: []
        }))

    }

    renderSuggestions = () => {

        const {suggestions} = this.state;

        if(!suggestions.length)
            return null;

        return (
            <ul>
                {suggestions.map((item, index) => <li key={index} onClick={() => this.suggestionsSelected(item)}>{item}</li>)}
            </ul>
        )

    }

    render() {

        const {text} = this.state;

        return(

            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChange} type="text"/>
                {this.renderSuggestions()}
            </div>

        );

    };

};