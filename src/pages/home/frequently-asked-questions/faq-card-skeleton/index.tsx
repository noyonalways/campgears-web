const FaqCardSkeleton: React.FC = () => {
  return (
    <div className="border rounded-lg overflow-hidden animate-pulse">
      <div className="bg-secondary p-3 font-montserrat flex items-center">
        <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
        <div className="w-full h-6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default FaqCardSkeleton;
