import React from 'react'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__info dis-flex">
            <Link to="/" className='footer__logo'>A-Shop.Uz</Link>
            <p className="footer__txt">&copy; Created by Abdurahmon and Bilol. 2022</p>
            <a href="tel:998909704024" className="footer__contact">
              Admin <FontAwesomeIcon icon={faPhoneFlip} className="footer__icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}