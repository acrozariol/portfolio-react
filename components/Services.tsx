export default function Services() {
  return (
    <section className="page-main">
      <div className="container-servicos">
        <span>My services</span>
        <h2>How can I help your business?</h2>
      </div>

      <div className="components-2">
        <div className="applications">
          <img src="/assets/icons/devices.svg" alt="" width={40} height={40} />
          <span>Websites and Applications</span>
          <p>Interface development</p>
        </div>

        <div className="applications">
          <img
            src="/assets/icons/hard-drives.svg"
            alt=""
            width={40}
            height={40}
          />
          <span>API and database</span>
          <p>Creating system services</p>
        </div>

        <div className="applications">
          <img src="/assets/icons/infinity.svg" alt="" width={40} height={40} />
          <span>DevOps</span>
          <p>Application management and infrastructure</p>
        </div>
      </div>
    </section>
  );
}
