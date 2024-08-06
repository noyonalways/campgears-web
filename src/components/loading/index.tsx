interface IProps {}

const Loading: React.FC<IProps> = () => {
  return (
    <>
      <div className="size-16 border-[6px] text-primary text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-primary rounded-full">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          className="animate-ping"
        ></svg>
      </div>
    </>
  );
};

export default Loading;
