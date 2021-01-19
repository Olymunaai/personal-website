import React, {Fragment, useState} from 'react'

const Navigation = () => {

    const [checked, setChecked] = useState(false)

    const toggle = () => {
        if (!checked){
        setChecked(true)
        console.log('clicked')
    }
        else {
            setChecked(false)
            console.log('clicked')

        }
    }

    return (
        <Fragment>
            <input type="checkbox" className="nav__toggle" id="nav__toggle" checked={checked} readOnly></input>
            <label htmlFor="nav__toggle" className="nav__toggle--button" onClick={toggle} >
                <span className="nav__toggle--burger"></span>
            </label>
            <nav className="nav__menu">
            </nav>
                <ul className="nav__list">
                    <li className="nav__list--item" ><a href="#home" className="nav__list--link"  onClick={toggle}>Home</a></li>
                    <li className="nav__list--item"><a href="#skills" className="nav__list--link" onClick={toggle}>Skills</a></li>
                    <li className="nav__list--item"><a href="#training" className="nav__list--link" onClick={toggle}>Training</a></li>
                    <li className="nav__list--item"><a href="#portfolio" className="nav__list--link" onClick={toggle}>Portfolio</a></li>
                </ul>
        </Fragment>
    )
}

export default Navigation
