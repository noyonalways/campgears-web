import bannerImage from "../../assets/images/about-us/about-us-banner.png";

function AboutUs() {
  return (
    <div className="mx-auto py-12">
      {/* Banner Section */}
      <section
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
        className="bg-cover lg:rounded-lg overflow-hidden"
      >
        <div className="flex items-center justify-center lg:container">
          <div>
            <h1 className="text-center text-3xl font-bold md:text-5xl font-montserrat text-white">
              About Us | CAMPGEARS
            </h1>
            <p className="text-gray-200 font-roboto text-center">
              Welcome to Campers Shop! We are your premier online destination
              for all things camping. Our mission is to provide camping
              enthusiasts with the highest quality gear, equipment, and
              accessories to make every outdoor adventure safe, enjoyable, and
              unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          {/* Team members section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <img
                src="team-member1.jpg"
                alt="Team Member 1"
                className="w-24 h-24 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p>CEO</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="team-member2.jpg"
                alt="Team Member 2"
                className="w-24 h-24 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p>Marketing Manager</p>
              </div>
            </div>
            {/* Add more team members here */}
          </div>

          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          {/* Contact information and map */}
          <div className="flex flex-col space-y-4">
            <p>Phone: +123 456 7890</p>
            <p>Email: info@example.com</p>
            <p>Address: 123 Main St, City, State, ZIP</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.792965545948!2d-73.9855845!3d40.7484405!1m3!1s0x89c24fa5d33f083b%3a0x6c24837f0ce00e0!2sThe%20Metropolitan Museum%of Art!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3a0x6c24837f0ce00e0!2sThe%20Metropolitan%Museum%of Art!5e0!3m2!1sfr!2sbd!4v1641610045116!5m2!1sfr!2sbd"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-red-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
