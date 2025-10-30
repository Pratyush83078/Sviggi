import { MENU_API } from "@/utils/constants";
import useAPI from "@/utils/useAPI";
import "./cards.css";
import RestCard from "./RestaurantsGridList.tsx"
import Shimmer from "./Shimmer.tsx";
const Sections = () => {
  const cardData = useAPI(MENU_API);
  if (cardData == undefined) {
    return (<Shimmer />);
  }
  // console.log(cardData);
  //
  // let resId = (cardData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // return (
  //   <div className="rest-cards mx-auto w-6xl">
  //     <header className="rest-header my-5">
  //       <div className="title text-2xl font-extrabold text-gray-900">
  //         {cardData.cards[2].card.card.title}
  //       </div>
  //     </header>
  //     <div className="flex flex-wrap">
  //       {
  //         resId.map((rest) => {
  //           return (
  //             <RestCard API={rest} key={rest.info.id}></RestCard>
  //           )
  //         }
  //         )
  //       }
  //     </div>
  //   </div>
  // );

  let cards=cardData?.cards;
  return (
    cards.map((card) =>{
      let id =card?.card?.card?.id;
      // if(id.includes("whats_on_your_mind")); 
      // else if(id.includes("top_brands_for_you"));
      // else if(id.includes("popular_restaurants_title"));
      // else if(id.includes("restaurant_grid_listing"));
      // else if(id.includes("restaurant_near_me_links"));
      //
    })
  )
  
};

export default Sections;
