// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./packs.css";
import api from "../../config/axios";

const Packs = () => {
  const [products, setProducts] = useState([]); // Dữ liệu sản phẩm
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [searchTerm, setSearchTerm] = useState(""); // Từ khóa tìm kiếm

  // Hàm lấy dữ liệu sản phẩm từ API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/koiPack/getAll"); // Gọi API để lấy tất cả sản phẩm
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err); // In ra lỗi
      setError("Failed to fetch products. Please try again later."); // Cập nhật trạng thái lỗi
    } finally {
      setLoading(false); // Đặt trạng thái loading về false
    }
  };

  useEffect(() => {
    fetchProducts(); // Gọi hàm fetchProducts khi component được mount
  }, []);

  // Hàm tìm kiếm sản phẩm
  const handleSearch = async (e) => {
    e.preventDefault(); // Ngăn chặn reload trang
    if (!searchTerm) return; // Nếu không có từ khóa tìm kiếm
    try {
      setLoading(true);
      const response = await api.get(`/koiPack/search/${searchTerm}`); // Tìm kiếm sản phẩm
      setProducts(Array.isArray(response.data) ? response.data : []); // Cập nhật state với dữ liệu tìm kiếm
    } catch (err) {
      console.error("Error searching products:", err); // In ra lỗi
      setError("Failed to fetch products. Please try again later."); // Cập nhật trạng thái lỗi
    } finally {
      setLoading(false); // Đặt trạng thái loading về false
    }
  };

  return (
    <div className="packs-container">
      <h1 className="tittle">CÁ KOI NHỎ</h1>

      <div className="hero-image">{/* Hình ảnh cá Koi bơi */}</div>

      <p className="description">
        Gói lựa chọn hiện có sẵn 5 cá koi và 10 cá koi
      </p>
      <h1 className="des">
        Bạn có thể mua một gói 5 hoặc 10 cái và chúng tôi có nhiều loại khác
        nhau, từ 10cm-22cm / 3-8 inch. Số lượng có hạn trên mỗi mặt hàng. Vận
        chuyển thậm chí còn được bao gồm trong giá mua! Tùy chọn này là một mức
        giá tuyệt vời cho cá koi lai Nhật Bản ở kích thước nhỏ. Những người mới
        bắt đầu của chúng tôi yêu thích sản phẩm này để mua hàng nhanh chóng và
        dễ dàng.
      </h1>

      <div className="choice-packs">
        <div className="packA"></div>
        <div className="packB"></div>
      </div>

      <h2 className="des-mix">Một gói theo nhiều loại</h2>
      <div className="mixed-pack">{/* Hình ảnh gói nhiều loại */}</div>

      <center className="note">
        Đừng bỏ lỡ ưu đãi này để sở hữu cho riêng bạn 1 hồ cá Koi tuyệt vời!
      </center>

      <div className="search-section">
        <h2>Tìm cá Koi</h2>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select>
            <option value="">Giá tuổi</option>
          </select>
          <select>
            <option value="">Giá</option>
          </select>
          <select>
            <option value="">Giống</option>
          </select>
          <button type="submit" className="search">
            Tìm
          </button>
        </form>
      </div>

      <div className="product-grid">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product.koiPackId}>
              <div
                className="packcakoi"
                // style={{
                //   backgroundImage: `url(${product?.mediaRequestUrlList[0]})`,
                // }}
              ></div>
              <h3 className="name">{product.koiPackName}</h3>
              <p className="price">{product.price}</p>
              <p className="trangtrai">Trang trại: {product.breeders.map(breeder => breeder.breederName).join(', ')}</p>
              <p>Giới tính: {product.koiPackGender}</p>
              <p>Năm sinh: {product.koiPackBorn}</p>
              <p>Size: {product.koiPackSize}</p>
              <p>
                Giống: <span className="red-text">{product.varieties.map(variety => variety.varietyName).join(', ')}</span>
              </p>
              <button>Add to cart</button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Packs;
