import UserDashboardTitle from "@/components/titles/user-dashboard-title";

const UserWishlistPage = () => {
  return (
    <div className="bg-secondary lg:p-6 p-4 rounded">
      <UserDashboardTitle title={`My Wishlist`} />
    </div>
  );
};

export default UserWishlistPage;
