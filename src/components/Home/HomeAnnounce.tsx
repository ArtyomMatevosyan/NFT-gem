import SerarchIcon from "../../assets/home/SearchIcon";
import CollectionItemCard from "../reusable components/CollectionItemCard";

const HomeAnnounce = () => {
  return (
    <div className="home__announceContainer">
      <div className="home__announce__container">
        <div className="home__announce">
          <h1 className="home__announce--title">
            It’s not just the NFT. It’s how you mint it.
          </h1>
          <p className="home__announce--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="home__announce--search">
            <input type="text" placeholder="Enter your search terms here" />
            <button>
              <SerarchIcon color="white" />
              Search
            </button>
          </div>
        </div>
        <CollectionItemCard
          className="home__announce"
          collectionName="Collection name"
          author="by John Doe"
          photoCover="Collection cover photo"
        />
      </div>
    </div>
  );
};

export default HomeAnnounce;
