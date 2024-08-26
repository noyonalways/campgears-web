import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import bannerImage from "../../assets/images/about-us/about-us-banner.png";
import PageTitle from "../../components/page-title";

function AboutUs() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <PageTitle title="About Us - Campgears" />

      {/* Banner Section */}
      <section className="relative pt-12 pb-20">
        <div className="container mx-auto text-center">
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.637)), url(${bannerImage})`,
            }}
            className="bg-cover bg-center h-[400px] flex items-center justify-center rounded-md shadow-md"
          >
            <div className="p-8 rounded-md shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-gray-100">
                About Us | CAMPGEARS
              </h1>
              <p className="max-w-2xl mx-auto font-light text-gray-200">
                Welcome to Campgears! We are your premier online destination for
                all things camping. Our mission is to provide camping
                enthusiasts with the highest quality gear, equipment, and
                accessories to make every outdoor adventure safe, enjoyable, and
                unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pb-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-gray-600">
            At Campgears, our mission is to provide outdoor enthusiasts with the
            best gear and equipment for their adventures. We believe in the
            power of nature to inspire, rejuvenate, and bring people together.
            Our goal is to support every journey with high-quality products and
            exceptional customer service, ensuring that your outdoor experiences
            are safe, enjoyable, and memorable.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="bg-gray-50 rounded-lg shadow-sm p-12 text-center">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">
              Contact Information
            </h2>
            <div className="text-left flex flex-col md:flex-row lg:justify-center space-y-4 md:space-y-0 md:space-x-16 text-lg text-gray-700">
              <p>
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong> info@campgears.com
              </p>
              <p>
                <strong>Address:</strong> 123 Camp Street, Adventure City, CA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
            Our Location
          </h2>
          <div className="w-full h-96 overflow-hidden rounded-md shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097066!2d144.95373531568347!3d-37.81720974202192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2zTWVsYm91cm5lIFZJQyAzMDAwLCDguJTguK3guLfguKPguJnguY7guK3guKPguLjguYzguITguJTguKnguYwuINC60L7Qu9GD0YrQsNGA0L7QutCw0Y8g0ZbQs9GA0L7QtA!5e0!3m2!1sen!2sus!4v1630871445446!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="pb-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img
                src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="John Doe"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500">Founder & CEO</p>
              <p className="mt-4 text-gray-600">
                John has over 20 years of experience in the outdoor industry. He
                started Campgears to share his passion for nature with others.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Jane Smith"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-500">Product Manager</p>
              <p className="mt-4 text-gray-600">
                Jane is an expert in outdoor gear and ensures that our product
                selection is top-notch. She loves hiking and exploring new
                trails.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Sam Wilson"
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Sam Wilson
              </h3>
              <p className="text-gray-500">Customer Support Lead</p>
              <p className="mt-4 text-gray-600">
                Sam is dedicated to providing excellent customer service. He’s
                always ready to help you find the perfect gear for your next
                adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg text-center p-12">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-8 text-3xl text-gray-500">
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-pink-600 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default AboutUs;
