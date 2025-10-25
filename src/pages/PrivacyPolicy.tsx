import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
                  Privacy Policy
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
                    Information We Collect
                  </h2>
                  <p className="text-base sm:text-lg">
                    We collect information that you provide directly to us, including name, email address,
                    phone number, postal address, and payment information when you register for our services.
                    We also automatically collect certain information about your device and how you interact
                    with our services.
                  </p>
                </section>

                <section className="animate-slide-up stagger-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">2</span>
                    How We Use Your Information
                  </h2>
                  <p className="text-base sm:text-lg">
                    We use the information we collect to provide, maintain, and improve our services, process
                    transactions, send you technical notices and support messages, respond to your comments
                    and questions, and communicate with you about products, services, and events.
                  </p>
                </section>

                <section className="animate-slide-up stagger-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">3</span>
                    Information Sharing
                  </h2>
                  <p className="text-base sm:text-lg">
                    We do not share your personal information with third parties except as described in this
                    policy. We may share information with service providers who perform services on our behalf,
                    in response to legal requests, to protect rights and safety, and in connection with business
                    transfers.
                  </p>
                </section>

                <section className="animate-slide-up stagger-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">4</span>
                    Data Security
                  </h2>
                  <p className="text-base sm:text-lg">
                    We implement appropriate technical and organizational measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However,
                    no method of transmission over the Internet is 100% secure.
                  </p>
                </section>

                <section className="animate-slide-up stagger-5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">5</span>
                    Your Rights
                  </h2>
                  <p className="text-base sm:text-lg">
                    You have the right to access, update, or delete your personal information. You may also
                    have the right to restrict or object to certain processing of your data. To exercise these
                    rights, please contact us using the information provided below.
                  </p>
                </section>

                <section className="animate-slide-up stagger-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">6</span>
                    Cookies
                  </h2>
                  <p className="text-base sm:text-lg">
                    We use cookies and similar tracking technologies to collect information about your browsing
                    activities. You can control cookies through your browser settings, but disabling cookies may
                    affect your ability to use certain features of our services.
                  </p>
                </section>

                <section className="animate-slide-up stagger-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">7</span>
                    Changes to This Policy
                  </h2>
                  <p className="text-base sm:text-lg">
                    We may update this privacy policy from time to time. We will notify you of any changes by
                    posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section className="animate-slide-up stagger-2 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">8</span>
                    Contact Us
                  </h2>
                  <p className="text-base sm:text-lg mb-4">
                    If you have any questions about this privacy policy, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p className="text-purple-400 font-semibold">📧 privacy@zainabconnection.com</p>
                    <p className="text-blue-400 font-semibold">📞 +91 1800 123 4567</p>
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

export default PrivacyPolicy;
