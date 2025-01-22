import { listData } from "../../dummyDate/Date";
import Card from "./Card";
import SearchSection from "./SearchSection";

export default function List() {
  return (
    <div className=" w-full h-[530px] flex flex-col gap-8 overflow-y-scroll scrollbar-thin pr-6 pb-[3rem]">
      {/* search section  */}
      <SearchSection />

      {/* allCards  */}
      <div className=" space-y-6 w-full">
        {listData.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
