import { ShieldCheck } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mockup.png')] bg-cover bg-center opacity-10" aria-hidden />
        <div className="bg-gradient-to-b from-gray-50/70 to-white/90 backdrop-blur-sm py-12 px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 text-center">
            <span className="inline-flex items-center justify-center gap-2 px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full mx-auto">
              <ShieldCheck className="w-4 h-4" />
              Privacy & Data Protection
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Uniserved recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto prose prose-lg">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              This Policy describes how we treat user information we collect on{" "}
              <a href="http://uniserved.com" className="text-orange-600 hover:text-orange-700 underline">
                http://uniserved.com
              </a>{" "}
              and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our
              online customers. By visiting and/or using our website, you agree to this Privacy Policy.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Uniserved and http://uniserved.com is a property of Uniserved Tech Solutions Private Limited, an Indian Company
              registered under the Companies Act, 2013 having its registered Office no. 802, RUPA SOLITAIRE, Bldg. No, A-1, MBP
              Rd, Sector 1, MIDC Industrial Area, Navi Mumbai, 400710, Maharashtra, India.
            </p>
          </div>

          {/* Information we collect */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information we collect</h2>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact information.</h3>
                <p>
                  We might collect your name, email, mobile number, phone number, street, city, state, pincode, country and ip
                  address.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment and billing information.</h3>
                <p>
                  We might collect your billing name, billing address and payment method when you buy a ticket. We NEVER collect
                  your credit card number or credit card expiry date or other details pertaining to your credit card on our
                  website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Information you post.</h3>
                <p>
                  We collect information you post in a public space on our website or on a third-party social media site
                  belonging to Uniserved or http://uniserved.com/.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Demographic information.</h3>
                <p>
                  We may collect demographic information about you or any other information provided by your during the use of our
                  website. We might collect this as a part of a survey also.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Other information.</h3>
                <p>
                  If you use our website, we may collect information about your IP address and the browser you're using. We might
                  look at what site you came from, duration of time spent on our website, pages accessed or what site you visit
                  when you leave us. We might also collect the type of mobile device you are using, or the version of the
                  operating system your computer or device is running.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">We collect information in different ways.</h3>
                <ul className="space-y-3 list-disc list-inside">
                  <li>
                    <strong>We collect information directly from you.</strong> We collect information directly from you when you
                    register or fill any form or survey on the website. We also collect information if you post a comment on our
                    websites or ask us a question through phone or email.
                  </li>
                  <li>
                    <strong>We collect information from you passively.</strong> We use tracking tools like Google Analytics,
                    Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website.
                  </li>
                  <li>
                    <strong>We get information about you from third parties.</strong> For example, if you use an integrated social
                    media feature on our websites. The third-party social media site will give us certain information about you.
                    This could include your name and email address.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use of your personal information */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Use of your personal information</h2>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">We use information to contact you:</h3>
                <p>
                  We might use the information you provide to contact you for confirmation of a purchase on our website or for
                  other promotional purposes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  We use information to respond to your requests or questions.
                </h3>
                <p>We might use your information to confirm your registration for an event or contest.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">We use information to improve our products and services.</h3>
                <p>
                  We might use your information to customize your experience with us. This could include displaying content based
                  upon your preferences.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">We use information to look at site trends and customer interests.</h3>
                <p>
                  We may use your information to make our website and products better. We may combine information we get from you
                  with information about you we get from third parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">We use information for security purposes.</h3>
                <p>We may use information to protect our company, our customers, or our websites.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">We use information for marketing purposes.</h3>
                <p>
                  We might send you information about special promotions or offers. We might also tell you about new features or
                  products. These might be our own offers or products, or third-party offers or products we think you might find
                  interesting. Or, for example, if you buy any services from us we'll enroll you in our newsletter.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">We use information to send you transactional communications.</h3>
                <p>We might send you emails or SMS about your account or your booked tickets.</p>
              </div>

              <p className="mt-4">We use information as otherwise permitted by law.</p>
            </div>
          </div>

          {/* Sharing of information */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sharing of information with third-parties</h2>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  We will share information with third parties who perform services on our behalf.
                </h3>
                <p>
                  We share information with vendors who help us manage our online registration process or payment processors or
                  transactional message processors. Some vendors may be located outside of India.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">We will share information with our business partners.</h3>
                <p>
                  This includes a third party who provide or sponsor an event, or who operates a venue where we hold events. Our
                  partners use the information we give them as described in their privacy policies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  We may share information if we think we have to in order to comply with the law or to protect ourselves.
                </h3>
                <p>
                  We will share information to respond to a court order or subpoena. We may also share it if a government agency
                  or investigatory body requests. Or, we might also share information when we are investigating potential fraud.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  We may share information with any successor to all or part of our business.
                </h3>
                <p>
                  For example, if part of our business is sold we may give our customer list as part of that transaction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  We may share your information for reasons not described in this policy.
                </h3>
                <p>We will tell you before we do this.</p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Opt-Out</h3>
                <p>
                  <strong>You can opt out of receiving our marketing emails.</strong> To stop receiving our promotional emails,
                  please click on the Unsubscribe links included in the emails.
                </p>
              </div>
            </div>
          </div>

          {/* Third party sites */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Third party sites</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              If you click on one of the links to third party websites, you may be taken to websites we do not control. This
              policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites
              carefully. We are not responsible for these third party sites.
            </p>
          </div>

          {/* Grievance Officer */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Grievance Officer</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4">
              In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the
              Grievance Officer are provided below:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-base font-semibold text-gray-900 mb-2">Mr. Abhijit Kshirsagar</p>
              <div className="space-y-2 text-base text-gray-600">
                <p>Office no. 802, RUPA SOLITAIRE, Bldg. No, A-1,</p>
                <p>A-1, MBP Rd, Sector 1, MIDC Industrial Area,</p>
                <p>Navi Mumbai, 400710, Maharashtra, India.</p>
                <p className="mt-4">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:grievances@uniserved.com" className="text-orange-600 hover:text-orange-700 underline">
                    grievances@uniserved.com
                  </a>
                </p>
              </div>
            </div>
            <p className="text-base text-gray-600 leading-relaxed mt-4">
              If you have any questions about this Policy or other privacy concerns, you can also email us at{" "}
              <a href="mailto:privacy@uniserved.com" className="text-orange-600 hover:text-orange-700 underline">
                privacy@uniserved.com
              </a>
            </p>
          </div>

          {/* Updates to this policy */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to this policy</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              This Privacy Policy was last updated on 10.09.2019. From time to time we may change our privacy practices. We will
              notify you of any material changes to this policy as required by law. We will also post an updated copy on our
              website. Please check our site periodically for updates.
            </p>
          </div>

          {/* Jurisdiction */}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Jurisdiction</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the
              website's terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the
              laws of India.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
