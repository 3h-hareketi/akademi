import Image from "next/image";
import Link from "next/link";

export default function custom404() {
  return (
    <div className="py-10 md:px-10 radius-for-skewed bg-gray-50">
      <div className="mx-auto">
        <div className="grid justify-items-center">
          <Image
            className="object-cover"
            src="/404page.png"
            alt="3H Movement-3H Hareketi"
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
  );
}
