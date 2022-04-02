import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/solid";
const Custom404 = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="flex flex-row justify-center mx-10">
        <div className="flex flex-col py-20">
          <XCircleIcon
            className="mx-auto text-red-500"
            width={270}
            height={300}
          />
          <p className="py-3 mx-auto text-l">Üzgünüz! Başarısız oldunuz.</p>
          <p className="mx-auto text-xl">
            <Link href="/">
              <a className="flex flex-row text-red-500 decoration-red-500 ">
                Tekrar deneyin!{" "}
              </a>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
