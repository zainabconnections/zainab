import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
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
                  Refund Policy
                </span>
              </h1>
              <p className="text-gray-400 text-sm sm:text-base">Last updated: March 2025</p>
            </div>

            {/* Content Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 p-6 sm:p-8 lg:p-12 shadow-2xl">
              <div className="space-y-8 sm:space-y-10 text-gray-300 leading-relaxed">
                <section className="animate-slide-up stagger-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 sm:p-8 border border-green-500/20">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-sm font-bold">1</span>
                    30-Day Satisfaction Guarantee
                  </h2>
                  <p className="text-base sm:text-lg">
                    We stand behind our service with a 30-day satisfaction guarantee. If you're not completely
                    satisfied with Zainab Connection within the first 30 days of service, we'll refund your
                    monthly subscription fee, no questions asked.
                  </p>
                </section>

                <section className="animate-slide-up stagger-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">2</span>
                    Eligible Refunds
                  </h2>
                  <p className="text-base sm:text-lg mb-4">Refunds are available for:</p>
                  <ul className="space-y-3 text-base sm:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Monthly subscription fees within the first 30 days of service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Duplicate payments or billing errors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Service outages exceeding our SLA commitments (for business plans)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span>Prepaid services that were not delivered as promised</span>
                    </li>
                  </ul>
                </section>

                <section className="animate-slide-up stagger-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">3</span>
                    Non-Refundable Items
                  </h2>
                  <p className="text-base sm:text-lg mb-4">The following are non-refundable:</p>
                  <ul className="space-y-3 text-base sm:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Installation fees (waived for most plans)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Hardware purchases (routers, modems) unless defective</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Services used beyond the 30-day guarantee period</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">×</span>
                      <span>Early termination fees for contract-based services</span>
                    </li>
                  </ul>
                </section>

                <section className="animate-slide-up stagger-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">4</span>
                    How to Request a Refund
                  </h2>
                  <p className="text-base sm:text-lg">
                    To request a refund, please contact our customer support team at support@zainabconnection.com
                    or call +91 1800 123 4567. Please provide your account number and reason for the refund request.
                    Refund requests are processed within 7-10 business days.
                  </p>
                </section>

                <section className="animate-slide-up stagger-5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">5</span>
                    Refund Processing Time
                  </h2>
                  <p className="text-base sm:text-lg">
                    Once approved, refunds are typically processed within 7-10 business days. The refund will be
                    credited to the original payment method. Depending on your bank or credit card company, it may
                    take an additional 5-7 business days for the refund to appear in your account.
                  </p>
                </section>

                <section className="animate-slide-up stagger-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">6</span>
                    Service Cancellation
                  </h2>
                  <p className="text-base sm:text-lg">
                    You may cancel your service at any time by contacting us. If you cancel within the 30-day
                    guarantee period, you'll receive a full refund. After 30 days, you can cancel without penalty,
                    but no refund will be provided for the current billing period.
                  </p>
                </section>

                <section className="animate-slide-up stagger-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">7</span>
                    Defective Hardware
                  </h2>
                  <p className="text-base sm:text-lg">
                    If any hardware provided by us (routers, modems) is defective, we'll replace it free of charge
                    within the warranty period. If you prefer a refund, it will be provided upon return of the
                    defective hardware.
                  </p>
                </section>

                <section className="animate-slide-up stagger-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">8</span>
                    Contact Information
                  </h2>
                  <p className="text-base sm:text-lg mb-4">
                    For questions about our refund policy or to initiate a refund, please contact us:
                  </p>
                  <div className="space-y-2 text-base sm:text-lg">
                    <p>📧 Email: support@zainabconnection.com</p>
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

export default RefundPolicy;
