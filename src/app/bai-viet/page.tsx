"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { formatDate, getListPost } from "@/utils";
import styles from "@/styles/PostList.module.scss";

interface Post {
  id: number;
  title: string;
  short_content: string;
  category_name: string;
  created_at: string;
  reading_time: number;
}

interface PostListProps {
  initialData: {
    data: Post[];
  };
}

export default function Blog() {
  // useEffect(() => {
  //   async function fetchPosts() {
  //     const item = await getListPost(1, 20, null);
  //     setPosts(item.data.data);
  //   }
  //   fetchPosts();
  // }, []);

  return (
    <div className="space-y-16">
      <div className="container mx-auto lg:px-24 md:px-16 sm:px-8 px-4 pt-16 space-y-16">
        <div className="flex flex-col lg:flex-row cursor-pointer mb-6 h-[500px]">
          <div className="w-full lg:w-7/12 bg-yellow-100 rounded-l-lg lg:rounded-l-2xl shadow-lg mb-6 lg:mb-0 overflow-hidden h-auto">
            <img
              className="h-full w-full rounded-l-lg lg:rounded-l-2xl zoom-on-hover"
              src="https://blog.laravelvietnam.org/content/images/size/w1000/2024/04/featured-img-laravel-news-2-1.jpg"
              alt="image"
            />
          </div>
          <div className="w-full lg:w-5/12 rounded-r-lg lg:rounded-r-2xl px-3 sm:px-3 md:px-4 lg:px-6 xl:px-6 py-[1.5rem] flex flex-col gap-5 lg:gap-10 shadow-lg">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#000000cc] hover:text-[#000000] transition delay-[45ms]">
              Trên tay Reverb, official WebSocket server từ Laravel
            </h1>
            <p className="text-sm lg:text-base xl:text-lg text-[#475467]">
              Cách đây không lâu, phiên bản Laravel 11 đã chính thức ra mắt. Đi với đó là Reverb, package sẽ mang đến giao tiếp WebSocket cho các ứng dụng Laravel hoàn toàn bằng PHP (không cần cài đặt thêm extension hoặc sử dụng các stack khác
            </p>
            <div className="flex justify-between text-xs lg:text-sm">
              <div className="flex justify-between gap-2 items-center xl:flex">
                <Image
                  height={26}
                  width={26}
                  className="rounded-full"
                  src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18810/631175d26916f.png"
                  alt="avatar"
                />
                <span className="text-[#292929] text-[10px] lg:text-sm xl:text-sm">Vũ Huy Quang</span>
              </div>
              <div className="flex justify-between gap-5 text-[#979797] items-center text-[10px] lg:text-sm xl:text-sm">
                <span className="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">Công nghệ</span>
                <span>10 ngày trước</span>
                <span>3 phút đọc</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            <div key={1} className="flex flex-col cursor-pointer gap-3 p-4 border-2 border-gray-100 rounded-3xl">
              <div className="h-auto max-h-56 overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full zoom-on-hover rounded-2xl"
                  src="https://blog.laravelvietnam.org/content/images/size/w1000/2022/12/livewire-and-recaptcha-v3.jpg"
                  alt="image"
                />
              </div>
              <div className="px-1 flex flex-col gap-3">
                <div className="text-sm lg:text-base xl:text-lg font-bold text-[#475467] hover:text-[#000000cc] transition delay-[45ms]">
                Sử dụng reCAPTCHA v3 với Livewire
                </div>
                <div className="text-[10px] lg:text-[12px] xl:text-[14px] text-[#475467] line-clamp-2">
                Việc sử dụng reCaptcha để hạn chế spam và bot trong các dự án thì đã quá cũ rồi. Nhưng mà việc để
                </div>
                <div className="flex justify-start gap-5 text-[#979797] items-center text-[7px] lg:text-[8px] xl:text-[10px]">
                  <span className="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">
                    Công nghệ
                  </span>
                  <span>2 ngày trước</span>
                  <span>4 phút đọc</span>
                </div>
              </div>
            </div>
            <div key={1} className="flex flex-col cursor-pointer gap-3 p-4 border-2 border-gray-100 rounded-3xl">
              <div className="h-auto max-h-56 overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full zoom-on-hover rounded-2xl"
                  src="https://blog.laravelvietnam.org/content/images/size/w2000/2023/01/TALL.jpg"
                  alt="image"
                />
              </div>
              <div className="px-1 flex flex-col gap-3">
                <div className="text-sm lg:text-base xl:text-lg font-bold text-[#475467] hover:text-[#000000cc] transition delay-[45ms]">
                TALL stack là gì?
                </div>
                <div className="text-[10px] lg:text-[12px] xl:text-[14px] text-[#475467] line-clamp-2">
                Gần đây chắc các bạn cũng đã từng nghe đến TALL stack. Nhưng nếu bạn chưa biết nó là gì, thì đây rồi
                </div>
                <div className="flex justify-start gap-5 text-[#979797] items-center text-[7px] lg:text-[8px] xl:text-[10px]">
                  <span className="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">
                    Công nghệ
                  </span>
                  <span>1 ngày trước</span>
                  <span>5 phút đọc</span>
                </div>
              </div>
            </div>
            <div key={1} className="flex flex-col cursor-pointer gap-3 p-4 border-2 border-gray-100 rounded-3xl">
              <div className="h-auto max-h-56 overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full zoom-on-hover rounded-2xl"
                  src="https://blog.laravelvietnam.org/content/images/size/w1000/2022/12/laravel-10.jpg"
                  alt="image"
                />
              </div>
              <div className="px-1 flex flex-col gap-3">
                <div className="text-sm lg:text-base xl:text-lg font-bold text-[#475467] hover:text-[#000000cc] transition delay-[45ms]">
                Có gì mới trong Laravel 10
                </div>
                <div className="text-[10px] lg:text-[12px] xl:text-[14px] text-[#475467] line-clamp-2">
                Laravel 10 là phiên bản lớn tiếp theo của Laravel, theo kế hoạch sẽ được phát hành vào ngày 7 tháng 2 năm
                </div>
                <div className="flex justify-start gap-5 text-[#979797] items-center text-[7px] lg:text-[8px] xl:text-[10px]">
                  <span className="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">
                    Công nghệ
                  </span>
                  <span>1 ngày trước</span>
                  <span>5 phút đọc</span>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="full-width-container h-[410px] bg-[#e1e5ea] px-[50px] lg:px-[280px] md:px-[180px] sm:px-[80px] xs:px-[30px] py-[80px] mt-10">
        <img className="w-full h-full" src="https://wallpaperaccess.com/full/14736.jpg" alt="image" />
      </div>
    </div>
  );
};
