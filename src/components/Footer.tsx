export default function Footer() {
  return (
    <footer>
      <div className="contact_info">
        <div className="infos">
          <span>Contact</span>
          <h2>Did you like my work?</h2>
          <p>Get in touch or follow me on social media!</p>
        </div>

        <div className="button">
          <a
            className="contact"
            href="https://www.linkedin.com/in/amanda-crozariol-b53b19203/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/icons/linkedin.svg"
              alt=""
              width={20}
              height={20}
            />
            <span>LinkedIn</span>
            <img
              src="/assets/icons/arrow-2.svg"
              alt=""
              width={20}
              height={20}
            />
          </a>

          <a
            href="mailto:mandycrozariol@gmail.com"
            target="_blank"
            className="contact"
          >
            <img src="/assets/icons/e-mai.png" alt="" width={20} height={20} />
            <span>Email</span>
            <img
              src="/assets/icons/arrow-2.svg"
              alt=""
              width={20}
              height={20}
            />
          </a>

          <a
            className="contact"
            href="https://github.com/acrozariol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/icons/github-logo.svg"
              alt=""
              width={20}
              height={20}
            />
            <span>Github</span>
            <img
              src="/assets/icons/arrow-2.svg"
              alt=""
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
