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

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber == this.books.length) {
            tempBookNumber = 0;
        }

        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber == this.books.length) {
            tempBookNumber = 0;
        }

        this.setState({
            bookNumber: tempBookNumber
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        <button onClick={this.goToPreviousBook}>Previous Book</button>
                    </div>
                    <div className="col-md-4">
                        {/* DIsplay book with cover here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h2>{this.books[this.state.bookNumber].author}</h2>
                    </div>
                    <div className="col-md-4">
                        {/* Button here to move to next book viewd*/}
                        <button onClick={this.goToNextBook}>Next Book</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;