import { getList } from "@/lib/microcms";
import SectionHeading from "../sectionHeading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useSectionInView } from "@/lib/hook";
const Blog = async () => {
  const { contents } = await getList();
  return (
    <>
      <section id="blog" className="max-w-[800px] w-full mx-auto">
        <SectionHeading title="Blog" />
        <div className="grid grid-cols-3 gap-3">
          {contents.map((content, index) => (
            <Link href={`/blog/${content.id}`} key={content.id}>
              <Card>
                <CardHeader className="p-0">
                  <div>
                    <Image
                      src={content.eyecatch.url}
                      width={130}
                      height={130}
                      alt={content.title}
                      className="w-full rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="text-sm p-2">{content.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <p className="inline-block mt-4 px-4 py-2 bg-slate-300 text-center font-bold rounded-md tracking-tight">
            <Link href="/blog">more</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;
