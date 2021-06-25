import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    text: string,
    link: string,
    linkText: string
};

const Header: React.FC<Props> = ({ text, link, linkText }) => {
    return (
        <header className="header">
            <div className="title">
                <h1>Rick & Morty</h1>
                <p>{text}</p>
            </div>
            <Link to={link} className="link">{linkText}</Link>
        </header>
    )
}

export default Header
