import Jeff from '../assets/jeff.png'
import Kristina from '../assets/kristina.png'
import Eric from '../assets/eric.jpeg'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="about-page">
      <h1>The Full Stackers</h1>

      <div className="flex-row">
        <div className="about-container">
          <img className="profile-image" src={Jeff} alt="profile image" />
          <h3>Jeff Fraley</h3>
          <p>
            <a
              className="linkedIn"
              href="https://www.linkedin.com/in/jeff-fraley/"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div className="about-container">
          <img className="profile-image" src={Kristina} alt="profile image" />
          <h3>Kristina DeSilva</h3>
          <p>
            <a
              className="linkedIn"
              href="https://www.linkedin.com/in/kristina-vanbergen-desilva/"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div className="about-container">
          <img className="profile-image" src={Eric} alt="profile image" />
          <h3>Eric Deleon</h3>

          <p>
            <a
              className="linkedIn"
              href="https://www.linkedin.com/in/eric-deleon132/"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
