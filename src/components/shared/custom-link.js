import { Link, useLocation } from "react-router-dom";
import "../../styles/style.css";

const evaluateActivelink = (to, pathname) => {
  return to === "/" ? pathname === to : pathname.startsWith(to);
};
const userProfile = JSON.parse(localStorage.getItem("userProfile"));
const CustomLink = ({
  children,
  extraMatch,
  to,
  ...props
}) => {
  const { pathname } = useLocation();
  // let resolved = useResolvedPath(to);
  // let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      // className={
      //   match
      //     ? `${styles.sidebar_links_link} ${styles.active}`
      //     : extraMatch && extraMatch.includes(resolved.pathname) ? `${styles.sidebar_links_link} ${styles.active}` : `${styles.sidebar_links_link}`
      // }
      className={`
        ${evaluateActivelink(to, pathname)
          ? "linkActive links"
          : "link links"} ${userProfile.profile !== null && "disabled:opacity-75 disabled:cursor-not-allowed"}
      `}
    >
      {children}
    </Link>
  );
};

export default CustomLink;

// let resolved = useResolvedPath(to);
// let match = useMatch({ path: resolved.pathname, end: true });
// return (
//   <Link
//     to={to}
//     {...props}
//     className={
//       match
//         ? `${styles.sidebar_links_link} ${styles.active}`
//         : `${styles.sidebar_links_link}`
//     }
//   >
//     {children}
//   </Link>
