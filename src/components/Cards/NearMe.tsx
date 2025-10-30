const Names = (data:any) => {
  return (
    <div className="no-scrollbar flex flex-wrap overflow-auto py-5 mb-7 gap-8 ">
      {
        data?.brands?.map((word:any,index:number) => {
          // console.log(img)
          return (
            <a href={word.link} key={word.text+index}>
              <div className="p-[1rem] border-[1.5px] border-[rgba(2,6,12,0.1)] rounded-xl w-[211px] h-[76px]">
                <p className="text-center font-semibold opacity-85">{word.text}</p>
              </div>
            </a>
          )
        })
      }
    </div>
  )
}
export default Names;
