import { Curriculum } from "../interfaces/graphcms";
import Image from "next/image";
import Link from "next/link";

interface Props {
  curriculum: Curriculum;
}

const CurriculumCard = ({ curriculum }: Props) => (
  <div key={curriculum.id} className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
    <div className="bg-white rounded shadow-md">
      <div className="relative h-64">
        <Image
          className="rounded-t"
          src={curriculum.image?.url || "/placeholder.jpeg"}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-6">
        <span className="text-gray-400">2021</span>
        <h3 className="mb-4 text-2xl font-bold font-heading">
          {curriculum.title}
        </h3>
        <div className="flex font-bold text-primary-500 hover:text-primary-700">
          <svg
            className="w-6 h-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link
            href={`/curricula/${curriculum.category?.slug}/${curriculum.slug}`}
          >
            Kurs detayları
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CurriculumCard;
