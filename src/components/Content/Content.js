import React, {Component, Fragment} from 'react';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className='content'>
                    <img src="https://www.lpu.in/about_lpu/images/tieups-logo/virginia-international-university.jpg"/>
                    <div className="text">
                        <p>Virginia International University (VIU) is a private, non-profit institution established in 1998.[1] Located in Fairfax, Virginia, VIU offers degree programs at both the undergraduate and graduate levels, as well as language programs like English as a Second Language (ESL), test preparation courses, and continuing education opportunities. The college is nationally accredited by the Accrediting Council for Independent Colleges and Schools.[2] </p>
                    </div>
                    <div className='row'>
                        <div className='col col-6'>
                            <img src="https://3.bp.blogspot.com/-kHGF9pdBsXI/WR0_gjzjH3I/AAAAAAAAC9w/nm7IeWQBZso-qFevU22S0N6IB7wiIZ-mQCLcB/s1600/Snap%2B2017-05-18%2Bat%2B13.19.00.png" width="500px"/>
                            <img src="https://images1.content-hci.com/commimg/myhotcourses/institution/profile/myhc_224150.jpg" width="500px"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Content;


