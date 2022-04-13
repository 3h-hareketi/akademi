import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, UserCircleIcon, EyeIcon } from "@heroicons/react/solid";
import { Interweave } from "interweave";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import BlurImage from "../components/BlurImage";
import Layout from "../components/Layout";
import { getSdk, ResultFragment } from "../interfaces/fauna";
import { client } from "../lib/faunaGraphQlClient";

type Props = {
  session: Session | undefined;
  results: ResultFragment[];
};

const Profile = ({ results }: Props) => {
  const { data: session } = useSession({ required: true });

  return (
    <Layout>
      <section className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl mt-36">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                  <div className="mt-10 rounded-full">
                    {session?.user?.image ? (
                      <BlurImage
                        alt="profile image"
                        src={session?.user?.image || "/placeholder.jpeg"}
                        className="rounded-full"
                        width="160px"
                        height="160px"
                      />
                    ) : (
                      <div className="w-40 h-40">
                        {" "}
                        <UserCircleIcon />
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12 lg:order-3">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="p-3 mr-4 text-center">
                      <span className="block text-xl font-bold tracking-wide text-gray-700 uppercase">
                        12/12/2020
                      </span>
                      <span className="text-sm text-gray-500">
                        Üyelik Tarihi
                      </span>
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
                    {results.map((certificate) => (
                      <Disclosure
                        key={certificate?._id}
                        as="div"
                        className="mt-2"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-lg h-14 text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primaryShade focus-visible:ring-opacity-75">
                              <span className="my-auto">
                                {certificate?.curriculumName}
                              </span>
                              <ChevronUpIcon
                                className={`${
                                  !open ? "transform rotate-180" : ""
                                } w-5 h-5 text-primary-500`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                              {" "}
                              <h3>{"Detailsbsdfsdf"}</h3>
                              <Link
                                href={`/api/certificate?id=${certificate?._id}`}
                                passHref
                              >
                                <a href="#" className="flex text-primary-500">
                                  {" "}
                                  Sertifikayı Görüntüle
                                  <EyeIcon className="w-5 h-5 ml-2 text-primary-500" />
                                </a>
                              </Link>
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
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  const sdk = getSdk(client);
  const { findUserByID: user } = await sdk.ResultsByUserID({
    id: session.user.id,
  });

  return {
    props: {
      session: await getSession(context),
      results: user?.results.data,
    },
  };
};

export default Profile;
