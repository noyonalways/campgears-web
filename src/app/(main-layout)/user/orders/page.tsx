import UserOrderHistoryCard from "@/components/cards/user-order-history-card";
import UserDashboardTitle from "@/components/titles/user-dashboard-title";

const UserOrdersPage = () => {
  return (
    <div className="bg-secondary lg:p-6 p-4 rounded">
      <UserDashboardTitle title={`My Orders History`} />
      <div className="space-y-4">
        <UserOrderHistoryCard />
        <UserOrderHistoryCard />
        <UserOrderHistoryCard />
        <UserOrderHistoryCard />
        <UserOrderHistoryCard />
        <UserOrderHistoryCard />
        <UserOrderHistoryCard />
        <UserOrderHistoryCard />
      </div>
    </div>
  );
};

export default UserOrdersPage;
