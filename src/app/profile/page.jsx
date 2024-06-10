import AllProjects from "@/components/AllProjects";
import GeneralInfo from "@/components/GeneralInfo";
import Notifications from "@/components/Notifications";
import ProfileCard from "@/components/ProfileCard";
import StorageCard from "@/components/StorageCard";
import UploadCard from "@/components/UploadCard";

const ProfilePage = () => {
  return (
    <main>
      <div className="flex justify-between gap-4">
        <div className="mb-4 ">
          <ProfileCard />
        </div>

        <div className="mb-4 ">
          <StorageCard />
        </div>

        <div className="mb-4">
          <UploadCard />
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <div className="flex-1 mb-4">
          <AllProjects />
        </div>
        <div className="flex-1 mb-4">
          <GeneralInfo />
        </div>
      </div>

      <Notifications />
    </main>
  );
};

export default ProfilePage;
