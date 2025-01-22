import List from "../../components/List/List";

const ListPage = () => {
  return (
    <div className=" w-10/12 flex gap-6 mx-auto">
      {/* list all property  */}
      <div className=" w-7/12">
        <List />
      </div>

      {/* Location of Property with map  */}
      <div className=" w-5/12">
        <img
          src={"/bg.png"}
          alt=" bg-Image"
          className=" object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default ListPage;
