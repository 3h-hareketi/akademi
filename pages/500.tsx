import Link from "next/link";

const Custom404 = () => {
  return (
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
  );
};

export default Custom404;
