import Categories from "../categories";
import PriceRange from "../price-range";
import Ratings from "../ratings";

const ProductsSideControls = () => {
  return (
    <div className="lg:pr-4 space-y-6">
      {/* filters */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium border-b border-b-primary pb-1">
            Filters
          </h3>
          <button className="text-primary hover:bg-primary/10 rounded px-4 py-1">
            Clear All
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-1 text-sm bg-secondary rounded">
            Tents
          </button>
          <button className="px-4 py-1 text-sm bg-secondary rounded">
            Men
          </button>
          <button className="px-4 py-1 text-sm bg-secondary rounded">
            Women
          </button>
          <button className="px-4 py-1 text-sm bg-secondary rounded">
            Camping
          </button>
        </div>
      </div>

      {/* categories */}
      <div>
        <Categories />
      </div>

      {/* price */}
      <div>
        <PriceRange />
      </div>

      {/* ratings */}
      <div>
        <Ratings />
      </div>
    </div>
  );
};

export default ProductsSideControls;
