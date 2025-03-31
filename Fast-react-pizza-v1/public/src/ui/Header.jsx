import { Link } from "react-router-dom";
import SearchOrder from "../features/order/Search";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza co.</Link>
      <SearchOrder />

      <p>Rakesh</p>
    </header>
  );
}

export default Header;
