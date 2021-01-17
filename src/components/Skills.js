import React from 'react'

const Skills = () => {

    const skills = [
        {
            title: "React JS",
            class: "skills__card--react",
            key: 1,
            subSkills: ["Function Components", "Component-level-state", "Redux State Management", "Full MERN Stack Development experience", "API Requests", "React-router-DOM"]
        },
        {
            title: "SASS & CSS5",
            class: "skills__card--sass",
            key: 2,
            subSkills: ["SCSS Syntax", "Responsive Design", "BEM Naming", "Grid & Flexbox", "Keyframe Animation", "Mixins", "REM sizing"]
        },
        {
            title: "Node JS",
            class: "skills__card--node",
            key: 3,
            subSkills: ["Express JS", "Mongoose", "Full MERN Stack Development experience", "Nodemailer", "Node Package Manager & Command Line", "CRUD Functionality"]
        }
    ]

    return (
        <section className="skills" id="skills">
            <h3 className="skills__title section__title" >Coding Languages and Skills</h3>
            <div className="skills__container">
            {skills.map(skill => (
                <div key={skill.key}>
                <div className={`skills__card ${skill.class}`} key={skill.key}>
                    <div className="skills__card--front" >
                        <h4 className="skills__card--title">{skill.title}</h4> 
                    </div>

                    <div className="skills__card--back">
                    <img src="img/code.jpg" className="skills__card--image" alt="code"/>
                        <ul className="skills__card--back-list">
                            {skill.subSkills.map(subSkill => (
                                <li className="skills__card--back-item" key={subSkill}>{subSkill}</li>
                            ))}                    
                        </ul>
                    </div>
                </div>
                </div>
            ))}
            </div>

        </section>
    )
}

export default Skills
