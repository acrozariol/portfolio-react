export default function Projects() {
  return (
    <section className="container-main">
      <span>My work</span>
      <h2>See featured projects</h2>

      <div className="components">
        <div className="cards">
          <a
            href="https://github.com/acrozariol/project-travelgram-html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/travelgram.png"
              alt="Travelgram"
              width={400}
              height={250}
            />

            <div className="project-card-description">
              <p>Travelgram</p>
              <span>A simple travel profile page built with React.</span>
            </div>
          </a>
        </div>

        <div className="cards">
          <a
            href="https://github.com/acrozariol/project-tech-news-html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/tech-news.png"
              alt="Tech News"
              width={400}
              height={250}
            />

            <div className="project-card-description">
              <p>Tech News</p>
              <span>Homepage of a news portal about technology.</span>
            </div>
          </a>
        </div>

        <div className="cards">
          <a
            href="https://github.com/acrozariol/recipe-page-html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/task-manager.png"
              alt="Task Manager"
              width={400}
              height={250}
            />

            <div className="project-card-description">
              <p>Task Manager</p>
              <span>A simple task manager built with Next.js and React.</span>
            </div>
          </a>
        </div>

        <div className="cards">
          <a
            href="https://github.com/acrozariol/refund-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/refund-api.png"
              alt="Refund API page"
              width={400}
              height={250}
            />

            <div className="project-card-description">
              <p>Refund API page</p>
              <span>
                A responsive refund management application built with React.
              </span>
            </div>
          </a>
        </div>

        <div className="cards">
          <a
            href="https://github.com/acrozariol/reactlab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/react-lab.png"
              alt="React Registration Form"
              width={400}
              height={250}
            />

            <div className="project-card-description">
              <p>React Registration Form</p>
              <span>A registration form built with React.</span>
            </div>
          </a>
        </div>

        <div className="cards">
          <a
            href="https://github.com/acrozariol/guess-game-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/guess-game.png"
              alt="Guess Game"
              width={400}
              height={250}
            />

            <div className="project-card-description">
              <p>Guess Game</p>
              <span>A word guessing game built with React.</span>
            </div>
          </a>
        </div>

        {/* Crobor */}
        <div className="cards">
          <img
            src="/assets/images/crobor.png"
            alt="Crobor"
            width={400}
            height={250}
          />

          <div className="project-card-description">
            <p>Crobor</p>
            <span>An institutional website currently under development.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
