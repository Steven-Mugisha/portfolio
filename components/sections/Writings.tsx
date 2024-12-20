import React from "react";
import getPostMetadata from "../getPostMetadata";
import WritingPreview from "../sub/WritingPreview";

const Writings = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <WritingPreview key={post.slug} {...post} />
  ));
  return (
    <div className="justify-items-center">
      <div className="text-gray-200 text-s font-bold mb-4">WRITING</div>
      <div>{postPreviews}</div>
    </div>
  );
};

export default Writings;
