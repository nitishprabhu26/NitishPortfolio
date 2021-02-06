import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info unset-margin-bottom">{education.degree} <span>&bull;</span><em className="date"> {education.graduated }</em></p>
        <p className="unset-margin-bottom"><strong>GPA: </strong>{education.gpa}</p>
        <p class={(education.description ? 'unset-margin-bottom text-justification' : "hideDisplay unset-margin-bottom text-justification")} ><strong>Majors: </strong>{education.description}</p>
        <p class={(education.courses ? 'text-justification' : "hideDisplay text-justification")} ><strong>Related Courses: </strong>{education.courses}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>

            <p class={(work.title2 ? 'infor unset-margin-bottom' : "info")}>{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            { work.title2 ?<p className="info">{work.title2}<span>&bull;</span> <em className="date">{work.years2}</em></p> : null}
            {/* <p>{work.description}</p> */}
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        return <li key={skills.name}><span ><strong>{skills.name} </strong></span><em> {skills.list}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            {/* <p>{skillmessage}
            </p> */}

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
