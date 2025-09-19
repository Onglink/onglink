"use client";
import React, { useState } from "react";
import PublicarForm from "@/app/components/PublicarForm";
import FeedPost from "@/app/components/FeedPost";

interface Post {
  title: string;
  message: string;
  image?: File | null;
}

const FeedPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts((prevPosts) => [post, ...prevPosts]);
  };

  return (
    <div className="container-fluid col-12 vstack gap-4 p-0">
      <div id="subdiv_publicar" className="p-3">
        <PublicarForm onPublish={addPost} />
      </div>
      <div className="mt-4" id="div_pub">
        {posts.length === 0 ? (
          <p className="text-center"></p>
        ) : (
          posts.map((post, index) => <FeedPost key={index} post={post} />)
        )}
      </div>
    </div>
  );
};

export default FeedPage;