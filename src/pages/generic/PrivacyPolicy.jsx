import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useSettings } from '../../components/SettingsContext';

const PrivacyPolicy = () => {
    const settings = useSettings();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-6 gradient-text">Privacy Policy</h1>
                <p className="text-lg mb-4">
                This Privacy Policy ("Policy") outlines how {settings.CompanyLegalEntity}, doing business as {settings.Company}, along with our affiliates, subsidiaries, divisions, and franchisees (collectively referred to as "{settings.Company}," "we," "our," or "us"), collects, utilizes, and shares your information. Please note that this Policy does not address the collection of mobile device information for in-store analytics. For details about such data collection, refer to the signage in individual stores.
                </p>
                <p className="text-lg mb-4">
                At {settings.Company}, we prioritize the privacy of our customers and visitors to our websites. We understand you may have concerns regarding the handling of your information, and this Policy aims to clarify how we collect, use, and share that information, how we protect it, the choices you have concerning your information, and how to contact us with any inquiries.
                </p>
                <br/>
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Key Points</h2>
                    <br/><h3 className="text-2xl font-semibold mb-2">What Information Do We Collect, How Is It Collected, and How Is It Used?</h3>
                    <ul className="list-disc list-inside space-y-4">
                        <li>We gather Personal Information and Non-Personally Identifiable Information ("NPI").</li>
                        <li>We collect this information primarily in three ways: directly from you (e.g., when you inquire about our products or services), through our web servers and application logs, cookies, web beacons, and similar technologies, and from third-party sources.</li>
                        <li>Your Personal Information and NPI are used mainly to provide our services, ensure quality, communicate with you, offer promotions, and enhance your experience on our website.</li>
                        <li>We do not share your Personal Information with others unless stated in this Policy or required by law.</li>
                    </ul>

                    <br/><h3 className="text-2xl font-semibold mb-2">How Is My Information Shared?</h3>
                    <ul className="list-disc list-inside space-y-4">
                        <li>We may share your Personal Information and NPI with our affiliates, subsidiaries, divisions, and franchisees.</li>
                        <li>Your information may also be shared with service providers and other third parties as outlined below.</li>
                        <li>We may share information to fulfill our obligations to technology and content providers, or as mandated by law.</li>
                    </ul>

                    <br/><h3 className="text-2xl font-semibold mb-2">What Choices Do I Have?</h3>
                    <p>
                        If you prefer not to receive updates about our products or services, please adjust your account preferences (where applicable) or use the "unsubscribe" link in any communications you receive from us.
                    </p>
                    <p>
                        For further inquiries or concerns regarding this Policy, you can:
                    </p>
                    <ul className="list-disc list-inside space-y-4">
                        <li>Email us at <a href={`mailto:${settings.Email}`}><span className="text-underline hover:text-accent transition-colors">{settings.Email}</span></a></li>
                        <li>Call us at <a href={`tel:${settings.PhoneNo}`}><span className="hover:text-accent transition-colors">{settings.PhoneNo}</span></a> from 9 a.m. to 5 p.m. Eastern Time, Monday to Friday</li>
                        <li>Mail us at {settings.CompanyLegalEntity}, {settings.Address}</li>
                    </ul>

                    <br/><h3 className="text-2xl font-semibold mb-2">How Is My Information Protected?</h3>
                    <p>
                        We have implemented various security measures to safeguard your Personal Information from accidental loss and unauthorized access, use, or disclosure. However, while we take these precautions seriously, we cannot guarantee complete security against unauthorized access.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">What Information Do We Collect?</h3>
                    <p>
                        We collect two primary types of information: Personal Information and Non-Personally Identifiable Information ("NPI").
                    </p>
                    <p>
                        Personal Information refers to details that directly identify you, such as your name, address, email, social security number, date of birth, driver’s license number, phone number, and financial account numbers.
                    </p>
                    <p>
                        NPI includes information that does not identify you individually, such as your IP address, cookies, mobile device identifiers, geo-location, and other technical information. We also gather additional details like your gender, vehicle information, occupation, and residence-related data.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">How Do We Collect Your Information?</h3>
                    <p>
                        We may collect Personal Information from various sources, including when you request to lease or purchase our products, visit our websites, use our mobile apps, or engage with us on social media. We may also obtain information from third parties for marketing analysis or contractual enforcement.
                    </p>
                    <p>
                        NPI is collected through your interactions with our website and other third-party sources, including data from advertising operations.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">Online Activities</h3>
                    <p>
                        When you visit our websites, we may automatically gather information about your activities, including:
                    </p>
                    <ul className="list-disc list-inside space-y-4">
                        <li>Your IP address</li>
                        <li>Your Internet service provider</li>
                        <li>Your location (city, state, country)</li>
                        <li>Your browser type and version</li>
                        <li>Your device information</li>
                        <li>The pages you visit and the links you click</li>
                        <li>The date and time of your visit</li>
                        <li>The website you came from</li>
                        <li>Search queries conducted on our site</li>
                    </ul>
                    <p>
                        This information helps us manage the website, enhance user experience, and improve our marketing strategies.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">Cookies</h3>
                    <p>
                        We may use cookies to personalize your experience. A cookie is a small piece of data stored on your device that helps us remember your preferences and activities on our site. You can manage cookie settings through your browser, but please note that blocking cookies may affect your experience on our website.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">Other Data Collection Technologies</h3>
                    <p>
                        We may also use web beacons, pixel tags, and similar technologies to track your interactions with our site and advertisements. These help us analyze traffic patterns and measure advertising effectiveness.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">Social Networks and Widgets</h3>
                    <p>
                        Our website may include social media plugins that may share information with their associated networks about your visits, regardless of whether you interact with them. Please review their privacy policies for more details.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">Links to Other Websites</h3>
                    <p>
                        Our site may contain links to third-party websites. We do not control these sites, and this Policy does not apply to them. We recommend reviewing their privacy policies.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">How Do We Use and Share Your Information?</h3>
                    <p>
                        We utilize the collected information for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside space-y-4">
                        <li>Processing and fulfilling transactions</li>
                        <li>Providing products and services you request</li>
                        <li>Enforcing contractual obligations</li>
                        <li>Preventing fraud and unauthorized activity</li>
                        <li>Improving our business operations and marketing strategies</li>
                        <li>Communicating updates and offers</li>
                        <li>Administering promotions and surveys</li>
                        <li>Conducting data analysis for better services</li>
                        <li>Complying with legal requirements</li>
                    </ul>
                    <p>
                        We may also de-identify your Personal Information for analytical purposes.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">How Do We Protect Your Information?</h3>
                    <p>
                        We maintain appropriate safeguards to protect your information, but no method can ensure complete security.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">Will this Policy Change?</h3>
                    <p>
                        We may update this Policy periodically. Significant changes will be posted on our website, and additional information will be provided as required by law.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">Your Options Regarding Personal Information</h3>
                    <p>
                        You may request corrections or updates to your Personal Information. For such requests or to opt-out of communications, please contact us as mentioned above.
                    </p>
                    <p>
                        Our site uses online behavioral advertising. You can manage your ad preferences through the Digital Advertising Alliance’s opt-out page.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">How Can You Contact Us?</h3>
                    <p>
                        For inquiries related to your information or this Policy, you can:
                    </p>
                    <ul className="list-disc list-inside space-y-4">
                        <li>Email us at <a href={`mailto:${settings.Email}`}><span className="text-underline hover:text-accent transition-colors">{settings.Email}</span></a></li>
                        <li>Call us at <a href={`tel:${settings.PhoneNo}`}><span className="hover:text-accent transition-colors">{settings.PhoneNo}</span></a> from 9 a.m. to 5 p.m. Eastern Time, Monday to Friday</li>
                        <li>Write to us at {settings.CompanyLegalEntity}, {settings.Address}</li>
                    </ul>

                    <br/><h3 className="text-2xl font-semibold mb-2">Your California Privacy Rights</h3>
                    <p>
                        If you reside in California, you have certain rights regarding your Personal Information under the California Consumer Privacy Act (CCPA).
                    </p>
                    <p>
                        To exercise your rights under the CCPA, please contact us at the email or phone number provided above.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">Data Retention</h3>
                    <p>
                        We will retain your information for as long as necessary to fulfill the purposes outlined in this Policy or as required by law.
                    </p>

                    <br/><h3 className="text-2xl font-semibold mb-2">Effective Date</h3>
                    <p>
                        This Policy is effective as of {settings.PPEffectiveDate}.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
