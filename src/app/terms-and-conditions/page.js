import Script from "next/script";
import { Container } from "react-bootstrap";
import { generateMetadata as genMeta, generateJsonLd } from "@/lib/seo";

const jsonLd = generateJsonLd({
  title: "Terms and Conditions",
  description: "Terms and Conditions for DreamBeauty. Read our terms of service, shipping, returns, and payment policies for beauty products.",
  path: "/terms-and-conditions",
  breadcrumbs: [{ name: "Terms and Conditions", path: "/terms-and-conditions" }],
});

export const metadata = genMeta({
  title: "Terms and Conditions",
  description: "Terms and Conditions for DreamBeauty. Read our terms of service, shipping, returns, and payment policies for beauty products.",
  keywords: [
    "terms and conditions",
    "DreamBeauty terms",
    "terms of service",
    "shipping policy",
    "return policy",
  ],
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <Script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <section className="legal-page">
        <Container>
          <h1 className="legal-title">Terms and Conditions</h1>
          <div className="legal-content">
            <p className="legal-updated">Last updated: March 2024</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the DreamBeauty website, you accept and agree to be bound
              by these Terms and Conditions. If you do not agree to these terms, please do not use
              our website.
            </p>

            <h2>2. Products and Services</h2>
            <p>
              DreamBeauty offers premium skincare, makeup, haircare, and fragrance products.
              All products are cruelty-free and made with high-quality ingredients. Product images
              are for illustration purposes; actual products may vary slightly in packaging.
            </p>

            <h2>3. Pricing and Payment</h2>
            <p>
              All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes
              unless otherwise stated. We accept major credit cards, debit cards, UPI, and other
              secure payment methods. We reserve the right to change prices without prior notice.
            </p>

            <h2>4. Shipping and Delivery</h2>
            <p>
              We offer free shipping on orders over $50. Standard shipping takes 3-5 business days.
              Express shipping (1-2 days) is available for an additional fee. We ship across India
              and to select international destinations.
            </p>

            <h2>5. Returns and Refunds</h2>
            <p>
              We offer a 30-day satisfaction guarantee. If you&apos;re not completely happy with your
              purchase, return unused products in original packaging for a full refund or exchange.
              Opened products may be returned if defective or if you experience an adverse reaction.
            </p>

            <h2>6. Product Safety</h2>
            <p>
              All DreamBeauty products are dermatologist tested and suitable for most skin types.
              We recommend performing a patch test before using new products. Discontinue use if
              irritation occurs and consult a healthcare professional.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on this website, including images, text, logos, and designs, is the property of
              DreamBeauty and is protected by copyright laws. Unauthorized use is prohibited.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              DreamBeauty shall not be liable for any indirect, incidental, or consequential
              damages arising from the use of our products or services.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of the United States. Any disputes
              shall be subject to the exclusive jurisdiction of the courts in New York.
            </p>

            <h2>10. Contact Information</h2>
            <p>
              For questions regarding these Terms and Conditions, please contact us at:
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
