import { MENU_API, CDN_URL } from "../../utils/constants";
import useAPI from "../../utils/useCards";

const Cards = () => {
  const cardData = useAPI(MENU_API);
  if (cardData == undefined) {
    return "hello"
  }
  console.log(cardData);
  return (
    <div className="rest-cards">
      <header className="rest-header">
        <div className="title">
          {cardData.cards[2].card.card.title}
        </div>
      </header>
    </div>
  );
};

export default Cards;
