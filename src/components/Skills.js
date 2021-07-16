import React from 'react'
import skillsData from './skillsData'
const Skills = () => {
    return (
        <div className="skills common-animation">
            <div className="container">  
                <div className="common">
                <h3 className="heading">SKILLS</h3>
                <h1 className="mainHeader">What I know</h1>
                </div>
                    <ul className="skillList">
                        {skillsData.map(skill=> <li key={skill.id}><img src={skill.img} alt="html" /><p>{skill.skill}</p></li>)}
                    </ul>
                </div>
         </div>
    )
}

export default Skills
