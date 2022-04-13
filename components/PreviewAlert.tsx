import Link from "next/link";

type Props = {
  preview: boolean;
};

const PreviewAlert = ({ preview }: Props) => {
  if (!preview) {
    return null;
  }

  return (
    <div className="h-16 bg-red-400">
      <div className="container h-full mx-auto">
        <div className="flex flex-col justify-center h-full">
          <div className="flex items-center justify-between flex-1">
            <span className="text-xl font-bold">Önizleme modundasınız!</span>
            <Link href="/api/exit-preview" passHref>
              <button className="px-4 py-3 font-bold transition duration-300 ease-in-out bg-yellow-300 rounded-lg hover:bg-yellow-600">
                Önizlemeden Çık
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewAlert;
