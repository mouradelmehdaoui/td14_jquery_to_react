import Header from "../components/Header/Header";

/**
 * Error component represents the page to display when an error occurs.
 *
 * @component
 * @returns {JSX.Element} React component
 */
export default function Error() {
  return (
    <>
      {/* Header component for the create page */}
      <Header page="create" />
      <div className="errorPage-container">
        <section className="errorPage">
          {/* Title for the error page */}
          <span className="errorPage__title">Oups...</span>
          {/* Text message for the error page */}
          <span className="errorPage__text">La page que vous demandez n'existe pas.</span>
        </section>
        <footer className="footer">
          {/* Copyright information */}
          <p className="footer-text mx-auto">Copyright 2023 Mourad El mehdaoui </p>
        </footer>
      </div>
    </>
  );
}
