import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";

const userId = () => {
  const userToken = useSelector((state) => state.auth.userToken);

  const { decodedToken, isExpired } = useJwt(userToken);
  if (!isExpired) {
    return decodedToken.id;
  } else {
    return alert("Session expired");
  }
};

export default userId;
