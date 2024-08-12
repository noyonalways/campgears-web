interface IProps {}

const ReviewPulseCard: React.FC<IProps> = () => {
  return (
    <div className="space-y-4 border-t py-6">
      <div className="flex space-x-4">
        <div className="size-12 bg-slate-300 rounded-full ring-2 ring-offset-2 ring-primary animate-pulse"></div>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="flex items-center space-x-1 animate-pulse">
              <div className="h-3 w-60 bg-slate-300 rounded"></div>
            </div>
            <span></span>
          </div>
          <div className="animate-pulse w-24 h-2 bg-slate-300 rounded"></div>
        </div>
      </div>
      <p className="w-full animate-pulse h-2 bg-slate-300 rounded"></p>
    </div>
  );
};

export default ReviewPulseCard;
