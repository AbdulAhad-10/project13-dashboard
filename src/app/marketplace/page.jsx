import Banner from "@/components/Banner";
import History from "@/components/History";
import RecentlyAdded from "@/components/RecentlyAdded";
import TopCreators from "@/components/TopCreators";
import Trending from "@/components/Trending";

const MarketplacePage = () => {
  return (
    <main>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-4">
          <Banner />
          <Trending />
          <RecentlyAdded />
        </div>

        <div className="flex flex-col gap-4">
          <TopCreators />
          <History />
        </div>
      </div>
    </main>
  );
};

export default MarketplacePage;
