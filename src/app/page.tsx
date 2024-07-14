import Image from 'next/image';
import React from 'react';
import "@/app/styles.scss";

export default function Banner() {
  return (
    <><div id="banner" className="h-screen w-full m-0 p-0 flex flex-col">
      <h1 className="text-center text-white project-name">Quag</h1>
      <div className="flex h-full w-full opacity-95">
        <div className="relative w-1/2 h-full"> {/* Div chứa hình ảnh */}
          <Image
            className="object-cover"
            src="https://images.pexels.com/photos/210017/pexels-photo-210017.jpeg?auto=compress&cs=tinysrgb&w=650&h=700&dpr=10"
            alt="Ảnh"
            fill // Sử dụng fill
            style={{ objectFit: 'cover' }} // Sử dụng style cho objectFit
          />
        </div>
        <div className="w-1/2 bg-black"></div>
      </div>
    </div><div className={`container mx-auto px-4 h-screen`}>
        <div className="flex justify-end flex-col md:flex-row h-full">
          <div className="w-full md:w-8/12 flex flex-col items-center justify-center">
            <h2 className="title-intro text-4xl md:text-6xl font-bold mb-5">
              <span className="bg-[#fdcb6e]">Lập trình viên</span> website,
              blogger, và là Founder của <span className="bg-[#fdcb6e]">Quag</span>
            </h2>
            <p className="content-intro text-base md:text-lg">
              Chào mọi người, mình là Vũ Huy Quang, một lập trình viên giàu kinh
              nghiệm. Mình là Frontend & Backend Developer và Automation Tester,
              thành thạo Laravel, Vue.js, Spring Boot, và React.js. Sự đa dạng
              trong công nghệ giúp mình làm việc linh hoạt và hiệu quả trong
              các dự án phức tạp.
            </p>
            <p className="content-intro text-base md:text-lg">
              Mình chuyên phát triển các ứng dụng web đa dạng từ đơn giản đến
              phức tạp, xây dựng các công cụ tự động hóa để tối ưu quy trình
              làm việc, cũng như thành thạo việc xây dựng proxy server nhanh
              chóng. Ngoài ra, mình đam mê chia sẻ kiến thức và kinh nghiệm
              qua việc viết blog, tạo kết nối và giao lưu với độc giả.
            </p>
          </div>
        </div>
      </div></>
  );
}
