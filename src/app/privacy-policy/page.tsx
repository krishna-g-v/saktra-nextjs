import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-25 bg-gray-700 text-white">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="max-w-3xl text-left space-y-4 mb-5">
        <p>
          At Saktra, we are committed to protecting your privacy. This Privacy
          Policy outlines how we collect, use, and safeguard your personal
          information when you visit our website or use our services.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and any other information you voluntarily provide when
          you contact us or fill out forms on our website.
        </p>
        <h2 className="text-2xl font-semibold mt-4">
          How We Use Your Information
        </h2>
        <p>
          We use the information we collect to respond to your inquiries,
          provide our services, improve our website, and send you updates about
          our offerings. We do not sell or rent your personal information to
          third parties.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Cookies</h2>
        <p>
          Our website uses cookies to enhance your browsing experience. You can
          choose to disable cookies in your browser settings, but this may
          affect the functionality of our site.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal
          information. If you wish to exercise these rights, please contact us
          at
          <a
            href="mailto:saktra.gmasoftinc.com"
            className="text-blue-600 underline"
          >
            saktra.gmasoftinc.com
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold mt-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at
          <a
            href="mailto:saktra.gmasoftinc.com"
            className="text-blue-600 underline"
          >
            saktra.gmasoftinc.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
