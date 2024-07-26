import desertNomads from "../../../assets/images/groups/desert-nomads.png";
import forestTrekkers from "../../../assets/images/groups/forest-trekkers.png";
import mountainExplorer from "../../../assets/images/groups/mountain-explorer.png";
import riverRiders from "../../../assets/images/groups/river-riders.png";
import SectionTitle from "../../../components/section-title";
import AdventureGroupCard from "./adventure-group-card";

interface IProps {}

const FeatureAdventureGroups: React.FC<IProps> = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <SectionTitle
          title="Featured Adventure Groups"
          description="Join these expert led tour groups for unforgettable adventures. Discover breathtaking landscapes, thrilling activities, and unique experiences"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <AdventureGroupCard
            image={mountainExplorer}
            title="Mountain Explorers"
            description="Join the Mountain Explorers on their thrilling adventures to conquer the highest peaks. Discover breathtaking views and unforgettable experiences on guided mountain hikes."
          />
          <AdventureGroupCard
            image={riverRiders}
            title="River Riders"
            description="Experience the excitement of river rafting with the River Riders. Navigate through rapids and enjoy the beauty of scenic waterways on professionally guided tours."
          />
          <AdventureGroupCard
            image={forestTrekkers}
            title="Forest Trekkers"
            description="Explore the depths of lush forests with the Forest Trekkers. Enjoy guided walks through serene woodlands, learning about flora and fauna along the way."
          />
          <AdventureGroupCard
            image={desertNomads}
            title="Desert Nomads"
            description="Embark on a unique adventure with the Desert Nomads. Traverse vast desert landscapes, witness stunning sunsets, and camp under star-filled skies with experienced guides."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureAdventureGroups;
