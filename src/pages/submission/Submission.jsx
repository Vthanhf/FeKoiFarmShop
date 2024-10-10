// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Submission.css";

function Submission() {
  return (
    <div className="submission-page">
      <div className="form-container">
        <h2 className="wanna">“Tôi” muốn ký gửi</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fishType">Thông tin cá Koi</label>
            <input type="text" id="fishType" placeholder="Loại cá" required />
          </div>
          <div className="form-group">
            <label htmlFor="size">Size:</label>
            <input type="text" id="size" placeholder="Size" required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Tuổi:</label>
            <input type="text" id="age" placeholder="Tuổi" required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Giống cá:</label>
            <input type="text" id="gender" placeholder="Giống cá" required />
          </div>
          <div className="form-group">
            <label htmlFor="origin">Nguồn gốc:</label>
            <input type="text" id="origin" placeholder="Nguồn gốc" required />
          </div>
          <div className="form-group">
            <label htmlFor="genderSelect">Giới tính:</label>
            <select id="genderSelect" required>
              <option value="">Chọn giới tính</option>
              <option value="male">Đực</option>
              <option value="female">Cái</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="method">Phương thức:</label>
            <select id="method" required>
              <option value="">Chọn phương thức</option>
              <option value="method1">Phương thức 1</option>
              <option value="method2">Phương thức 2</option>
            </select>
          </div>
          <div className="upload-buttons">
            <button type="button" className="upload-button">
              Thêm hình ảnh
            </button>
            <button type="button" className="upload-button">
              Thêm video
            </button>
          </div>
          <p className="note">
            (Bạn vui lòng đến trang trại của công ty chúng tôi để ký gửi, hoặc
            chọn option đến kiểm tra tại nhà với mức phí khác nhau.)
          </p>
          <p className="warning">
            Lưu ý: - Chỉ ký nhận ký gửi cá trên 1 tháng tuổi.
            <br /> - Chỉ nhận ký gửi ở khu vực TP.HCM.
            <br /> - Phí và tiền sẽ được hiện hiện sau khi cá đã được mua.
          </p>
          <button type="submit" className="submit-button">
            Xác nhận gửi
          </button>
        </form>
      </div>
    </div>
  );
}

export default Submission;
