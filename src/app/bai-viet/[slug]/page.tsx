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
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="mb-5 text-3xl md:text-4xl font-bold tracking-tight text-gray-800 hover:text-gray-900 transition duration-300 cursor-pointer">
        {post.title}
      </h1>
      <p className="mb-5 text-lg md:text-xl text-gray-600">{post.shortContent}</p>
      <img className="w-full mb-5 rounded-lg" src={post.imageUrl} alt={post.title} loading="lazy" />
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            height={26}
            width={26}
            className="rounded-full"
            src={post.authorAvatar}
            alt="avatar"
            loading="lazy"
          />
          <div className="text-[10px] lg:text-[12px] xl:text-[14px] text-[#475467] line-clamp-2">
          {post.author}
          </div>
        </div>
        <div className="flex justify-start gap-5 text-[#979797] items-center text-[7px] lg:text-[8px] xl:text-[10px]">
          <span className="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">
            {post.category}
          </span>
          <span>{post.createdAt}</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
      <div className="text-gray-700 mb-5 text-lg leading-relaxed">{post.fullContent}</div>
    </div>
  );
};

export default PostDetail;
