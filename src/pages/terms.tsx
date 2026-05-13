import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Terms & Conditions | Vanasthali Hills | Sri Srinivasa Realty
        </title>

        <meta
          name="description"
          content="Review our Terms & Conditions for clear guidelines on service use, limitations, and user responsibilities. Stay informed before proceeding."
        />

        <link rel="canonical" href="https://www.vanasthali9.com/terms" />

        {/* OpenGraph */}
        <meta property="og:url" content="https://www.vanasthali9.com/terms" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Terms & Conditions | Vanasthali Hills | Sri Srinivasa Realty"
        />
        <meta
          property="og:description"
          content="Review our Terms & Conditions for clear guidelines on service use, limitations, and user responsibilities. Stay informed before proceeding."
        />
        <meta
          property="og:image"
          content="https://www.vanasthali9.com/images/gallery7.avif"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="vanasthali9.com" />
        <meta
          property="twitter:url"
          content="https://www.vanasthali9.com/terms"
        />
        <meta
          name="twitter:title"
          content="Terms & Conditions | Vanasthali Hills | Sri Srinivasa Realty"
        />
        <meta
          name="twitter:description"
          content="Review our Terms & Conditions for clear guidelines on service use, limitations, and user responsibilities. Stay informed before proceeding."
        />
        <meta
          name="twitter:image"
          content="https://www.vanasthali9.com/images/gallery7.avif"
        />
      </Helmet>

      <div className="flex flex-col min-h-screen ">
        <Header />
        <main className="flex-grow py-24">
          <section id="terms" className="container mx-auto p-6 ">
            <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
            <p className="mb-4">Effective Date: [03-09-2025]</p>
            <p className="mb-6">
              Welcome to Sri Srinivasa Realty. By accessing or using our website
              (
              <a
                href="https://srisrinivasarealty.com/"
                className="text-blue-600 underline"
              >
                https://srisrinivasarealty.com/
              </a>
              ), you agree to comply with and be bound by these Terms &
              Conditions. Please read them carefully.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility</h2>
            <p>You must be at least 18 years of age to use this website...</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              2. Use of Website
            </h2>
            <ul className="list-disc ml-6">
              <li>You agree to use this website only for lawful purposes.</li>
              <li>
                You shall not attempt to misuse, hack, or disrupt our services.
              </li>
              <li>Information on this website is for general guidance...</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              3. Property Information
            </h2>
            <p>
              All property listings, images, and details provided are for
              informational purposes only. Actual specifications, prices, and
              availability may differ. We do not guarantee accuracy or
              completeness of property information.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All content on this website, including logos, images, text, and
              designs, are the property of Sri Srinivasa Realty. Unauthorized
              use, reproduction, or distribution is prohibited.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              5.Limitation of Liability
            </h2>
            <p>
              We shall not be liable for any loss, damage, or inconvenience
              caused due to reliance on information available on this website.
              Users are advised to verify property details independently.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              6. Modifications
            </h2>
            <p>
              We reserve the right to update or modify these Terms & Conditions
              at any time without prior notice.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              7. Governing Law
            </h2>
            <p>
              These Terms & Conditions shall be governed by and interpreted in
              accordance with the laws of India.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
