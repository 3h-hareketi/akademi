import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="relative flex flex-col w-full min-w-0 mt-48 mb-6 break-words bg-white rounded-lg shadow-xl">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                <div className="rounded-full">
                  <Image
                    alt="profile image"
                    src={session?.user?.image || "/images/placeholder.jpeg"}
                    className="rounded-full"
                    width="150px"
                    height="150px"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12 lg:order-3 lg:text-right lg:self-center">
                <div className="px-3 py-6 mt-32 sm:mt-0">
                  <button
                    className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase rounded shadow outline-none bg-primary-500 active:bg-primary-600 hover:shadow-md focus:outline-none sm:mr-2"
                    type="button"
                    //   style="transition: all 0.15s ease 0s;"
                  >
                    Yardım
                  </button>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <a href="#pablo" className="font-normal text-primary-500">
                    Show more
                  </a>
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
