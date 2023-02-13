import textEditor from '../../assets/images/text-editor.png'
import techBlog from '../../assets/images/tech-blog.png'
import noteTaker from '../../assets/images/note-taker.png'
import freshTomatoes from '../../assets/images/fresh-tomatoes.png'

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
    <section className="bg-gray p-5" id="portfolio">
      <h1>Projects</h1>
      <ol className="d-flex flex-wrap justify-content-around">
        <li className="application">
          <a href="https://text-editor-pwa-backend.herokuapp.com/">
            <h2>Text Editor PWA</h2>
            <img
              src={textEditor}
              alt="Text Editor PWA Backend"
              style={styles.projectImg}
            />
          </a>
        </li>

        <li className="application">
          <a href="https://tech-blog-backend.herokuapp.com/">
            <h2>Tech Blog</h2>
            <img
              src={techBlog}
              alt="Tech Blog Backend"
              style={styles.projectImg}
            />
          </a>
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
