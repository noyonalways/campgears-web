import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="font-montserrat">
      {/* Contact Information */}
      <section className="py-12 bg-gray-100">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
          <div className="space-y-4">
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: info@campgears.com</p>
            <p className="text-lg">
              Address: 123 Camp Street, Adventure City, CA
            </p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097066!2d144.95373531568347!3d-37.81720974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2zTWVsYm91cm5lIFZJQyAzMDAwLCDguJTguK3guLfguKPguJnguY7guK3guKPguLjguYzguITguJTguKnguYwuINC60L7Qu9GD0YrQsNGA0L7QutCw0Y8g0ZbQs9GA0L7QtA!5e0!3m2!1sen!2sus!4v1630871445446!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Campgears, our mission is to provide outdoor enthusiasts with the
            best gear and equipment for their adventures. We believe in the
            power of nature to inspire, rejuvenate, and bring people together.
            Our goal is to support every journey with high-quality products and
            exceptional customer service, ensuring that your outdoor experiences
            are safe, enjoyable, and memorable.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 bg-gray-100">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
              <p className="mt-4 text-sm">
                John has over 20 years of experience in the outdoor industry. He
                started Campgears to share his passion for nature with others.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-600">Product Manager</p>
              <p className="mt-4 text-sm">
                Jane is an expert in outdoor gear and ensures that our product
                selection is top-notch. She loves hiking and exploring new
                trails.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Sam Wilson</h3>
              <p className="text-sm text-gray-600">Customer Support Lead</p>
              <p className="mt-4 text-sm">
                Sam is dedicated to providing excellent customer service. He’s
                always ready to help you find the perfect gear for your next
                adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
