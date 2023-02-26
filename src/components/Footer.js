import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer () {
    return (
    <footer>
        <p className='footerText'>Nicholas Rhoda 2023</p>
        <div className='profiles'>
        <div className='github'>
        <a href='https://github.com/nicrhoda' target="_blank" rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
        </a>
        </div>
        <div className='instagram'>
            <a href='https://www.instagram.com/nicrhoda/' target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
        </div>
    </footer>
    )
};