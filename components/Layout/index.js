import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="flex">
      <Sidebar showMenu={showMenu} />

      <div className="flex-1 min-h-screen">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
