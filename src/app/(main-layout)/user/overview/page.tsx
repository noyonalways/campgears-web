import UserDashboardTitle from "@/components/titles/user-dashboard-title";
import {
  CompletedOrderIcon,
  PendingOrderIcon,
  TotalOrderIcon,
  WishlistIcon,
} from "@/icons";

const DashboardOverviewPage = () => {
  return (
    <div className="bg-secondary lg:p-6 p-4 rounded">
      <UserDashboardTitle title={`My Dashboard`} />
      <div className="space-y-6">
        <div>
          <p className="mb-1">
            Hello,
            <span className="font-semibold">{`Test User`}</span>
          </p>
          <p className="text-muted-foreground">
            From your My Account Dashboard you have the ability to view a
            snapshot of your recent account activity and update your account
            information. Select a link below to view or edit information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 md:gap-4">
          <div className="flex items-start space-x-2 bg-background rounded-md p-4 relative overflow-hidden group">
            <TotalOrderIcon />
            <div className="absolute -right-5 group-hover:-rotate-[15deg] group-hover:-translate-x-2 group-hover:scale-110 duration-300">
              <TotalOrderIcon color="#e6e6e6" />
            </div>

            <div className="z-10">
              <h3 className="text-muted-foreground">Total Orders</h3>
              <h2 className="text-lg font-semibold">322</h2>
            </div>
          </div>
          <div className="flex items-start space-x-2 bg-background rounded-md p-4 relative overflow-hidden group">
            <CompletedOrderIcon />
            <div className="absolute -right-5 group-hover:-rotate-[15deg] group-hover:-translate-x-2 group-hover:scale-110 duration-300 ">
              <CompletedOrderIcon color="#e6e6e6" />
            </div>

            <div className="z-10">
              <h3 className="text-muted-foreground">Completed Orders</h3>
              <h2 className="text-lg font-semibold">322</h2>
            </div>
          </div>
          <div className="flex items-start space-x-2 bg-background rounded-md p-4 relative overflow-hidden group">
            <PendingOrderIcon />
            <div className="absolute -right-5 group-hover:-rotate-[15deg] group-hover:-translate-x-2 group-hover:scale-110 duration-300 ">
              <PendingOrderIcon color="#e6e6e6" />
            </div>

            <div className="z-10">
              <h3 className="text-muted-foreground">Pending Orders</h3>
              <h2 className="text-lg font-semibold">322</h2>
            </div>
          </div>
          <div className="flex items-start space-x-2 bg-background rounded-md p-4 relative overflow-hidden group">
            <WishlistIcon />
            <div className="absolute -right-5 group-hover:-rotate-[15deg] group-hover:-translate-x-2 group-hover:scale-110 duration-300 ">
              <WishlistIcon color="#e6e6e6" />
            </div>

            <div className="z-10">
              <h3 className="text-muted-foreground">Total Wishlist</h3>
              <h2 className="text-lg font-semibold">322</h2>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Account Information</h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-6">
              <div>
                <h4 className="pb-2 border-b border-dashed mb-2">
                  Contact Information
                </h4>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Test User</p>
                  <p className="text-sm text-muted-foreground">
                    user@example.com
                  </p>
                  <button className="text-primary text-sm">
                    Change Password
                  </button>
                </div>
              </div>
              <div>
                <h4 className="pb-2 border-b border-dashed mb-2">
                  Newsletters
                </h4>
                <p className="text-sm text-muted-foreground">
                  You are currently not subscribed to any newsletter
                </p>
              </div>
            </div>
            <div>
              <h4 className="pb-2 border-b border-dashed mb-2">Address Book</h4>
              <div className="grid gap-y-4 lg:gap-y-0 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Default Billing Address
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You have not set a default billing address.
                  </p>
                  <button className="text-primary text-sm">Edit Address</button>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Default Shipping Address
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You have not set a default shipping address.
                  </p>
                  <button className="text-primary text-sm">Edit Address</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverviewPage;
