export default function Header() {
  return (
    <header className="page">
      <div className="introduction">
        <div className="avatar">
          <img
            src="https://github.com/acrozariol.png"
            width={180}
            height={50}
            alt="Amanda Crozariol"
          ></img>

          <div className="tag">
            <img
              src="/assets/icons/tag.svg"
              alt=""
              width={40}
              height={40}
            ></img>
          </div>
        </div>

        <p>
          Hello World! My name is <span>Amanda Crozariol</span> and I am a
        </p>

        <h1>Front-End Developer</h1>

        <div className="profile-description">
          I build responsive and user-friendly web applications using modern
          technologies. With a background in IT operations, automation, and
          DevOps, I bring a problem-solving mindset and a strong interest in
          creating practical digital solutions.
        </div>
      </div>

      {/* Technologies */}
      <div className="button-social-media">
        <div className="technologies">
          <img
            src="/assets/icons/github.svg"
            alt=""
            width={40}
            height={40}
          ></img>
          <span>Github</span>
        </div>
        <div className="technologies">
          <img src="/assets/icons/html.svg" alt="" width={40} height={40}></img>
          <span>HTML</span>
        </div>
        <div className="technologies">
          <img src="/assets/icons/css.svg" alt="" width={40} height={40}></img>
          <span>CSS</span>
        </div>
        <div className="technologies">
          <img
            src="/assets/icons/tailwind-css.svg"
            alt=""
            width={40}
            height={40}
          ></img>
          <span>Tailwind CSS</span>
        </div>
        <div className="technologies">
          <img
            src="/assets/icons/javascript.svg"
            alt=""
            width={40}
            height={40}
          ></img>
          <span>Javascript</span>
        </div>
        <div className="technologies">
          <img
            src="/assets/icons/react.svg"
            alt=""
            width={40}
            height={40}
          ></img>
          <span>React.js</span>
        </div>
        <div className="technologies">
          <img
            src="/assets/icons/node-js.svg"
            alt=""
            width={40}
            height={40}
          ></img>
          <span>Node.js</span>
        </div>
        <div className="technologies">
          <img src="/assets/icons/next.png" alt="" width={40} height={40}></img>
          <span>Next.js</span>
        </div>
        <div className="technologies">
          <img
            src="/assets/icons/devops.png"
            alt=""
            width={40}
            height={40}
          ></img>
          <span>DevOps</span>
        </div>
        <div className="technologies">
          <img src="/assets/icons/aws.png" alt="" width={40} height={40}></img>
          <span>AWS</span>
        </div>
      </div>

      <div className="img-seta">
        <img
          src="/assets/icons/arrow.svg"
          alt="arrow"
          width={30}
          height={30}
        ></img>
      </div>
    </header>
  );
}
