import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css';

export const Footer = () => {
    return (
        <>
           <footer>
    <div className="container">
        <p>&copy; {new Date().getFullYear()} developed by&nbsp; <a href='https://github.com/itsjatinsidana' target='_blank'> <i class="fa-brands fa-github"> </i>&nbsp;&nbsp;Jatin Sidana</a></p>
        <div className="social-media-links">
          <a href="https://twitter.com/JatinSidana7" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/j.sadana6/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

    </footer>
        </>
    )
}