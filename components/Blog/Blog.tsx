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
const Blog = async () => {
  const { contents } = await getList();
  console.log(contents);
  return (
    <>
      <div className="max-w-[800px] w-full mx-auto">
        <SectionHeading title="Blog" />
        <div className="grid grid-cols-3 gap-3">
          {contents.map((content, index) => (
            <Link href={`/blog/${content.id}`} key={content.id}>
              <Card className="">
                <CardHeader className="p-4">
                  <div>
                    <Image 
                      src={content.eyecatch.url}
                      width={130}
                      height={130}
                      alt={content.title}
                      className="mx-auto"
                    />
                  </div>
                  <CardTitle className="text-sm">{content.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
