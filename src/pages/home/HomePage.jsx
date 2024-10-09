import koi1 from "../../assets/koi-dom.svg";
import koi2 from "../../assets/koi-dom-2.svg";
import bgImage from "../../assets/background-song.svg";
import bgImage2 from "../../assets/bg-koi-boi.svg";

import bgImgae3 from "../../assets/background-white.svg";
import koi3 from "../../assets/koi-dom.svg";
import koi4 from "../../assets/koi-dom.svg";
import koi5 from "../../assets/koi-dom.svg";
import Slider from "../../components/home/Slider";
import ImageRow from "../../components/home/ImageRow";
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


const products = [ 
  { id: 1, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 2, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 3, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 4, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 5, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 6, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 7, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
  { id: 8, name: 'Goshiki – koi #w0729n005-w0203n009', price: '2,000,000đ', breeder: "Sài gòn Koi", sex: "Male", born: "2023", size: "13.00 inch/ 34.5 cm", species: "Goshiki", image: 'https://i.imgur.com/A1hsD3s.png' },
];


const HomePage = () => {
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
          <h2 className="text-xl font-bold uppercase">
            Cá Koi Nhật Bản Chất Lượng Cao Nhất <br />
            (Nishikigoi) Được Bán Từ Niigata, Nhật Bản
          </h2>
          <p className="mt-4 leading-relaxed">
            Công ty Onkoi Quang Minh được thành lập bắt đầu từ năm 2007, khi thị
            trường chơi Koi Nhật tại Việt Nam vẫn trong giai đoạn sơ khai, phần
            lớn là chơi theo sở thích và vẫn chưa nở rộ bởi cá Koi Nhật khá đắt
            đỏ và kén người chơi nên có thể nói, với hơn 10 năm kinh doanh uy
            tín và phát triển, Onkoi Quang Minh là một trong số ít đơn vị, cá
            nhân đi đầu trong lĩnh vực phân phối Koi Nhật Bản chính hiệu. . Ở
            thời điểm này, đội ngũ nhân viên của đơn vị chỉ đạt một con số khiêm
            tốn khoảng 10 người. Sau một thời gian phát triển mạnh mẽ, số lượng
            nhân viên hoạt động tại đơn vị đã lên đến con số trên 50 người.
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
      <section className="relative bg-[#26445B] text-white min-h-screen flex items-center justify-center product"  >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${bgImage2})` }}
          
        ></div>
        <Row gutter={16} className='productHome'>
            {products.map((product) => (
                <CardProduct key={product.id} product={product}/>
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
