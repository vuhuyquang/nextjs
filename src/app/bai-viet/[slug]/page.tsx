"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Post {
  title: string;
  shortContent: string;
  imageUrl: string;
  author: string;
  authorAvatar: string;
  category: string;
  createdAt: string;
  readingTime: string;
  fullContent: string;
}

const fetchPostData = async (slug: string): Promise<Post> => {
  return {
    title: 'Người hâm mộ Madrid vui mừng chào đón Mbappé',
    shortContent: 'Cầu thủ mới của Real Madrid bày tỏ lòng biết ơn tới người hâm mộ đã đến sân vận động.',
    imageUrl: 'https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--f5013a7a-abe5-46a2-b92d-1def14470b69/ND_MADRIDISMO_CON_MBAPPE_01_1PC9302.app.png?preferwebp=true&width=1440',
    author: 'Vũ Huy Quang',
    authorAvatar: 'https://files.fullstack.edu.vn/f8-prod/user_avatars/18810/631175d26916f.png',
    category: 'Thể thao',
    createdAt: '10 ngày trước',
    readingTime: '5 phút đọc',
    fullContent: 'Sau khi buổi lễ trao tặng kết thúc, Mbappé đã đi dạo quanh sân Santiago Bernabéu để đáp lại tình cảm của người hâm mộ đã đến sân vận động. Người hâm mộ Madrid đã hô vang tên anh ấy và lần đầu tiên chứng kiến ​​người hùng mới của họ khi anh ấy đá bóng vào đám đông.',
  };
};

const PostDetail = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const getPost = async () => {
      const postData = await fetchPostData(slug);
      setPost(postData);
    };
    getPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-[54rem] mx-auto p-5">
      <h1 style={{ lineHeight: '1.1', letterSpacing: '-1px' }} className="mb-5 text-[3rem] font-bold tracking-tighter text-[#2c3440] hover:text-[#000000cc] transition delay-[45ms] cursor-pointer">{post.title}</h1>
      <p style={{ letterSpacing: '-.5px' }} className="mb-5 text-[#475467] text-[1.5rem] font-normal">{post.shortContent}</p>
      <img className="w-full mb-5 rounded-2xl" src={post.imageUrl} alt={post.title} loading="lazy" />
      <div className="mb-5 flex items-center justify-between">
        <div className="flex justify-between gap-2 items-center">
          <Image
            height={26}
            width={26}
            className="rounded-2xl"
            src={post.authorAvatar}
            alt="avatar"
            loading="lazy"
          />
          <span className="text-[#292929] text-[10px] lg:text-sm xl:text-sm">{post.author}</span>
        </div>
        <div className="flex justify-between gap-5 text-[#979797] items-center text-[10px] lg:text-sm xl:text-sm">
          <span className="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">{post.category}</span>
          <span>{post.createdAt}</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
      <div className='text-[#475467] mb-5 text-[1.25rem] leading-relaxed'>{post.fullContent}</div>
    </div>
  );
};

export default PostDetail;
