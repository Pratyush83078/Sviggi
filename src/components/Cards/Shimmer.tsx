import { LOADER } from "@/utils/constants"
const Shimmer = () => (
  <div>
    <div className="h-[340px] w-[100%] bg-[#171a29] center ">
      <div className="center flex-col relative">
        <div className="rest-loader w-[80px] h-[80px] center rounded-full animate-spin ">
        </div>
        <img src={LOADER} className="w-[40px] z-1 absolute top-[13%]" />
        <p className="mt-[37px] text-[#ffffffcc] text-[28px] font-medium">Looking for great food near you ...</p>
      </div>
    </div>


    <div className="max-w-[1200px] h-[713px] m-auto flex ">

      <div className="w-[254px] pt-[34px] shadow-[0_2px_4px_0_rgba(48,56,97,.2)]">
        <div className="w-[100%] h-[85px] bg-[#EEF0F5] flex items-center p-8">
          <div className="size-[40px] rounded-full bg-white mr-6"></div>
          <div className="w-[80px] h-[10px] bg-white"></div>
        </div>
        {
          Array.from({ length: 6 }).map((_,index) => (
            <div className="w-[100%] h-[85px] bg-white flex items-center p-8" key={index} >
              <div className="size-[40px] rounded-full bg-[#EEF0F5] mr-6"></div>
              <div className="w-[80px] h-[10px] bg-[#EEF0F5] "></div>
            </div>
          ))
        }
      </div>

      <div className="pt-[72px] pl-[60px] w-[946px]">
        <div className="w-[110px] h-[10px] bg-[#EEF0F5] mb-[38px]"></div>

        <div className="flex flex-wrap justify-between">
          {
            Array.from({ length: 6 }).map((_,index) => (
              <div className="w-[254px] h-[212px] mb-[85px]" key={index}>
                <div className="w-[100%] h-[160px] bg-[#eef0f5]"></div>
                <div className="w-[134px] h-[10px] mt-[20px] bg-[#eef0f5]"></div>
                <div className="w-[94px] mt-[12px] h-[10px] bg-[#eef0f5]"></div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  </div>
)
export default Shimmer;
