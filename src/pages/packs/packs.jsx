// eslint-disable-next-line no-unused-vars
import React from "react";
import "./packs.css";

const Packs = () => {
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
        <form className="search-form">
          <input type="text" placeholder="Search here" />
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
        {/* Lặp lại phần này cho mỗi sản phẩm */}
        <div className="product-card">
          <div className="packcakoi"></div>
          <h3 className="name">Kujaku - koi #w0739n012-v11021n004</h3>
          <p className="price">$2,500.00</p>
          <p className="trangtrai">Trang trại: Koi</p>
          <p>Giới tính: Male</p>
          <p>Năm sinh: 2022</p>
          <p>Size: 21.00 inch / 53 cm</p>
          <p>
            Giống: <span className="red-text">Kujaku</span>
          </p>
          <button>Add to cart</button>
        </div>
        <div className="product-card">
          <div className="packcakoi"></div>
          <h3 className="name">Kujaku - koi #w0739n012-v11021n004</h3>
          <p className="price">$2,500.00</p>
          <p className="trangtrai">Trang trại: Koi</p>
          <p>Giới tính: Male</p>
          <p>Năm sinh: 2022</p>
          <p>Size: 21.00 inch / 53 cm</p>
          <p>
            Giống: <span className="red-text">Kujaku</span>
          </p>
          <button>Add to cart</button>
        </div>
        <div className="product-card">
          <div className="packcakoi"></div>
          <h3 className="name">Kujaku - koi #w0739n012-v11021n004</h3>
          <p className="price">$2,500.00</p>
          <p className="trangtrai">Trang trại: Koi</p>
          <p>Giới tính: Male</p>
          <p>Năm sinh: 2022</p>
          <p>Size: 21.00 inch / 53 cm</p>
          <p>
            Giống: <span className="red-text">Kujaku</span>
          </p>
          <button>Add to cart</button>
        </div>
        <div className="product-card">
          <div className="packcakoi"></div>
          <h3 className="name">Kujaku - koi #w0739n012-v11021n004</h3>
          <p className="price">$2,500.00</p>
          <p className="trangtrai">Trang trại: Koi</p>
          <p>Giới tính: Male</p>
          <p>Năm sinh: 2022</p>
          <p>Size: 21.00 inch / 53 cm</p>
          <p>
            Giống: <span className="red-text">Kujaku</span>
          </p>
          <button>Add to cart</button>
        </div>
        <div className="product-card">
          <div className="packcakoi"></div>
          <h3 className="name">Kujaku - koi #w0739n012-v11021n004</h3>
          <p className="price">$2,500.00</p>
          <p className="trangtrai">Trang trại: Koi</p>
          <p>Giới tính: Male</p>
          <p>Năm sinh: 2022</p>
          <p>Size: 21.00 inch / 53 cm</p>
          <p>
            Giống: <span className="red-text">Kujaku</span>
          </p>
          <button>Add to cart</button>
        </div>
        <div className="product-card">
          <div className="packcakoi"></div>
          <h3 className="name">Kujaku - koi #w0739n012-v11021n004</h3>
          <p className="price">$2,500.00</p>
          <p className="trangtrai">Trang trại: Koi</p>
          <p>Giới tính: Male</p>
          <p>Năm sinh: 2022</p>
          <p>Size: 21.00 inch / 53 cm</p>
          <p>
            Giống: <span className="red-text">Kujaku</span>
          </p>
          <button>Add to cart</button>
        </div>
        <div className="product-card">
          <div className="packcakoi"></div>
          <h3 className="name">Kujaku - koi #w0739n012-v11021n004</h3>
          <p className="price">$2,500.00</p>
          <p className="trangtrai">Trang trại: Koi</p>
          <p>Giới tính: Male</p>
          <p>Năm sinh: 2022</p>
          <p>Size: 21.00 inch / 53 cm</p>
          <p>
            Giống: <span className="red-text">Kujaku</span>
          </p>
          <button>Add to cart</button>
        </div>
        {/* Kết thúc sản phẩm */}
      </div>
    </div>
  );
};

export default Packs;
