import { getList } from "@/lib/microcms";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogList = async () => {
  const { contents } = await getList();
  console.log(contents);
  return (
    <>
      <div className="container">
        <h2 className="text-center text-2xl md:text-4xl font-extraBold">
          BlogList
        </h2>
        <div className="max-w-[1024px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-6 md:mt-10">
          {contents.map((content) => (
            <ul className="list-none bg-white rounded-lg">
              <li>
                <Link href={`/blog/${content.id}`}>
                  <Image
                    src={content.eyecatch.url}
                    width={800}
                    height={400}
                    alt={content.title}
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <div className="text-xs md:text-sm line-clamp-2">
                      {content.title}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      {content.tag.map((tag) => (
                        <p className="py-1 px-3 text-xs rounded-lg bg-slate-200">
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
