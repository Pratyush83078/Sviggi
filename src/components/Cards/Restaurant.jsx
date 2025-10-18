import { MENU_API } from "../../utils/constants";
import useAPI from "../../utils/useAPI";
import "./cards.css";
import RestCard from "./RestaurantsCard.jsx"
import Shimmer from "./Shimmer.jsx";
const Sections = () => {
  const cardData = useAPI(MENU_API);
  if (cardData == undefined) {
    return (<Shimmer />);
  }
  // console.log(cardData);
  let resId = (cardData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  return (
    <div className="rest-cards mx-auto w-6xl">
      <header className="rest-header my-5">
        <div className="title text-2xl font-extrabold text-gray-900">
          {cardData.cards[2].card.card.title}
        </div>
      </header>
      <div className="flex flex-wrap">
        {
          resId.map((rest) => {
            return (
              <RestCard API={rest} key={rest.info.id}></RestCard>
            )
          }
          )
        }
      </div>
    </div>
  );
};

export default Sections;
