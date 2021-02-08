import React from "react";
import eventBus from "./evBus";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./MainPage";

class Dashboard_firstEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Imię',
            clicked: false
        };
    }
    applyName = () => {
        eventBus.dispatch("nameApply", {nameOfUser: this.state.name});
    };
    handleChange= (event) => {
        if (event.target.value.typeof === "number" || undefined) {
            alert("Podane imię jest niepoprawne")
        }
        else this.setState({name: event.target.value});
            console.log(this.state)
    };


    onClick = (event) => {
        event.preventDefault();
        const user = {
            name: this.state.name
        }
        console.log(user.name);

        fetch("http://localhost:3002/user", {method: 'POST', body: JSON.stringify(user.name)})
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log('Error' + err))

        this.applyName();
        this.setState({clicked: true});
    }


    render() {
        if (this.state.clicked === false)
        return (

            <div className="box">
                <h1>Witaj,</h1>
                <h2>wygląda na to, że jesteś tutaj pierwszy raz!</h2>
                <div className="dash-message">
                    <form >
                    <label>
                        <input className="dash-input" type="text" placeholder="tutaj wpisz jak masz na imię"
                                onChange={this.handleChange}/>
                    </label>
                    <button className="button-orange button-dash" onClick={this.onClick}  value="Gotowe">Gotowe</button>
                    </form>
                </div>
                <p>Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację!</p>
            </div>

        )
        else return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </BrowserRouter>
        )
    }

}
export default Dashboard_firstEntry;