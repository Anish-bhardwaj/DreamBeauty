import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="global-not-found">
      <div className="container">
        <div className="global-not-found-content">
          <h1 className="global-not-found-code">404</h1>
          <h2 className="global-not-found-title">Page Not Found</h2>
          <p className="global-not-found-desc">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          <div className="global-not-found-actions">
            <Link href="/" className="global-not-found-btn-primary">
              Back to Home
            </Link>
            <Link href="/products" className="global-not-found-btn-outline">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
