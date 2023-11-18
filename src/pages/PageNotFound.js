import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <header className="theme-light text-center-desktop text-center-mobile">
        <div className="container-text">
          <h1>Page not found</h1>
        </div>
      </header>

      <section className="w-820px">
        <p>Sorry, this page does not exist.</p>
        
        <p>
          Return to the website <Link to="/spa">Home</Link> page.
        </p>
      </section>
    </>
  );
};
