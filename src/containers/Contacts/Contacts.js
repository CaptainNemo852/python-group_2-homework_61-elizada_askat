import React, {Component, Fragment} from 'react';
import Menu from "../../components/Navbar/Navbar"

class AboutUs extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <div className='container'>
                    <img src="http://images2.content-hca.com/commimg/myhotcourses/institution/profile/myhc_224149.jpg" />
                    <div className="text">
                        <ul>
                            <li>Main page of university:info@viu.edu</li>
                            <li>Gmail:info@viu.edu</li>
                            <li>Phone: +1 (800)514-6848</li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AboutUs;