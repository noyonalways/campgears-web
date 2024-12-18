import WishlistCard from "@/components/cards/wishlist-card";
import UserDashboardTitle from "@/components/titles/user-dashboard-title";

const UserWishlistPage = () => {
  return (
    <div className="bg-secondary lg:p-6 p-4 rounded w-full">
      <UserDashboardTitle title={`My Wishlist History`} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 w-full">
        <WishlistCard cardClass="!bg-background" buttonClass="!bg-secondary" />
        <WishlistCard cardClass="!bg-background" buttonClass="!bg-secondary" />
        <WishlistCard cardClass="!bg-background" buttonClass="!bg-secondary" />
        <WishlistCard cardClass="!bg-background" buttonClass="!bg-secondary" />
      </div>
    </div>
  );
};

export default UserWishlistPage;
