import React, {useState} from 'react'

const Portfolio = () => {

    const projects = [
        {
            title: "cartoonbnb",
            img: "/img/bnb.jpg",
            technologies: ["React js", "Sass", "React-Router-DOM", "Grid", "Flexbox", "Responsive Design"],
            info: "The cartoonbnb project was based from websites such as airbnb and other booking companies. The purpose of building this was to learn how to make my own carousel without the use of a style library. It was also a good exercise for using grid, flexbox and media queries. After learning Sass and further CSS techniques, I revisited this project so that I could make some changes to the primary sizing and utilise mixins and variables.",
            link: "https://master.d3dxe4akplo0am.amplifyapp.com/",
            key:1
        },
        {
            title: "TAT Tracker",
            img: "/img/tattracker.jpg",
            technologies:["Mongoose", "Express js", "React js", "Node js", "Redux", "Nodemailer", "Multer", "Jason Web Token", "Bcrypt"],
            info: "This project was designed and created by me to solve an efficiency problem at work. This is a full MERN stack application and uses Redux for state management, logins are authenticated with JWT and an auth middleware. The application acts as a webform and generates emails with attachments, allowing agents and resourcers to keep up to datee with each others roles. It was created with Materialise as a style library - the primary focus of this project was creating a working solution with a simple UI.",
            link: null,
            key:2
        }
    ]

    const [portfolio, setPortfolio] = useState()

    const clicked = item => {
        setPortfolio(item)
        console.log(portfolio)
    }

    const clear = () => {
        setPortfolio()
    }

    return (
        <section className="portfolio">
            <h2 className="portfolio__title section__title" id="portfolio">Portfolio of work</h2>
                <p className="portfolio__intro">Below is a selection of work that I have built. Click on the picture to see some further information on the project itself. For public projects, there will also be a link included so that you can view the working version of the page.</p>
            <div className="portfolio__container">
                {projects.map(project => (
                <div href="#portfolio__popup" className="portfolio__card" onClick={e => clicked(project)} key={project.key}>
                    <a href="#portfolio__popup" key={project.key}>
                    <img src={project.img} className="portfolio__card--image" alt="porfolio" />
                    <h5 className="portfolio__card--title">{project.title}</h5></a>
                </div>
                ))}
            </div>

            {portfolio &&
            
            <div className="portfolio__popup" id="portfolio__popup">
                <div className="portfolio__popup--container">
                <p className="training__info--close" onClick={clear}>&times;</p>
                <a href={portfolio.link} target="!#">
                
                    </a>
                <div className="portfolio__popup--info-container">

                <div className="portfolio__popup--info-container-2">
                    <div className="portfolio__popup--technology">
                    {/* <h4 className="portfolio__popup--technology-title">Technologies</h4> */}
                <ul className="portfolio__popup--technology-list">
                    {portfolio.technologies.map(technology => (
                    <li className="portfolio__popup--technology-item">
                        {technology}
                    </li>
                    ))}
                </ul>
                    </div>
                        <div className="portfolio__popup--info-container-3">

                <p className="portfolio__popup--info">
                <h4 className="portfolio__popup--title">{portfolio.title}</h4>

                    {portfolio.info}
                </p>
                        </div>
                </div>
                {portfolio.link ? (
                <p className="portfolio__popup--link" key={portfolio.key}>
                    <strong>This project is available to view via <a href={portfolio.link} target="!#">this link</a>.</strong>
                </p>
                ) : (
                    <p className="portfolio__popup--link portfolio__popup--link-unavailable">
                    <strong >This project is private and isn't available publicly. If you'd like further information about this project, please get in touch.</strong>
                </p>
                )}

                </div>
            </div></div>
            }

        </section>
    )
}

export default Portfolio
