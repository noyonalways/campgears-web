import backpacks from "../../../assets/images/categories/backpacks.png";
import camping from "../../../assets/images/categories/camping.png";
import equipments from "../../../assets/images/categories/equipments.png";
import footwear from "../../../assets/images/categories/footwear.png";
import kayaks from "../../../assets/images/categories/kayaks.png";
import kids from "../../../assets/images/categories/kids.png";
import men from "../../../assets/images/categories/man.png";
import women from "../../../assets/images/categories/women.png";
import SectionTitle from "../../../components/section-title";
import CategoryCard from "./category-card";

interface IProps {}

const Categories: React.FC<IProps> = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <SectionTitle
          title="Shop Top Categories"
          description="Discover our top categories and find the perfect gear for your next adventure. Shop tents, backpacks, cooking gear, and more!"
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard image={men} title={"Men"} />
          <CategoryCard image={women} title={"Women"} />
          <CategoryCard image={kids} title={"Kids"} />
          <CategoryCard image={footwear} title={"Footwear"} />
          <CategoryCard image={backpacks} title={"Backpacks"} />
          <CategoryCard image={equipments} title={"Equipments"} />
          <CategoryCard image={camping} title={"Camping"} />
          <CategoryCard image={kayaks} title={"Kayaks"} />
        </div>
      </div>
    </section>
  );
};

export default Categories;
