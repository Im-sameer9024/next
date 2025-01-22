import { GridLoader } from "react-spinners";

// components/Loading/Loading.js
const Loading = () => {
  return (
    <div className=" absolute left-1/2 top-[40%] -translate-x-1/2">
      <GridLoader />
    </div>
  );
};
export default Loading;
