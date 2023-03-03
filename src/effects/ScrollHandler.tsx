import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollHandler(props: any) {
  const { location, children } = props;
  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
      });
    }, 100);
  }, [location]);
  return children;
}

export default withRouter(ScrollHandler);
