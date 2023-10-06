import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";

const restauId = () => {
  const restauToken = useSelector((state) => state.auth.restauToken);

  const { decodedToken, isExpired } = useJwt(restauToken);
  if (!isExpired) {
    return decodedToken.id;
  } else {
    return alert("Session expired");
  }
};

export default restauId;
