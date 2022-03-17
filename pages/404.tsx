import Image from "next/image";
import Link from "next/link";

export default function custom404() {
  return (
    <div className="py-10 md:px-10 radius-for-skewed bg-gray-50">
      <div className="mx-auto">
        <div className="grid justify-items-center">
          <Image
            className="object-cover"
            src="/404.png"
            alt="3H Movement-3H Hareketi"
            width={500}
            height={355}
          />
          <h1 className="py-5 text-2xl font-bold">
            Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış
            olabilir!
          </h1>
          <p className="text-xl font-semibold">
            Bunun yerine{" "}
            <Link href="/">
              <a className="font-bold text-primary-500 decoration-primary-500">
                Anasayfa&#39;ya
              </a>
            </Link>{" "}
            gidin.
          </p>
        </div>
      </div>
    </div>
  );
}
