import UserDashboardTitle from "@/components/titles/user-dashboard-title";

const UserProfilePage = () => {
  return (
    <div className="bg-secondary lg:p-6 p-4 rounded">
      <UserDashboardTitle title={`My Profile`} />
    </div>
  );
};

export default UserProfilePage;
