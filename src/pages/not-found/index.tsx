import { Link } from "react-router-dom";
import PageTitle from "../../components/page-title";

interface IProps {}

const NotFound: React.FC<IProps> = () => {
  return (
    <>
      <PageTitle title="Page Not Found - Campgears" />
      <section>
        <div className="container">
          <div className="flex items-center justify-center h-screen">
            <div className="space-y-3 flex flex-col items-center">
              <h1 className="text-3xl font-montserrat text-center">
                Not Found
              </h1>
              <p className="text-center">The looking page was not found</p>
              <Link className="btn mx-auto" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
