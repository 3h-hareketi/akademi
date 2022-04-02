import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/solid";
const Custom404 = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="flex flex-row justify-center mx-10">
        <div className="flex flex-col py-20">
          <CheckCircleIcon
            className="mx-auto text-primary-500"
            width={270}
            height={300}
          />
          <p className="py-3 mx-auto text-l">
            Tebrikler! Sertifika kazanmaya yeterli olacak kadar soruyu doğru
            cevapladınız.
          </p>
          <p className="mx-auto text-xl">
            <Link href="/">
              <a className="flex flex-row text-primary-500 decoration-primary-500 ">
                Sertifikanızı görüntüleyin{" "}
                <ArrowRightIcon
                  className="ml-2 text-primary-500"
                  width={24}
                  height={24}
                />
              </a>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
