import Image from 'next/image';
import React from 'react';
import "@/app/styles.scss";

export default function Banner() {
  return (
    <div id="banner" className="h-screen w-full m-0 p-0 flex flex-col">
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
    </div>
  );
}
