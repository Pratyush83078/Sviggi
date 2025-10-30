import { CDN_URL } from "@/utils/constants";

const Cuisins = (API) => {
  const info = API?.API?.card?.card?.gridElements?.infoWithStyle?.info;
  return (
    <div className="no-scrollbar flex overflow-auto py-5 mb-7">
      {
        info.map((img) => {
          // console.log(img)
          return (
            <img src={CDN_URL + img.imageId} key={img.id} width={144}  className="mr-7 bg-cover"/>
          )
        })
      }
    </div>
  )
}
export default Cuisins;

