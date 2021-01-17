import React, {useState, Fragment} from 'react'


const Training = () => {

    const [training, setTraining] = useState('');

    const trainingItems = [
        {
            img: "/img/bootcamp.jpg",
            title: "Angela Yu's Web Development Bootcamp",
            key: 1,
            info: "This Web Development Bootcamp online course has over 50 hours of source materials, taught by the lead instructor at the App Brewry. The course covers a range of tools and technologies including Javascript ES6, Node.js, NPM, Express.js, Bash Command Line, API's, MongoDB & Mongoose, React.js and React Hooks. This course is aimed at those starting their journey into web development, this is a very hands on course and students are regularly encouraged to take on code challenges. "
        },
        {
            img: "/img/sass.jpg",
            title: "Jonas Schmedtmann's Advanced CSS and Sass",
            key: 2,
            info: "Advanced CSS and Sass is a course designed by Jonas Schmedtmann. This course is aimed at those already familiar with CSS, to allow a transition to using Sass. With 28 hours of source material his course teaches using the SCSS Syntax and aims to teach a variety of Transforms, Keyframe Animations, Positioning tools and more. Teaching is done through building pre-designed projects. "
        },
        {
            img: "/img/reactftb.jpg",
            title: "Traversy Media's React Front To Back",
            key: 3,
            info: "With 14 hours of source material, Traversy Media's React Front To Back course is faster pace than most courses aimed at junior developers. As a result, I went through most of the source material twice. This course demonstrates how to build a full MERN stack application, creating a custom API and using custom authentication with JWT. In addition, both Redux and UseContext are covered for state management, both being used on different projects"
        },
    ]

    const clicked = item => {
        setTraining(item)
        console.log(training)
    }

    const clear = () => {
        setTraining()
    }

    return (
        <Fragment>
        <section className="training">
            <h3 className="training__title section__title" id="training">Learning and Development</h3>
            <div className="training__container">
            {trainingItems.map(item => (
                    <div className="training__entry" key={item.key}>
                    <img src={`${item.img}`} className="training__entry--image" alt="training" />
                    <h4 className="training__entry--title">
                        {item.title}
                    </h4>
                    <a href="#training__info" className="training__entry--button" onClick={e => clicked(item)}>
                        <span className="training__entry--button-text" >Click for more info</span>
                    </a>

                    <p className="training__info-small">{item.info}</p>
                </div>
            ))}


            </div>
            </section>

                {training && 
                    <div className="training__info" id="training__info">
                    <div className="training__info--container">
                    <p onClick={clear} className="training__info--close">&times;</p>

                        <div className="training__info--column-1">
                    <img src={training.img} className="training__info--image" alt="training"/>
                    <h4 className="training__info--title section__title">
                    {training.title}
                    </h4>
                        </div>
                        <div className="training__info--column-2">
                    <p className="training__info--info">
                        {training.info}
                        </p>
                        </div>

                    </div>
                </div> 
                }
        </Fragment>
    )
}

export default Training
