import { useLocation } from "react-router-dom";

const useURLQuery = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return { query };
};

export default useURLQuery;
