/* eslint-disable react/prop-types */
// import image38 from "../../assets/image-38.svg";
import image23 from "../../assets/image-23.svg";
import image21 from "../../assets/image-21.svg";
import image22 from "../../assets/image-22.svg";
import image25 from "../../assets/image-25.svg";
import image26 from "../../assets/image-26.svg";
import image27 from "../../assets/image-27.svg";
import image28 from "../../assets/image-28.svg";
import image30 from "../../assets/image-30.svg";
import image31 from "../../assets/image-31.svg";
import image32 from "../../assets/image-32.svg";
import image33 from "../../assets/image-33.svg";
// import image20 from "../../assets/image-20.svg";
// import frame19 from "../../assets/frame-19.svg";
// import image37 from "../../assets/image-37.svg";
// import image35 from "../../assets/image-35.svg";
// import image34 from "../../assets/image-34.svg";
import image29 from "../../assets/image-29.svg";
// import image36 from "../../assets/image-36.svg";
// import line13 from "../../assets/line-13.svg";
// import line14 from "../../assets/line-14.svg";
// import line12 from "../../assets/line-12.svg";
// import line11 from "../../assets/line-11.svg";


 
const FooterSection = ({ title, items }) => (
  <div className="flex-1 mb-4">
    <h3 className="font-bold text-lg mb-4">{title}</h3>
    {items.map((item, index) => (
      <p key={index} className="flex items-center mb-4">
        <img src={item.img} alt={`Icon for ${item.text}`} className="w-6 h-6 mr-2" />
        {item.text}
      </p>
    ))}
  </div>
);

const Footer = () => {
  const accountInfoItems = [
    { text: "Danh sách các shop, cá nhân ký gửi cá koi", img: image25 },
    { text: "Đăng ký & Đăng nhập", img: image26 },
    { text: "Mất mật khẩu", img: image27 },
    { text: "Đăng nhập bán buôn", img: image28 },
    { text: "Đăng ký bán buôn", img: image30 },
  ];

  const otherInfoItems = [
    { text: "Điều khoản mua hàng", img: image31 },
    { text: "Hướng dẫn mua hàng", img: image32 },
    { text: "Phương thức thanh toán", img: image33 },
    { text: "Phương thức vận chuyển", img: image30 },
    { text: "Chính sách bảo mật", img: image29 },
    { text: "Chính sách đổi trả hàng", img: image30 },
    { text: "Hướng dẫn bán hàng", img: image31 },
  ];

  return (
    <div className="bg-black w-full p-8">
      <div className="flex flex-wrap justify-between items-start text-white">
        <FooterSection
          title="GIỚI THIỆU CHUNG"
          items={[
            {
              text: "Địa chỉ xem cá Koi: Số 99 ngách 99, ngõ 99 999, Q. 999, HCM (ô tô ra vào thoải mái, đỗ xe trực tiếp tại trại 5000m2)",
              img: image21,
            },
            { text: "Tel: 0971.466.888(Zalo)", img: image22 },
            { text: "Gmail: noithatonplaza@gmail.com", img: image23 },
          ]}
        />
        <FooterSection title="THÔNG TIN TÀI KHOẢN" items={accountInfoItems} />
        <FooterSection title="THÔNG TIN KHÁC" items={otherInfoItems} />
        <div className="flex-1 mb-4">
          <h3 className="font-bold text-lg mb-4">BẢN ĐỒ & BẢN QUYỀN</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59575.250389109526!2d105.841391!3d21.054556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe5215f285b%3A0xc138c969edf9f7bb!2sC%C3%B4ng%20Ty%20OnKoi%20-%20Quang%20Minh!5e0!3m2!1svi!2sus!4v1727811663369!5m2!1svi!2sus"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
