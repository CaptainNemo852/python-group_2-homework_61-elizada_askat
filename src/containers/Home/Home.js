import React, {Component, Fragment} from 'react';
import Navbar from "../../components/Navbar/Navbar"
import Content from "../../components/Content/Content";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Content/>
            </Fragment>
        );
    }
}

export default Home;