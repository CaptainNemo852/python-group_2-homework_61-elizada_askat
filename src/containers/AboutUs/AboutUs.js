import React, {Component, Fragment} from 'react';
import Menu from "../../components/Navbar/Navbar"

class AboutUs extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <div className='container'>
                    <img src="https://media.glassdoor.com/o/128479/virginia-international-university-office.jpg" />
                </div>
                <div className="text">
                    <p>History

                        Virginia International University was founded by Dr. Isa Sarac in 1998. Subsequent to establishing its campus in Fairfax, Virginia, VIU received authorization from the State Council of Higher Education for Virginia (SCHEV) to begin its first Master of Business Administration (MBA) program on December 23, 1998.[3]

                        By May 2000, SCHEV granted the university the authority to offer a series of Diploma and Certificate programs, grant degrees for the MBA program, and gave the university permission to begin a baccalaureate program in Computer Science and Business Management.

                        VIU held its first commencement on May 4, 2006 with 20 graduates in attendance at the Fairfax County Country Club and has rapidly grown in student population since then.[3] Today, VIU boasts students from 60 different countries and offers a variety of both academic and non-academic degrees on campus and online.[4]
                        Academics

                        Virginia International University's programs are organized into seven schools: the School of Business, School of Computer Information Systems, School of Continuing Education, School of Education, School of Public and International Affairs, School of Language Studies and School of Online Education.
                        School of Business (SB)

                        VIU's School of Business offers an MBA program which includes instruction in foundational core business courses, a set of required business courses to provide depth, and electives. Concentrations include: Accounting, Entrepreneurship, Global Logistics, Health Care Management, Hospitality & Tourism Management, Human Resource Management, International Business Management, International Finance, Marketing Management, Mass Media and Public Relations, or Project Management.

                        The following graduate degrees and certificates are also offered within the School of Business: Master of Science in Accounting, Master of Science in Project Management, Graduate Certificate in Project Management.

                        The BBA program includes a liberal arts foundation, a core curriculum in business, and electives. Concentrations include: Finance, International Business, and Marketing.

                        The following undergraduate certificate programs are also offered within the School of Business: International Business and Small Business Management. </p>
                </div>
            </Fragment>
        );
    }
}

export default AboutUs;