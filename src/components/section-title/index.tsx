interface IProps {
  title: string;
  description: string;
}

const SectionTitle: React.FC<IProps> = ({ title, description }) => {
  return (
    <div className="text-center space-y-3 mb-10">
      <h1 className="text-2xl font-bold font-montserrat">{title}</h1>
      <p className="w-full lg:max-w-lg mx-auto font-roboto">{description}</p>
    </div>
  );
};

export default SectionTitle;
