// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const [mainImage, setMainImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSP8VwVwZy-h66SZvqvZW2bUC0-uK93Yb2zcIuk0PR6Z2X2b--"
  );
  const thumbnails = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSP8VwVwZy-h66SZvqvZW2bUC0-uK93Yb2zcIuk0PR6Z2X2b--",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSP8VwVwZy-h66SZvqvZW2bUC0-uK93Yb2zcIuk0PR6Z2X2b--",
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAKV-D9onZdP2QlRgPke7kdSn-dynPrpQ6xo9Wi-XSBdY4AzVo",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSP8VwVwZy-h66SZvqvZW2bUC0-uK93Yb2zcIuk0PR6Z2X2b--",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === thumbnails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? thumbnails.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.productDetail}>
            <div className={styles.imageGallery}>
              <img src={mainImage} alt="Cá Koi" className={styles.mainImage} />
              <div className={styles.thumbnailCarousel}>
                <button onClick={prevSlide} className={styles.carouselButton}>
                  &lt;
                </button>
                <div className={styles.thumbnails}>
                  {thumbnails.map((thumb, index) => (
                    <img
                      key={index}
                      src={thumb}
                      alt={`Cá Koi thumbnail ${index + 1}`}
                      className={`${styles.thumbnail} ${
                        index === currentIndex ? styles.activeThumbnail : ""
                      }`}
                      onClick={() => {
                        setMainImage(thumb);
                        setCurrentIndex(index);
                      }}
                    />
                  ))}
                </div>
                <button onClick={nextSlide} className={styles.carouselButton}>
                  &gt;
                </button>
              </div>
            </div>
            <div className={styles.productInfo}>
              <h1 className={styles.productTitle}>
                Goshiki - koi #007391007-w0207m009
              </h1>
              <p className={styles.price}>Giá: 1,260,000 đ</p>
              <table className={styles.details}>
                <tbody>
                  <tr>
                    <td>Mã giảm giá của shop</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Bảo hiểm</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Breeder(s):</td>
                    <td className={styles.farm}>SaiGon Farm</td>
                  </tr>
                  <tr>
                    <td>Giới tính:</td>
                    <td>Đực</td>
                  </tr>
                  <tr>
                    <td>Năm sinh:</td>
                    <td>2023</td>
                  </tr>
                  <tr>
                    <td>Kích thước:</td>
                    <td>27.5 cm</td>
                  </tr>
                  <tr>
                    <td>Loại:</td>
                    <td className={styles.Loaica}>Kin Showa</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className={styles.instock}>Mặt hàng còn 1</td>
                  </tr>
                </tbody>
              </table>
              <button className={styles.birthButton}>Giấy khai sinh</button>

              <button className={styles.addToCashButton}>
                Thêm vào giỏ hàng
              </button>

              <button className={styles.buyButton}>Mua ngay</button>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetail;
