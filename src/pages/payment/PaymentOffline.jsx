// eslint-disable-next-line no-unused-vars
import React from "react";
import "./PaymentOffline.css";

function Payment() {
  return (
    <div className="payment-container">
      <div className="delivery-address">
        <h2>Địa chỉ nhận hàng</h2>
        <p>Tên tài khoản: [Tên người dùng]</p>
        <p>Sđt: 999999999+</p>
        <p>Xã abc phường xyz, Quận 5,Tp. HCM, Việt Nam</p>
        <button className="change-button">Thay đổi</button>
      </div>

      <div className="order-summary">
        <table>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Con cá Koi"
                  className="anhcoKoi"
                />
                <div>
                  <p>Con cá Koi</p>
                  <p>Người bán: KoiFarm</p>
                </div>
              </td>
              <td>đ1.200.000</td>
              <td className="soluong">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </td>
              <td>đ1.200.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="shipping">
        <p>Đơn vị vận chuyển: Koi shop</p>
        <p>đ200.000</p>
        <button className="change-button">Thay đổi</button>
      </div>

      <div className="total">
        <p>
          Tổng số tiền (1 sản phẩm): <span className="giachot">đ1.400.000</span>
        </p>
      </div>

      <div className="payment-method">
        <h3 className="pttt">Phương thức thanh toán</h3>
        <button className="credit-card-button">Thẻ tín dụng</button>
        <button>Thanh toán khi nhận hàng</button>
      </div>

      <div className="checkout">
        <p>
          Tổng tiền hàng: <span>đ1.400.000</span>
        </p>
        <button className="checkout-button">Thanh toán</button>
      </div>
    </div>
  );
}

export default Payment;
