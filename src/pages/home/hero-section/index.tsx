interface IProps {}

const HeroSection: React.FC<IProps> = () => {
  return (
    <section className="pt-10 pb-20 font-montserrat">
      <div className="container">
        <div className="bg-secondary py-20 lg:py-32 rounded">
          <h1 className="text-3xl font-bold text-center">Hero Section</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
