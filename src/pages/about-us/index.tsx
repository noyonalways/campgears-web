import bannerImage from "../../assets/images/about-us/about-us-banner.png";
import PageTitle from "../../components/page-title";

function AboutUs() {
  return (
    <>
      <PageTitle title="About Us - Campgears" />
      <div className="mx-auto py-12">
        {/* Banner Section */}
        <section className="lg:container">
          <div
            style={{
              backgroundImage: `url(${bannerImage})`,
            }}
            className="bg-cover lg:rounded-lg overflow-hidden py-44"
          >
            <div className="flex items-center justify-center lg:container">
              <div>
                <h1 className="text-center text-3xl font-bold md:text-5xl font-montserrat text-white mb-4">
                  About Us | CAMPGEARS
                </h1>
                <p className="font-roboto text-center max-w-2xl mx-auto text-gray-100">
                  Welcome to Campers Shop! We are your premier online
                  destination for all things camping. Our mission is to provide
                  camping enthusiasts with the highest quality gear, equipment,
                  and accessories to make every outdoor adventure safe,
                  enjoyable, and unforgettable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
