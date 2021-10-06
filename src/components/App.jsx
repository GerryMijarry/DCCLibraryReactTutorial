import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';


class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            { title: "Ready Player One", author: "Ernest Cline"},
            { title: "Fight Club", author: "Chuck Pahlunuik"},
            { title: "Leaves of Grass", author: "Walt Whitman"},
        ]
        this.state = {
            bookNumber: 0
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/* Button here to move to previous book viewd*/}
                    </div>
                    <div className="col-md-4">
                        {/* DIsplay book with cover here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h2>{this.books[this.state.bookNumber].author}</h2>
                    </div>
                    <div className="col-md-4">
                        {/* Button here to move to next book viewd*/}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;