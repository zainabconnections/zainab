import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto animate-fade-in">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Terms & Conditions
                </span>
              </h1>
              <p className="text-gray-400 text-sm sm:text-base">Last updated: March 2025</p>
            </div>

            {/* Content Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-6 sm:p-8 lg:p-12 shadow-2xl">
              <div className="space-y-8 sm:space-y-10 text-gray-300 leading-relaxed">
                <section className="animate-slide-up stagger-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">1</span>
                    Acceptance of Terms
                  </h2>
                  <p className="text-base sm:text-lg">
                    By accessing or using Zainab Connection's services, you agree to be bound by these Terms
                    and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section className="animate-slide-up stagger-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">2</span>
                    Service Description
                  </h2>
                  <p className="text-base sm:text-lg">
                    Zainab Connection provides high-speed fiber internet services. We strive to provide
                    reliable and fast connectivity, but actual speeds may vary based on various factors
                    including network congestion, distance from equipment, and hardware limitations.
                  </p>
                </section>

                <section className="animate-slide-up stagger-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">3</span>
                    Account Registration
                  </h2>
                  <p className="text-base sm:text-lg">
                    To use our services, you must register for an account and provide accurate, complete
                    information. You are responsible for maintaining the security of your account credentials
                    and for all activities that occur under your account.
                  </p>
                </section>

                <section className="animate-slide-up stagger-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">4</span>
                    Acceptable Use Policy
                  </h2>
                  <p className="text-base sm:text-lg mb-4">You agree not to use our services to:</p>
                  <ul className="space-y-3 text-base sm:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Engage in illegal activities or violate any laws</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Distribute malware, spam, or harmful content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Interfere with or disrupt our services or networks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Attempt unauthorized access to systems or data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Infringe on intellectual property rights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>Engage in excessive bandwidth usage that affects other users</span>
                    </li>
                  </ul>
                </section>

                <section className="animate-slide-up stagger-5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">5</span>
                    Payment Terms
                  </h2>
                  <p className="text-base sm:text-lg">
                    Services are billed monthly in advance. Payment is due on the date specified in your
                    billing statement. Failure to pay may result in service suspension or termination.
                    We reserve the right to change our pricing with 30 days' notice.
                  </p>
                </section>

                <section className="animate-slide-up stagger-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">6</span>
                    Service Availability
                  </h2>
                  <p className="text-base sm:text-lg">
                    While we strive for 99.9% uptime, we do not guarantee uninterrupted service. Scheduled
                    maintenance, emergency repairs, and factors beyond our control may cause temporary
                    service interruptions. We will provide advance notice of scheduled maintenance when
                    possible.
                  </p>
                </section>

                <section className="animate-slide-up stagger-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">7</span>
                    Limitation of Liability
                  </h2>
                  <p className="text-base sm:text-lg">
                    To the maximum extent permitted by law, Zainab Connection shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages resulting from your
                    use of our services. Our total liability shall not exceed the amount paid by you for
                    services in the month preceding the claim.
                  </p>
                </section>

                <section className="animate-slide-up stagger-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">8</span>
                    Termination
                  </h2>
                  <p className="text-base sm:text-lg">
                    We may suspend or terminate your service at any time for violation of these terms,
                    non-payment, or any other reason at our sole discretion. You may cancel your service
                    at any time by contacting customer support.
                  </p>
                </section>

                <section className="animate-slide-up stagger-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">9</span>
                    Privacy
                  </h2>
                  <p className="text-base sm:text-lg">
                    Your use of our services is also governed by our Privacy Policy. Please review our
                    Privacy Policy to understand how we collect, use, and protect your information.
                  </p>
                </section>

                <section className="animate-slide-up stagger-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">10</span>
                    Changes to Terms
                  </h2>
                  <p className="text-base sm:text-lg">
                    We reserve the right to modify these terms at any time. We will provide notice of
                    material changes via email or through our website. Continued use of our services
                    after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section className="animate-slide-up stagger-5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">11</span>
                    Governing Law
                  </h2>
                  <p className="text-base sm:text-lg">
                    These terms are governed by the laws of India. Any disputes arising from these terms
                    or your use of our services shall be subject to the exclusive jurisdiction of courts
                    in Mumbai, Maharashtra.
                  </p>
                </section>

                <section className="animate-slide-up stagger-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">12</span>
                    Contact Information
                  </h2>
                  <p className="text-base sm:text-lg mb-4">
                    For questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="space-y-2 text-base sm:text-lg">
                    <p>📧 Email: legal@zainabconnection.com</p>
                    <p>📞 Phone: +91 1800 123 4567</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
