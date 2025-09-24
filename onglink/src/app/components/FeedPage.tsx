// "use client";
// import React, { useState } from "react";
// import PublicarForm from "@/app/components/PublicarForm";
// import FeedPost from "@/app/components/FeedPost";
// import { Row } from "react-bootstrap";



// interface Post {
//   title: string;
//   message: string;
//   image?: File | null;
// }

// const FeedPage: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   const addPost = (post: Post) => {
//     setPosts((prevPosts) => [post, ...prevPosts]);
//   };

//   return (
//     <div className="container-fluid col-12 vstack gap-1 p-0">
//       <div id="componente_feedpage" className="p-3">
//         <PublicarForm onPublish={addPost} />
//       </div>
      
//       <div className="mt-2" id="div_pub">
//         {posts.length === 0 ? (
//           <p className="text-center"></p>
//         ) : (
//           posts.map((post, index) => <FeedPost key={index} post={post} />)
//         )}
//       </div>
      
//     </div>
//   );
// };

// export default FeedPage;
"use client";
import React from "react";
import FeedPost from "@/app/components/FeedPost";

interface Post {
  title: string;
  message: string;
  image?: File | null;
}

interface FeedPageProps {
  posts: Post[];
}

const FeedPage: React.FC<FeedPageProps> = ({ posts }) => {
  return (
    <div className="mt-2" id="div_pub">
      {posts.length === 0 ? (
        <p className="text-center">Nenhuma publicação ainda.</p>
      ) : (
        posts.map((post, index) => <FeedPost key={index} post={post} />)
      )}
    </div>
  );
};

export default FeedPage;