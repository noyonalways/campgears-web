interface IProps {}

const HeroSection: React.FC<IProps> = () => {
  return (
    <section className="pt-2 lg:pt-10 pb-20 font-montserrat">
      <div className="container">
        <div className="rounded overflow-hidden">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-[60%]">
              <img
                src="https://i.ibb.co/mHG84n0/new-tents.png"
                alt="tents-banner-image"
              />
            </div>
            <div className="flex-1">
              <div className="flex">
                <div className="w-full">
                  <img
                    src="https://i.ibb.co/bHQbgdw/bottele-poster.png"
                    alt="water-bottle-banner-image"
                  />
                </div>
                <div className="w-full">
                  <img
                    src="https://i.ibb.co/2hpjLcn/wemon-poster.jpg"
                    alt="water-bottle-banner-image"
                  />
                </div>
              </div>
              <div className="bg-violet-500 w-full h-48"></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[60%] bg-green-500"></div>
            <div className="flex flex-1">
              <div className="bg-orange-500 w-full">
                <img
                  src="https://i.ibb.co/2hpjLcn/wemon-poster.jpg"
                  alt="water-bottle-banner-image"
                />
              </div>
              <div className="bg-lime-500  w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// https://i.ibb.co/99w7mJ3/tents-poster.png
// https://i.ibb.co/2hpjLcn/wemon-poster.jpg
// https://i.ibb.co/bHQbgdw/bottele-poster.png
