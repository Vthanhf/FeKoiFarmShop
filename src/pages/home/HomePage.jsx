// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import koi1 from "../../assets/koi-dom.svg";
import koi2 from "../../assets/koi-dom-2.svg";
import bgImage from "../../assets/background-song.svg";
import bgImage2 from "../../assets/bg-koi-boi.svg";
import api from '../../config/axios';
import bgImgae3 from "../../assets/background-white.svg";
import koi3 from "../../assets/koi-dom.svg";
import koi4 from "../../assets/koi-dom.svg";
import koi5 from "../../assets/koi-dom.svg";
import Slider from "../../components/home/Slider";
//import ImageRow from "../../components/home/ImageRow";
import KoiSection from "../../components/home/KoiSection";
import { Row } from 'antd';
import CardProduct from '../../components/Card/CardProduct';

const ListKoi = [
  {
    id: 1,
    name: "shikkoku",
    nameJapan: "漆黒",
    img: koi1,
    bgColor: "#000000",
  },
  {
    id: 2,
    name: "geppaku",
    nameJapan: "月白",
    img: koi2,
    bgColor: "#FFFFFF",
  },
  {
    id: 3,
    name: "akane-iro",
    nameJapan: "茜色",
    img: koi3,
    bgColor: "#ff0000",
  },
  {
    id: 4,
    name: "ai-iro",
    nameJapan: "藍色",
    img: koi4,
    bgColor: "#0000ff",
  },
  {
    id: 5,
    name: "tetsukon",
    nameJapan: "鉄紺",
    img: koi5,
    bgColor: "#02141E",
  },
];


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(loading);
  console.log(error);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get('koi/getAllKoi');

        // Convert price to string format
        const formattedProducts = response.data.map(product => ({
          ...product,
          price: `${product.price.toLocaleString()}đ` // Format price as string
        }));

        setProducts(Array.isArray(formattedProducts) ? formattedProducts : []);
      } catch (err) {
        console.log(err);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Slider className="slider"/>
      <section className="relative bg-[#26445B] text-white min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Left-aligned Content */}
        <div className="relative max-w-2xl text-left p-6">
          <h2 className="text-xl font-bold uppercase text-white">
            Cá Koi Nhật Bản Chất Lượng Cao Nhất <br />
            (Nishikigoi) Được Bán Từ Niigata, Nhật Bản
          </h2>
          <p className="mt-4 leading-relaxed">
          Sellkoi Hồng Kiệt, được thành lập vào năm 2024 khi thị trường cá Koi Nhật
           tại Việt Nam đã phát triển mạnh mẽ, nhưng vẫn chủ yếu phục vụ cho những 
           người chơi cá Koi theo sở thích. Cá Koi Nhật Bản vẫn có giá thành khá cao 
           và kén người chơi. Mặc dù mới hoạt động, Sellkoi Hồng Kiệt đã nhanh chóng 
           xây dựng uy tín và trở thành một trong những đơn vị tiên phong trong việc 
           phân phối cá Koi Nhật Bản chính gốc. Ban đầu, công ty có khoảng 10 nhân viên, 
           nhưng đang trên đà phát triển mạnh mẽ.
          </p>
          <div className="text-center">
            <button className="mt-6 px-6 py-2 bg-[#FFF1DD] text-black font-bold rounded-full shadow-lg hover:bg-gray-200">
              &gt; Xem Thêm
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-end pr-6">
          <img src={koi1} alt="Koi Fish 1" className="w-60 md:w-80 mb-10" />
          <img src={koi2} alt="Koi Fish 2" className="w-60 md:w-80" />
        </div>
        
      </section>
      <section className="relative bg-[#26445B] text-white min-h-screen flex items-center justify-center product">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${bgImage2})` }}
        ></div>
        <Row gutter={16} className='productHome'>
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </Row>
      </section>
      <section className="relative bg-[#02141E] text-white py-44">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${bgImgae3})` }}
        ></div>
        <div className="container mx-auto flex justify-center space-x-6">
          {ListKoi.map((koi) => (
            <div key={koi.id} className="flex flex-col items-center space-y-3">
              <div
                className="relative w-60 h-96 rounded-lg shadow-lg overflow-hidden bg-opacity-50"
                style={{ backgroundColor: `${koi.bgColor}80` }}
              >
                {/* Koi Fish Image */}
                <div className="z-20 relative h-full flex justify-center items-center">
                  <img src={koi.img} alt={koi.name} className="w-56" />
                </div>

                {/* Japanese Name in Calligraphy Font */}
                <div className="absolute top-0 right-0 m-2 z-10">
                  <span
                    className="text-5xl text-white px-2 py-1 rounded"
                    style={{
                      writingMode: "vertical-rl",
                      fontFamily: "'Great Vibes', cursive",
                    }}
                  >
                    {koi.nameJapan}
                  </span>
                </div>

                {/* English Name in Calligraphy Font */}
                <div className="absolute bottom-0 left-0 m-2">
                  <span
                    className="text-xl font-semibold text-white bg-opacity-50 px-1 py-2 rounded"
                    style={{
                      writingMode: "vertical-lr",
                    }}
                  >
                    {koi.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <KoiSection />
    </>
  );
};

export default HomePage;
