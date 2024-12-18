import UserAddressCard from "@/components/cards/user-address-card";
import UserDashboardTitle from "@/components/titles/user-dashboard-title";

const UserAddressPage = () => {
  return (
    <div className="bg-secondary lg:p-6 p-4 rounded">
      <UserDashboardTitle title={`My Address Book`} />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <UserAddressCard />
        <UserAddressCard />
        <UserAddressCard />
        <UserAddressCard />
      </div>
    </div>
  );
};

export default UserAddressPage;
