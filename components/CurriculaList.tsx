import Link from "next/link";
import { useRouter } from "next/router";
import CurriculumListItem from "../components/CurriculumListItem";
import { Category, Curriculum } from "../interfaces/graphcms";

type Props = {
  curricula: Array<Curriculum>;
  categories: Array<Category>;
};

const CurriculaList = ({ curricula, categories }: Props) => {
  const router = useRouter();
  const currentCategory = router.query.category;

  return (
    <section>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container px-4 mx-auto Konular">
          <div className="flex flex-wrap items-center mb-16">
            <div className="w-full lg:w-1/2">
              <span className="font-bold text-primary-500">3H Akademi</span>
              <h2 className="text-4xl font-bold lg:text-5xl font-heading">
                Eğitimler
              </h2>
            </div>
            <div className="hidden w-1/2 text-right lg:block">
              <a
                className="inline-block px-6 py-2 font-bold leading-loose transition duration-200 bg-primary-500 rounded-l-xl rounded-t-xl hover:bg-primary-700 text-gray-50"
                href="#"
                data-removed="true"
              >
                Bizimle İletişime Geçin
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-8 lg:mb-0 lg:w-1/4">
              <div className="px-6 py-4 bg-white rounded shadow">
                <h4 className="mb-4 font-bold text-gray-500 uppercase">
                  Kategoriler
                </h4>
                <ul>
                  <Link href={`/egitimler`} passHref>
                    <a
                      className={
                        currentCategory === undefined
                          ? "block px-3 py-2 mb-4 font-bold rounded text-primary-500 bg-gray-50"
                          : "block px-3 py-2 mb-4 rounded hover:text-primary-700 hover:bg-gray-50"
                      }
                    >
                      Tümü
                    </a>
                  </Link>
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link href={`/egitimler/${category.slug}`} passHref>
                        <a
                          className={
                            currentCategory === category.slug
                              ? "block px-3 py-2 mb-4 font-bold rounded text-primary-500 bg-gray-50 "
                              : "block px-3 py-2 mb-4 rounded hover:text-primary-700 hover:bg-gray-50"
                          }
                          href="#"
                        >
                          {category.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full px-3 lg:w-3/4">
              {curricula.map((curriculum) => (
                <CurriculumListItem
                  curriculum={curriculum}
                  key={curriculum.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculaList;
