import { Skeleton } from "@/components/ui/skeleton";

const ProfileLoading = () => {
  return (
    <div className="bg-secondary lg:p-6 p-4 rounded">
      {/* Title Skeleton */}
      <div className="h-6 w-2/4 lg:w-1/4 bg-muted rounded mb-6">
        <Skeleton className="h-6 w-full" />
      </div>

      <div className="space-y-4">
        {/* Profile Info Section Skeleton */}
        <div className="bg-background p-4 lg:p-6 rounded">
          <div className="h-6 w-1/4 bg-muted rounded mb-6">
            <Skeleton className="h-6 w-full " />
          </div>
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-8 w-16 rounded " />
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm lg:text-base border-b border-dashed pb-4 mb-4">
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-5 w-2/5" />
          </div>
          <Skeleton className="h-4 w-full  mb-1" />
          <Skeleton className="h-4 w-3/4 " />
        </div>

        {/* Profile Details Section Skeleton */}
        <div className="bg-background p-4 lg:p-6 rounded grid lg:grid-cols-6 gap-y-6 lg:gap-y-0">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="h-6 w-1/3  rounded mb-6">
                <Skeleton className="h-6 w-rounded-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-3/5" />
                <Skeleton className="h-5 w-4/5" />
                <Skeleton className="h-5 w-1/2" />
              </div>
            </div>

            <div>
              <div className="h-6 w-1/3  rounded mb-6">
                <Skeleton className="h-6 w-full " />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-4/5" />
                <Skeleton className="h-5 w-3/5" />
              </div>
            </div>
          </div>

          {/* Profile Image Section Skeleton */}
          <div className="lg:col-span-2 w-full flex justify-center items-center">
            <Skeleton className="h-48 w-48 rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLoading;
