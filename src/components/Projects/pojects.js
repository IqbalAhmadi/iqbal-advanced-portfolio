import reminderNurse from '../../assets/images/reminder-nurse.png'
import techBlog from '../../assets/images/tech-blog.png'
import noteTaker from '../../assets/images/note-taker.png'
import freshTomatoes from '../../assets/images/fresh-tomatoes.png'
import './index.scss'

// returns dimensions in css style with width and ratio provided
// takes width, then a ratio array ex. 550 16:9
const imgDimension = (width, [ratioW, ratioH]) => {
  const height = (width / ratioW) * ratioH
  return { width: `${width}px`, height: `${height}px` }
}

function Projects() {
  const styles = {
    projectImg: {
      ...imgDimension(550, [16, 9]),
    },
  }

  return (
    <section className="p-5" id="portfolio">
      <ol className="d-flex flex-wrap justify-content-around">
        <li className="application">
          <a href="https://reminder-nurse.herokuapp.com/">
            <h2>Reminder Nurse</h2>
          </a>

          <p>
            It is a cross-platform application built using the MERN stack, aimed
            at helping users stay on track with their medication dosages through
            notifications.
          </p>
          <img
            src={reminderNurse}
            alt="Reminder Nurse Full Stack Application"
            style={styles.projectImg}
          />
        </li>

        <li className="application">
          <a href="https://tech-blog-backend.herokuapp.com/">
            <h2>Tech Blog</h2>
          </a>
          <img
            src={techBlog}
            alt="Tech Blog Backend"
            style={styles.projectImg}
          />
        </li>

        <li className="application">
          <a href="https://deploying-note-taker-app.herokuapp.com/">
            <h2>Note Taker</h2>
            <img
              src={noteTaker}
              alt="Note Taker Backend"
              style={styles.projectImg}
            />
          </a>
        </li>

        <li className="application">
          <a href="https://iqbalahmadi.github.io/fresh-tomatoes/">
            <h2>Fresh Tomatoes</h2>
            <img
              src={freshTomatoes}
              alt="Movie Website Frontend"
              style={styles.projectImg}
            />
          </a>
        </li>
      </ol>
    </section>
  )
}

export default Projects
