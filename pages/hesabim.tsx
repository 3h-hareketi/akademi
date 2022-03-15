import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Interweave } from "interweave";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Choices from "../components/Choices";
const certificates = [
  {
    id: "1",
    title: "Sertifika #1",
    content: "",
  },
  {
    id: "2",
    title: "Klasik Liberalizm",
    content: "",
  },
  {
    id: "3",
    title: "Sertifika #3",
    content: "",
  },
];
const Profile = () => {
  const { data: session } = useSession();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl mt-36">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                <div className="mt-10 rounded-full">
                  <Image
                    alt="profile image"
                    src={session?.user?.image || "/images/placeholder.jpeg"}
                    className="rounded-full"
                    width="150px"
                    height="150px"
                  />
                </div>
              </div>

              <div className="w-full px-4 lg:w-4/12 lg:order-3">
                <div className="flex justify-center py-4 pt-8 lg:pt-4">
                  <div className="p-3 mr-4 text-center">
                    <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                      12/12/2020
                    </span>
                    <span className="text-sm text-gray-500">Üyelik Tarihi</span>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12 lg:order-1">
                <div className="flex justify-center py-4 pt-8 lg:pt-4">
                  <div className="p-3 mr-4 text-center">
                    <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                      3
                    </span>
                    <span className="text-sm text-gray-500">Sertifika</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <h3 className="mb-2 text-4xl font-semibold leading-normal text-gray-800">
                {session?.user?.name}
              </h3>
              <div className="mt-0 mb-2 text-sm font-bold leading-normal text-gray-500 uppercase">
                <i className="mr-2 text-lg text-gray-500 fas fa-map-marker-alt"></i>
                {session?.user?.email}
              </div>
            </div>
            <div className="py-10 mt-10 text-center border-t border-gray-300">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 lg:w-9/12">
                  <p className="mb-4 text-lg leading-relaxed text-gray-800">
                    Şu ana kadar kazandığınız sertifikaları
                    görüntüleyebilirsiniz.
                  </p>

                  {certificates.map((certificate) => (
                    <Disclosure key={certificate.id} as="div" className="mt-2">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg h-14 text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primaryShade focus-visible:ring-opacity-75">
                            <span className="my-auto">{certificate.title}</span>
                            <ChevronUpIcon
                              className={`${
                                !open ? "transform rotate-180" : ""
                              } w-5 h-5 text-primary-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="p-5">
                              {" "}
                              <Interweave content={certificate.content} />
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profile;
