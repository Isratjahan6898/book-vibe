

const Contact = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-primary my-[30px] text-5xl">contact section</h1>

            <section id="contact" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-6">Have a question or suggestion? We'd love to hear from you!</p>
        <form  className="max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
             
              required
              className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              
              required
              className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
            
              required
              className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
   

        </div>
    );
};

export default Contact;