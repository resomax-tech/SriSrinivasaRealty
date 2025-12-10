import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";



export const PrivacyPage = () => {
    return (
        <>

            <Helmet>
                <title>Privacy Policy | Vanasthali Hills | Sri Srinivasa Realty</title>

                <meta
                    name="description"
                    content="Review our Privacy Policy to know how your information is handled with care. We follow strict security practices to keep your data safe and private."
                />

                <link rel="canonical" href="https://www.vanasthali9.com/privacy" />

                {/* OpenGraph */}
                <meta property="og:url" content="https://www.vanasthali9.com/privacy" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Privacy Policy | Vanasthali Hills | Sri Srinivasa Realty"
                />
                <meta
                    property="og:description"
                    content="Review our Privacy Policy to know how your information is handled with care. We follow strict security practices to keep your data safe and private."
                />
                <meta
                    property="og:image"
                    content="https://www.vanasthali9.com/images/gallery7.avif"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="vanasthali9.com" />
                <meta property="twitter:url" content="https://www.vanasthali9.com/privacy" />
                <meta
                    name="twitter:title"
                    content="Privacy Policy | Vanasthali Hills | Sri Srinivasa Realty"
                />
                <meta
                    name="twitter:description"
                    content="Review our Privacy Policy to know how your information is handled with care. We follow strict security practices to keep your data safe and private."
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
                        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                        <p className="mb-4">Last Updated: [03-09-2025]</p>
                        <p className="mb-6">
                            We Sri Srinivasa Realty operates this website and values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information in compliance with Google Ads policies.
                        </p>

                        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
                        <p>When you interact with our website, campaigns, or ads, we may collect:</p>
                        <ul className="list-disc ml-6">
                            <li>Personal details (name, email, phone number) provided through forms. </li>
                            <li>Property/project preferences.</li>
                            <li>Website usage data via cookies, Google Ads tags, or analytics tools (IP address, device type, browsing behavior).</li>
                        </ul>
                        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
                        <p>We use your data to: </p>
                        <ul className="list-disc ml-6">
                            <li>Respond to inquiries and provide requested services.</li>
                            <li>Share property/project updates, offers, and relevant real estate information.</li>
                            <li>Improve our ads, website, and customer experience.</li>
                            <li>Show you relevant ads across Google and partner websites (remarketing).</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-2">3. Google Ads & Third-Party Cookies</h2>
                        <ul className="list-disc ml-6">
                            <li>We use Google Ads remarketing and conversion tracking.</li>
                            <li>Google and third-party vendors use cookies to serve ads based on your past interactions with our website.</li>
                            <li>You can opt out of personalized ads by visiting Google Ads Settings: https://www.google.com/settings/ads</li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Sharing</h2>
                        <p>We do not sell your personal information. Data may only be shared with: </p>
                        <ul className="list-disc ml-6">
                            <li>Trusted service providers (marketing agencies, IT support). </li>
                            <li>Legal or regulatory authorities when required.  </li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Choices </h2>
                        <ul className="list-disc ml-6">
                            <li>Legal or regulatory authorities when required. </li>
                            <li>You may opt out of Google’s use of cookies via the Network Advertising Initiative opt-out page: http://www.networkadvertising.org/choices/</li>
                            <li>You can request access, update, or deletion of your personal information by contacting us at <b>srisrinivasarealty16@gmail.com</b> </li>
                        </ul>

                        <h2 className="text-xl font-semibold mt-6 mb-2">6. Security </h2>
                        <p>We implement reasonable security practices to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection. </p>

                        <h2 className="text-xl font-semibold mt-6 mb-2">7. Updates </h2>
                        <p>We may update this Privacy Policy from time to time. The revised version will always be posted on this page. </p>

                        <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us </h2>
                        <p>For questions or concerns, contact: </p>
                        <ul className="list-disc ml-8 mt-2">
                            <li><b>Sri Srinivasa Realty</b></li>
                            <li><b>Vanasthali Hills & Estates, Hyderabad, India, Telangana</b></li>
                            <li><b>srisrinivasarealty16@gmail.com</b></li>
                            <li><b>+91 77299 22244</b></li>
                        </ul>

                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}

