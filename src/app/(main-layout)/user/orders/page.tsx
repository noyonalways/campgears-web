import UserDashboardTitle from "@/components/titles/user-dashboard-title";

const UserOrdersPage = () => {
  return (
    <div className="bg-secondary lg:p-6 p-4 rounded">
      <UserDashboardTitle title={`My Orders`} />
    </div>
  );
};

export default UserOrdersPage;
