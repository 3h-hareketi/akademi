import { Curriculum } from "../interfaces";
import Image from "next/image";
import Link from "next/link";

type Props = {
  curriculum: Curriculum;
};

const CurriculumListItem = ({ curriculum }: Props) => (
  <div className="flex flex-wrap mb-8 -mx-3 lg:mb-6">
    <div className="w-full px-3 mb-4 lg:mb-0 lg:w-1/4 ">
      <div className="flex object-cover w-full h-full rounded">
        <div className="mx-auto">
          {" "}
          <Image
            className="rounded"
            src={curriculum.image?.url || "/placeholder.jpeg"}
            alt=""
            height={140}
            width={250}
          />
        </div>
      </div>
    </div>
    <div className="w-full px-3 lg:w-3/4">
      <Link href={`/${curriculum.category?.slug}/${curriculum.slug}`} passHref>
        <a className="hover:underline" href="#">
          <h3 className="mb-1 text-2xl font-bold font-heading">
            {curriculum.title}
          </h3>
        </a>
      </Link>
      <div className="flex items-center mb-2 text-sm">
        <Link href={`${curriculum.category?.slug}`} passHref>
          <a
            className="text-primary hover:underline hover:text-primaryShade"
            href="#"
          >
            {curriculum.category?.title}
          </a>
        </Link>
        <span className="mx-2 text-gray-400">•</span>
        <span className="text-gray-400">8 konu</span>
      </div>
      <p className="text-gray-500">{curriculum.description}</p>
    </div>
  </div>
);

export default CurriculumListItem;
