import UserDashboardTitle from "@/components/titles/user-dashboard-title";
import { Mail, MapPin, SquareCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UserProfilePage = () => {
  return (
    <div className="bg-secondary lg:p-6 p-4 rounded">
      <UserDashboardTitle title={`My Profile`} />
      <div className="space-y-4">
        <div className="bg-background p-4 lg:p-6 rounded">
          <h2 className="mb-6 text-xl font-semibold">Profile Name</h2>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">John Doe</h3>
            <button className="bg-primary/10 text-primary rounded px-4 py-1 text-sm font-medium shadow">
              Edit
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm lg:text-base border-b border-dashed pb-4 mb-4 text-muted-foreground">
            <div className="flex space-x-2 items-center">
              <MapPin size={20} />
              <span>Downers Grove, IL</span>
            </div>
            <div className="flex space-x-2 items-center">
              <Mail size={20} />
              <span>user@example.com</span>
            </div>
            <div className="flex space-x-2 items-center">
              <SquareCheckBig size={20} />
              <span>Licensed for 2 years</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm lg:text-base">
            Residences can be classified by and how they are connected to
            neighbouring residences and land. Different types of housing tenure
            can be used for the same physical type.
          </p>
        </div>

        <div className="bg-background p-4 lg:p-6 rounded grid lg:grid-cols-6 gap-y-6 lg:gap-y-0">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="mb-6 text-xl font-semibold">Profile About</h2>
              <div className="space-y-2 text-sm lg:text-base">
                <div className="grid grid-cols-5 gap-x-4">
                  <span className="col-span-1">Gender:</span>
                  <span className="col-span-4">Male</span>
                </div>
                <div className="grid grid-cols-5 gap-x-4">
                  <span className="col-span-1">Birthday:</span>
                  <span className="col-span-4"> 21/05/1997</span>
                </div>
                <div className="grid grid-cols-5 gap-x-4">
                  <span className="col-span-1">Phone Number:</span>
                  <Link
                    href={`tel:+91 846 - 547 - 210`}
                    className="col-span-4 text-primary"
                  >
                    +91 846 - 547 - 210
                  </Link>
                </div>
                <div className="grid grid-cols-5 gap-x-4">
                  <span className="col-span-1">Address:</span>
                  <span className="col-span-4">
                    549 Sulphur Springs Road, Downers, IL
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-semibold">Login Details</h2>
              <div className="space-y-2 text-sm lg:text-base">
                <div className="grid grid-cols-5 gap-x-4 items-center">
                  <span className="col-span-1">Email:</span>
                  <div className="col-span-4 flex space-x-4 lg:space-x-6 items-center">
                    <span className="text-primary">test-user@example.com</span>
                    <button className="bg-primary/10 text-primary rounded px-4 py-1 text-sm font-medium shadow">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-x-14 md:gap-4 items-center">
                  <span className="col-span-1">Password:</span>
                  <div className="col-span-4 flex space-x-4 lg:space-x-6 items-center">
                    <span className="text-primary">******</span>
                    <button className="bg-primary/10 text-primary rounded px-4 py-1 text-sm font-medium shadow">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 w-full">
            <Image
              src={`/images/profile.png`}
              width={400}
              height={400}
              alt="illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
