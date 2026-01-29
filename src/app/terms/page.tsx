import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mockup.png')] bg-cover bg-center opacity-10" aria-hidden />
        <div className="bg-linear-to-b from-gray-50/70 to-white/90 backdrop-blur-sm py-12 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 text-center">
            <span className="inline-flex items-center justify-center gap-2 px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full mx-auto">
              <FileText className="w-4 h-4" />
              Legal Terms
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Terms and Conditions
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Uniserved Tech Solutions Pvt. Ltd Terms of Service
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto prose prose-lg">
          {/* Terms Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Terms</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              By accessing the website at{" "}
              <a href="http://uniserved.com" className="text-orange-600 hover:text-orange-700 underline">
                http://uniserved.com
              </a>
              , you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you
              are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you
              are prohibited from using or accessing this site. The materials contained in this website are protected by
              applicable copyright and trademark law.
            </p>
          </div>

          {/* Use License Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Use License</h2>
            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                1. Permission is granted to temporarily download one copy of the materials (information or software) on Uniserved
                Tech Solutions Pvt. Ltd's website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>
                  attempt to decompile or reverse engineer any software contained on Uniserved Tech Solutions Pvt. Ltd's website;
                </li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ol>
              <p>
                2. This license shall automatically terminate if you violate any of these restrictions and may be terminated by
                Uniserved Tech Solutions Pvt. Ltd at any time. Upon terminating your viewing of these materials or upon the
                termination of this license, you must destroy any downloaded materials in your possession whether in electronic
                or printed format.
              </p>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Disclaimer</h2>
            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                1. The materials on Uniserved Tech Solutions Pvt. Ltd's website are provided on an 'as is' basis. Uniserved Tech
                Solutions Pvt. Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                2. Further, Uniserved Tech Solutions Pvt. Ltd does not warrant or make any representations concerning the
                accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such
                materials or on any sites linked to this site.
              </p>
            </div>
          </div>

          {/* Limitations Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Limitations</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              In no event shall Uniserved Tech Solutions Pvt. Ltd or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Uniserved Tech Solutions Pvt. Ltd's website, even if Uniserved Tech Solutions
              Pvt. Ltd or a Uniserved Tech Solutions Pvt. Ltd authorized representative has been notified orally or in writing of
              the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or
              limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </div>

          {/* Accuracy of materials Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Accuracy of materials</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The materials appearing on Uniserved Tech Solutions Pvt. Ltd website could include technical, typographical, or
              photographic errors. Uniserved Tech Solutions Pvt. Ltd does not warrant that any of the materials on its website
              are accurate, complete or current. Uniserved Tech Solutions Pvt. Ltd may make changes to the materials contained on
              its website at any time without notice. However Uniserved Tech Solutions Pvt. Ltd does not make any commitment to
              update the materials.
            </p>
          </div>

          {/* Links Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Links</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Uniserved Tech Solutions Pvt. Ltd has not reviewed all of the sites linked to its website and is not responsible for
              the contents of any such linked site. The inclusion of any link does not imply endorsement by Uniserved Tech
              Solutions Pvt. Ltd of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          {/* Modifications Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Modifications</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Uniserved Tech Solutions Pvt. Ltd may revise these terms of service for its website at any time without notice. By
              using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          {/* Governing Law Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Governing Law</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Maharashtra and you
              irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>

          {/* Cancellation and Refund Policy Section */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Cancellation and Refund Policy</h2>
            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                Due to the nature of our services—which involve allocation of personnel, logistics coordination, and
                time-sensitive field operations—<strong>all confirmed service bookings are non-cancellable and non-refundable</strong> once
                scheduled and accepted by our system or customer support team.
              </p>
              <p>
                If the customer is unavailable at the scheduled time and location, and our service personnel are unable to
                complete the task due to such absence, the service shall be deemed <strong>delivered</strong>. No refunds shall be
                applicable in such cases.
              </p>
              <p>
                Customers may request a <strong>rescheduling</strong> at least 24 hours before the scheduled time. Rescheduling is subject
                to availability and may attract additional charges.
              </p>
              <p>
                In exceptional scenarios—such as our service agent failing to arrive, or an internal operational failure—Uniserved
                may, at its sole discretion, offer a partial or full refund, or reschedule the service at no extra cost.
              </p>
              <p>
                Where refunds are approved, they will be processed within <strong>7–10 business days</strong> to the original payment method,
                after deduction of any applicable fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
