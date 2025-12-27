import { useRouter } from "next/router";
import { useEffect } from "react";

function ScrollHandler(props: any) {
	const { location, children } = props;
	const router = useRouter();
	const hash = router.asPath.split("#")[1] || "";
	useEffect(() => {
		const element = document.getElementById(hash.replace("#", ""));
		setTimeout(() => {
			window.scrollTo({
				behavior: element ? "smooth" : "auto",
				top: element ? element.offsetTop : 0,
			});
		}, 100);
	}, [hash]);
	return children;
}

export default ScrollHandler;
