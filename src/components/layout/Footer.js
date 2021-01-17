import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
                <h4 className="footer__created">
                Designed and created by Brett Cahill
            </h4>
            <div className="footer__contact">
                <h5 className="footer__contact--title">
                    Contact information
                </h5>
                <ul className="footer__contact--details">
                    <li>brettacahill@hotmail.co.uk</li>
                    <li>Github: <a target="!#" href="https://github.com/Olymunaai" className="footer__contact--github">Olymunaai</a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer
