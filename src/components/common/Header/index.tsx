import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Popover } from 'antd';
import {
  ShoppingFilled,
  HomeFilled,
  EnvironmentFilled,
  HeartFilled,
  CaretDownOutlined,
  MenuOutlined,
} from '@ant-design/icons';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-4 sm:px-4 md:px-6 lg:px-8 xl:px-10  py-2 h-[76px] text-sm z-10">
      {/* Profile section */}
      <div className="flex items-center gap-4 cursor-pointer">
        <Image
          className="border-solid border-2 border-[#e84118] p-[1px] rounded-full h-[44px] w-[44px]"
          height={44}
          width={44}
          src="/images/front_face.png"
          alt="avatar"
        />
        <div className="grid grid-rows-2 gap-1">
          <span className="font-bold">Quang Vu Huy</span>
          <div className="flex items-center gap-1">
            <Popover
              placement="bottomLeft"
              title="Thông tin cá nhân"
              content={
                <div className="flex flex-col gap-3">
                  <div className="flex gap-1">
                    <ShoppingFilled className="mt-1" />
                    <p>
                      Làm việc tại <span className="font-bold">Giaohangtietkiem.vn</span>
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <HomeFilled className="mt-1" />
                    <p>
                      Sống tại <span className="font-bold">Hà Nội</span>
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <EnvironmentFilled className="mt-1" />
                    <p>
                      Đến từ <span className="font-bold">Thái Bình</span>
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <HeartFilled className="mt-1" />
                    <p>Độc thân</p>
                  </div>
                </div>
              }
            >
              <span className="text-slate-700 font-normal">Lập trình viên</span>
            </Popover>
            <span className="flex items-center ml-[3px]">
              <CaretDownOutlined style={{ fontSize: '10px' }} />
            </span>
            <span className="ml-1 text-slate-500">Theo dõi</span>
          </div>
        </div>
      </div>

      {/* Navigation section */}
      <nav className="flex justify-end items-center cursor-pointer flex-grow text-xs">
        <div className="font-semibold tracking-[2px]">
          <div className="hidden sm:hidden md:hidden lg:flex">
            <ul className="flex gap-[3rem]">
              <li className="hover:text-[#fdcb6e] transition delay-[45ms]">
                <Link href="/">TRANG CHỦ</Link>
              </li>
              <li className="hover:text-[#fdcb6e] transition delay-[45ms]">
                <Link href="/bai-viet/tren-tay-reverb-official-websocket-server-tu-laravel">
                  BÀI VIẾT
                </Link>
              </li>
              <li className="hover:text-[#fdcb6e] transition delay-[45ms]">
                <Link href="/lien-he">LIÊN HỆ</Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex items-center">
            <MenuOutlined className="text-base" />
          </div>
        </div>
      </nav>
    </header>
  );
};