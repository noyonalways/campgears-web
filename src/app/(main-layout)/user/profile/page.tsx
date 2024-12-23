import UserDashboardTitle from "@/components/titles/user-dashboard-title";
import { getMe } from "@/services/auth";
import { TProfile } from "@/types/profile";
import { Mail, MapPin, SquareCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UserProfilePage = async () => {
  const res = await getMe();
  const profile = res?.data as TProfile;

  if (!res?.success) {
    return (
      <div className="bg-secondary lg:p-6 p-4 rounded text-destructive">
        Unauthenticated User
      </div>
    );
  }

  return (
    <div className="bg-secondary lg:p-6 p-4 rounded">
      <UserDashboardTitle title={`My Profile`} />
      <div className="space-y-4">
        <div className="bg-background p-4 lg:p-6 rounded">
          <h2 className="mb-6 text-xl font-semibold">Profile Name</h2>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">{profile?.name}</h3>
            <button className="bg-primary/10 text-primary rounded px-4 py-1 text-sm font-medium shadow">
              Edit
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm lg:text-base border-b border-dashed pb-4 mb-4 text-muted-foreground">
            {profile?.address && (
              <div className="flex space-x-2 items-center">
                <MapPin size={20} />
                <span>{profile?.address}</span>
              </div>
            )}
            <div className="flex space-x-2 items-center">
              <Mail size={20} />
              <span>{profile?.email}</span>
            </div>
            <div className="flex space-x-2 items-center">
              <SquareCheckBig size={20} />
              <span>
                Registered since{" "}
                {new Date(profile?.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm lg:text-base">
            Residences can be classified by and how they are connected to
            neighbouring residences and land. Different types of housing tenure
            can be used for the same physical type.
          </p>
        </div>

        <div className="bg-background p-4 lg:p-6 rounded grid lg:grid-cols-6 gap-y-6 lg:gap-y-0">
          <div className="lg:col-span-4">
            <div
              className={`${
                !profile?.address ||
                !profile?.phone ||
                !profile?.dateOfBirth ||
                !profile?.gender
                  ? "hidden"
                  : "mb-8"
              }`}
            >
              <h2 className="mb-6 text-xl font-semibold">Profile About</h2>
              <div className="space-y-2 text-sm lg:text-base">
                {profile?.gender && (
                  <div className="grid grid-cols-5 gap-x-4">
                    <span className="col-span-1">Gender:</span>
                    <span className="col-span-4">Male</span>
                  </div>
                )}
                {profile?.dateOfBirth && (
                  <div className="grid grid-cols-5 gap-x-4">
                    <span className="col-span-1">Date of Birth:</span>
                    <span className="col-span-4">
                      {new Date(profile?.dateOfBirth).toLocaleDateString()}
                    </span>
                  </div>
                )}
                {profile?.phone && (
                  <div className="grid grid-cols-5 gap-x-4">
                    <span className="col-span-1">Phone Number:</span>
                    <Link
                      href={`tel:${profile?.phone}`}
                      className="col-span-4 text-primary"
                    >
                      {profile?.phone}
                    </Link>
                  </div>
                )}
                {profile?.address && (
                  <div className="grid grid-cols-5 gap-x-4">
                    <span className="col-span-1">Address:</span>
                    <span className="col-span-4">{profile?.address}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-xl font-semibold">Login Details</h2>
              <div className="space-y-2 text-sm lg:text-base">
                <div className="grid grid-cols-5 gap-x-4 items-center">
                  <span className="col-span-1">Email:</span>
                  <div className="col-span-4 flex space-x-2 lg:space-x-6 items-center">
                    <span className="text-primary">{profile?.email}</span>
                    <button className="bg-primary/10 text-primary rounded px-3 lg:px-4 py-1 text-sm font-medium shadow">
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
