import React from 'react';
import {Link} from "react-router-dom";
import eventBus from "./evBus";
class HeaderApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfUser: "Imię"
        };
    }
   componentDidMount() {
        eventBus.on("nameApply", (data) =>
        this.setState({nameOfUser: data.nameOfUser})
        );
    }
    componentWillUnmount() {
        eventBus.remove("nameApply");
    }


    render() {
        const nameOfUser = this.state.nameOfUser
        return (
            <nav className="page-header">
                <h1 className="logo"><Link to="/">Zaplanuj <span>Jedzonko</span></Link></h1>
                <div className="admin-div">
                    <h1 className="admin-h1">{nameOfUser}</h1>
                    <img src="/images/user.svg" alt="admin" width="50px"/>
                </div>
            </nav>
        )
    };
}
export default HeaderApp;