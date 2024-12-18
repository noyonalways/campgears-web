interface IProps {
  status: string;
}

const DeliveryStatus = ({ status }: IProps) => {
  const bgClass = bgColor(status);

  return (
    <p
      className={`px-2 py-[1px] rounded text-white capitalize text-sm bg-gradient-to-r ${bgClass}`}
    >
      {status}
    </p>
  );
};

const bgColor = (status: string) => {
  switch (status) {
    case "success":
      return "from-primary to-primary/50";
    case "pending":
      return "from-orange-600 to-orange-400";
    case "canceled":
      return "from-red-500 to-red-400";
    default:
      return "from-gray-300 to-gray-200";
  }
};

export default DeliveryStatus;
