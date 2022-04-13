import Link from "next/link";
import Layout from "../components/Layout";

const Custom500 = () => {
  return (
    <Layout>
      <div className="py-10 text-center md:px-10 radius-for-skewed bg-gray-50">
        <div className="flex flex-wrap justify-center mx-auto">
          <div className="py-20 basis-1/2">
            <p className="py-3 text-l">Sunucuda bir hata oluştu.</p>
            <p className="text-l">
              {" "}
              <Link href="/">
                <a className="text-primary-500 decoration-primary-500">
                  Anasayfa&#39;ya
                </a>
              </Link>{" "}
              gitmeyi deneyin.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom500;
