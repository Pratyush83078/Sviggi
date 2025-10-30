import { MENU_API } from "@/utils/constants";
import useAPI from "@/utils/useAPI";
import "./cards.css";
import RestCard from "./RestaurantsGridList.tsx"
import Shimmer from "./Shimmer.tsx";
import Cuisins from "./Cuisins.tsx"
import Brands from "./NearMe.tsx"

const Title = (data: { text: string, size?: number | undefined }) => {
  return (
    <header className="rest-header">
      <div className={`title font-extrabold text-gray-900`} style={{ fontSize: `${data.size || 1.35}rem` }}>
        {data.text}
      </div>
    </header>

  )
}

const Sections = () => {
  const cardData = useAPI(MENU_API);
  if (cardData == undefined) {
    return (<Shimmer />);
  }
  let cards = cardData?.cards;
  // alert("fetched")


  return (
    <div className="cards-parent mx-auto max-w-[1052px]">
      {
        cards.map((card: any, index: number) => {
          let id = card?.card?.card?.id || 'hello';
          // console.log(card)

          if (id == ("whats_on_your_mind")) {
            return (
              <div key={id + index}>
                <div className="my-5 px-[16px] " >
                  <Title text={card?.card?.card?.header?.title} ></Title>
                  <Cuisins API={card} ></Cuisins>
                </div>
                <hr className="opacity-10 border-1"></hr>
              </div>
            )
          }

          else if (id.includes("top_brands_for_you")) {
            let resId = (card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            return (
              <div key={id}>
                <div className="px-[16px] mt-10">
                  <Title text={card?.card?.card?.header?.title}></Title>
                  <div className="mt-4 flex flex-none overflow-y-auto no-scrollbar gap-x-9">
                    {
                      resId.map((rest: any) => {
                        return (
                          <RestCard API={rest} key={rest.info.id}></RestCard>
                        )
                      }
                      )
                    }
                  </div>
                </div>
                <hr className="opacity-10 border-1"></hr>
              </div>
            )
          }
          else if (id.includes("popular_restaurants_title")) {
            return (
              <div key={id + index} className="mt-14 mb-5">
                <Title text={card?.card?.card?.title} size={1.5}></Title>
              </div>
            )
          }

          else if (id.includes("restaurant_grid_listing")) {
            let resId = (card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            return (
              <div key={id} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                  resId.map((rest: any) => {
                    return (
                      <RestCard API={rest} key={rest.info.id}></RestCard>
                    )
                  }
                  )
                }
              </div>
            )
          }
          else if(id.includes("restaurant_near_me_links")){
            return(
              <div key={card?.card?.card?.title} className="p-[16px] mt-5">
                <Title text={card?.card?.card?.title}></Title>
                <div>
                  <Brands brands={card?.card?.card?.brands} ></Brands>

                </div>
                
              </div>
            )
          }
          //
        })
      }
    </div>
  )

};

export default Sections;
