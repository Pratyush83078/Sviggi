import { useState } from "react";

interface Brand {
  text: string;
  link: string;
}

interface NamesProps {
  brands: Brand[];
}

const Names = ({ brands }: NamesProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleBrands = showAll ? brands : brands.slice(0, 11);

  return (
    <div className="py-5 mb-7">
      <div className="no-scrollbar flex flex-wrap overflow-auto gap-8">
        {visibleBrands.map((word, index) => (
          <a href={word.link} key={word.text + index}>
            <div className="p-[1rem] border-[1.5px] border-[rgba(2,6,12,0.1)] rounded-xl w-[211px] h-[76px]">
              <p className="text-center font-semibold opacity-85">{word.text}</p>
            </div>
          </a>
        ))}
      {!showAll && brands.length > 11 && (
        <div className="flex justify-center text-[#ff5200] mt-4">
          <button
            onClick={() => setShowAll(true)}
            className=" font-bold  p-[1rem] border-[1.5px] border-[rgba(2,6,12,0.1)] rounded-xl w-[211px] h-[55px] cursor-pointer"
          >
            Show More<span className="rotate-90 text-xl font-light inline-block">&gt;</span>
          </button>
        </div>
      )}
      </div>

    </div>
  );
};

export default Names;
