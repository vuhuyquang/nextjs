import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8 md:p-16 lg:p-20">
      <div className="px-8 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
        {/* Cộng đồng */}
        <div className="text-sm">
          <h3 className="font-normal mb-4">Cộng đồng</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Diễn đàn</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Twitter</a></li>
          </ul>
        </div>
        {/* Sản phẩm */}
        <div>
          <h3 className="font-normal mb-4">Sản phẩm</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Tính năng</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Giá</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Câu hỏi</a></li>
          </ul>
        </div>
        {/* Doanh nghiệp */}
        <div>
          <h3 className="font-normal mb-4">Doanh nghiệp</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Đối tác</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Liên hệ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white text-sm">Chính sách bảo mật</a></li>
          </ul>
        </div>
        {/* Liên hệ */}
        <div>
          <h3 className="font-normal mb-4">Liên hệ</h3>
          <input placeholder="Nhập email của bạn" className="mb-2 text-sm" />
        </div>
      </div>
    </footer>
  );
};