const FooterHeader = () => {
  return (
    <>
      <div className="space-y-4">
        <img src="/images/LogoWhite.png" alt="" />
        <p className="text-gray-400 text-base lg:text-lg font-mono ml-1">
          We are technology experts who are passionately excited about the
          latest digital trends in web technologies.
        </p>
      </div>
      <div className="mt-4 text-white">
        <div className="flex items-center space-x-5 py-5 lg:py-10 border-b border-gray-700">
          <h1 className="text-lg font-mono text-indigo-300 capitalize">
            ADDRESS
          </h1>
          <p className="text-base font-mono text-gray-200">
            L-148, 5th Main Rd, Sector 6 HSR Layout, Bengaluru, Karnataka 560102
          </p>
        </div>

        <div className="flex items-center space-x-7 py-5 lg:py-10 border-b border-gray-700">
          <h1 className="text-lg font-mono text-indigo-300 capitalize">
            PHONES
          </h1>
          <p className="text-base font-mono text-gray-200">
            +91 8310525962 / +91 8296320356
          </p>
        </div>
        <div className="flex items-center space-x-8 py-5 lg:py-10 border-b border-gray-700">
          <h1 className="text-lg font-mono text-indigo-300 capitalize">
            EMAILS
          </h1>
          <p className="text-base font-mono text-gray-200">
            pavan.pattinson@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterHeader;
