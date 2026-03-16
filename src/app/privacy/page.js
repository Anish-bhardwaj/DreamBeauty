import Script from "next/script";
import { Container } from "react-bootstrap";
import { generateMetadata as genMeta, generateJsonLd } from "@/lib/seo";

const jsonLd = generateJsonLd({
  title: "Privacy Policy",
  description: "Privacy Policy for DreamBeauty. Learn how we collect, use, and protect your personal information and data security.",
  path: "/privacy",
  breadcrumbs: [{ name: "Privacy Policy", path: "/privacy" }],
});

export const metadata = genMeta({
  title: "Privacy Policy",
  description: "Privacy Policy for DreamBeauty. Learn how we collect, use, and protect your personal information and data security.",
  keywords: [
    "privacy policy",
    "DreamBeauty privacy",
    "data protection",
    "personal information",
  ],
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Script
        id="privacy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <section className="legal-page">
        <Container>
          <h1 className="legal-title">Privacy Policy</h1>
          <div className="legal-content">
            <p className="legal-updated">Last updated: March 2024</p>

            <h2>1. Information We Collect</h2>
            <p>
              At DreamBeauty, we collect information you provide directly to us, such as when you
              create an account, make a purchase, or contact us for inquiries. This may include your
              name, email address, phone number, shipping address, and payment information.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Personalize your shopping experience</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside
              parties except to trusted third parties who assist us in operating our website,
              conducting our business, or servicing you, as long as those parties agree to keep this
              information confidential.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction. All payment transactions
              are encrypted using SSL technology.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience, remember your preferences,
              and analyze site traffic. You can choose to disable cookies through your browser settings,
              though this may affect some features of our website.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also
              opt out of marketing communications at any time. To exercise these rights, please contact
              us using the information provided below.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: hello@dreambeauty.com
              <br />
              Address: 123 Beauty Boulevard, Suite 100, New York, NY 10001
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
