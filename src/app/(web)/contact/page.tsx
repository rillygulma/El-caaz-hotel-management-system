const ContactUs: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex items-center justify-center py-6 md:py-12">
      <div className="container mx-auto px-4 max-w-xl">
        <h1 className="font-heading text-2xl md:text-3xl text-center text-black dark:text-white mb-6 md:mb-8">
          Contact Us
        </h1>
        <p className="text-base md:text-lg text-center text-gray-700 dark:text-gray-300 mb-8 md:mb-10">
          We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
        <form className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 md:p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject of your message"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message here..."
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <div className="text-center">
            <button
              disabled
              type="submit"
              className="btn-primary w-full py-3 text-base"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
