import photo from "../../assets/photo.svg";
import hoso from "../../assets/ho-so.svg";
import cart from "../../assets/cart.svg";
import shop from "../../assets/shop.svg";
import support from "../../assets/phone.svg";
import searchIcon from "../../assets/search.svg";
import listIcon from "../../assets/list.svg";
import React from "react"

const RouteMain = [
  {
    path: "/login",
    name: "Tên tài khoản",
    icon: hoso,
  },
  {
    path: "/support",
    name: "Hỗ trợ khách hàng",
    icon: support,
  },
  {
    path: "/product",
    name: "Hệ thống cửa hàng",
    icon: shop,
  },
  {
    path: "/cart",
    name: "",
    icon: cart,
  },
];

const SubRouter = [
  {
    path: "list",
    name: "DANH MỤC",
  },
  {
    path: "/",
    name: "HOME",
  },
  {
    path: "deals-hot",
    name: "HOT DEALS",
  },
  {
    path: "new-koi",
    name: "HÀNG MỚI VỀ",
  },
  {
    path: "best-sell",
    name: "BÁN CHẠY",
  },
  {
    path: "consignment",
    name: "KÝ GỬI",
  },
];

const Header2 = () => {
  return (
    <header className="shadow-md w-full">
      <div className="bg-[#26445B] text-white mx-auto px-4 py-4 flex items-center justify-around">
        <div className="flex-shrink-0">
          <img src={photo} alt="Logo" className="h-24" />
        </div>

        <div className="mx-4 relative">
          <input
            type="text"
            className="px-32 py-1 pl-12 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-lg"
            placeholder="Search products..."
          />
          <img
            src={searchIcon}
            alt="Search"
            className="absolute right-3 top-1.5 h-8 w-8 text-gray-500"
          />
        </div>

        {RouteMain.map((route) => (
          <div key={route.path}>
            <a
              href={route.path}
              className="text-white hover:text-gray-200 flex items-center space-x-3 text-lg"
            >
              <img src={route.icon} alt={route.name} className="h-8 w-8" />
              <span>{route.name}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="bg-[#D9D9D9] text-white mx-auto px-4">
        <nav className="flex items-center justify-start">
          {SubRouter.map((route) => (
            <React.Fragment key={route.path}>
              <div>
                <a
                  href={route.path}
                  className="flex items-center space-x-3 px-3 text-[#014A77]"
                >
                  {route.path === "list" && (
                    <img src={listIcon} alt={route.name} className="h-8 w-8" />
                  )}
                  <span>{route.name}</span>
                </a>
              </div>
              {route.path === "list" && (
                <span className="text-[#014A77]"> | </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header2;
