const FooterContact = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-mono text-gray-500 py-5 lg:py-0 lg:pb-5">
          Contact Me
        </h1>

        <div className="">
          <form className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="py-3 lg:py-5 pl-3 font-mono text-gray-100 focus:outline-none bg-gray-800"
            />
            <input
              type="text"
              placeholder="Email"
              className="py-3 pl-3 lg:py-5 text-gray-100 font-mono focus:outline-none bg-gray-800"
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Message"
              className="py-3 pl-3 text-gray-100 lg:py-5 font-mono focus:outline-none bg-gray-800"
            ></textarea>
            <button className="py-3 bg-[#6D5BC9] hover:bg-[#7662db] font-mono text-gray-100 focus:outline-none">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
