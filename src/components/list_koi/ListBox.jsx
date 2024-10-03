import koiList1 from "../../assets/image-list-koi-1.png";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: koiList1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "200,000 VNĐ",
    farm: "CT",
    gender: "UnKnown",
    yearOfBirth: "2003",
    size: "3.00 inch / 10-22 cm",
    species: "Mix",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: koiList1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "200,000 VNĐ",
    farm: "CT",
    gender: "UnKnown",
    yearOfBirth: "",
    size: "",
    species: "Mix",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: koiList1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "200,000 VNĐ",
    farm: "CT",
    gender: "UnKnown",
    yearOfBirth: "",
    size: "",
    species: "Mix",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: koiList1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "200,000 VNĐ",
    farm: "CT",
    gender: "UnKnown",
    yearOfBirth: "",
    size: "",
    species: "Mix",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc: koiList1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "200,000 VNĐ",
    farm: "CT",
    gender: "UnKnown",
    yearOfBirth: "",
    size: "",
    species: "Mix",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "#",
    imageSrc: koiList1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "200,000 VNĐ",
    farm: "CT",
    gender: "UnKnown",
    yearOfBirth: "",
    size: "",
    species: "Mix",
  },
];
const ListBox = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 space-y-5">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
                <p className="text-sm text-[#014A77]">
                  Trang trại: {product.farm}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  Giới tính:{" "}
                  <span className="font-normal">{product.gender}</span>
                </p>
                <p className="text-sm font-medium text-gray-900">
                  Năm sinh:{" "}
                  <span className="font-normal">{product.yearOfBirth}</span>
                </p>
                <p className="text-sm font-medium text-gray-900">
                  Size: <span className="font-normal">{product.size}</span>
                </p>
                <p className="text-sm font-medium text-gray-900">
                  Giống:{" "}
                  <span className="text-red-600 font-normal">
                    {product.species}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListBox;
