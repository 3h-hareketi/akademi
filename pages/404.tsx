import Link from "next/link";
import BlurImage from "../components/BlurImage";
import Layout from "../components/Layout";
import NotFound from "/public/404page.png";

const Custom404 = () => {
  return (
    <Layout>
      <div className="py-10 text-center md:px-10 radius-for-skewed bg-gray-50">
        <div className="flex flex-wrap justify-center mx-auto">
          <div className="py-20 basis-1/2">
            <BlurImage
              className="object-cover"
              src={NotFound}
              alt="3H Hareketi 404 Logo"
              width={270}
              height={300}
            />
            <p className="py-3 text-l">
              Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış
              olabilir!
            </p>
            <p className="text-l">
              Bunun yerine{" "}
              <Link href="/">
                <a className="text-primary-500 decoration-primary-500">
                  Anasayfa&#39;ya
                </a>
              </Link>{" "}
              gidin.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
