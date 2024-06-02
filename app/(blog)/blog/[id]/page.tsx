import { getDetail } from "@/lib/microcms";
import Image from "next/image";
import parse from "html-react-parser";
import "prismjs/themes/prism-dark.css";
const page = async ({ params }: { params: { id: string } }) => {
  const postId = params.id;
  const post = await getDetail(postId);
  return (
    <>
      <article className="prose lg:prose-lg max-w-[1000px] w-full mx-auto px-3 md:px-5 prose-h2:text-[18px] md:prose-h2:text-[24px]">
        <h2 className="sm:text-xl md:text-2xl lg:text-3xl text-center">
          {post.title}
        </h2>
        {post.eyecatch.url && (
          <Image
            src={post.eyecatch.url}
            width={800}
            height={400}
            alt={post.title}
            className="mx-auto mt-5"
          />
        )}
        {parse(post.content)}
      </article>
    </>
  );
};

export default page;
