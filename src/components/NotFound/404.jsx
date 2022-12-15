import "./404.css";

function NotFound() {
  return (
    <section className="page-404">
      <h1 className="notfound-heading">404</h1>
      <div className="notfound-content-box">
        <h3 className="h2">Look like you're lost</h3>

        <p>the page you are looking for not avaible!</p>

        <button className="notfound-btn">Go Home</button>
      </div>
    </section>
  );
}

export default NotFound;
