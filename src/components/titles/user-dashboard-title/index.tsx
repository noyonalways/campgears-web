interface IProps {
  title: string;
}

const UserDashboardTitle = ({ title }: IProps) => {
  return (
    <h1 className="pb-2 border-b-2 border-primary border-dashed inline-block text-xl md:text-2xl font-bold mb-6">
      {title}
    </h1>
  );
};

export default UserDashboardTitle;
