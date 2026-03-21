"use client";

export default function Error({ error, reset }) {
  return (
    <section className="global-error">
      <div className="container">
        <div className="global-error-content">
          <h1 className="global-error-title">Something went wrong</h1>
          <p className="global-error-desc">
            We apologize for the inconvenience. Please try again or go back to the homepage.
          </p>
          <div className="global-error-actions">
            <button onClick={reset} className="global-not-found-btn-primary">
              Try Again
            </button>
            <a href="/" className="global-not-found-btn-outline">
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
