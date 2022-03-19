import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/solid";
import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type Props = {
  user: DefaultSession["user"];
};

const UserDropdown = ({ user }: Props) => {
  return (
    <div className="ml-auto">
      <Menu as="div" className="relative ml-3">
        <div>
          {user?.image ? (
            <Menu.Button>
              {" "}
              <Image
                src={user?.image}
                alt=""
                width={"32px"}
                height={"32px"}
                className="rounded-full"
              />
            </Menu.Button>
          ) : (
            <Menu.Button className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-400 focus:ring-white">
              <div className="w-8 h-8">
                {" "}
                <UserCircleIcon />
              </div>
            </Menu.Button>
          )}
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link href="/hesabim" passHref>
                  <a
                    className={`px-4 py-2 text-sm text-gray-700 flex justify-self-center ${
                      active && "bg-gray-100"
                    }`}
                  >
                    <div className="w-4 h-4 mr-2">
                      {" "}
                      <UserCircleIcon />
                    </div>
                    Hesabım{" "}
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm text-gray-700 ${
                    active && "bg-gray-100"
                  }`}
                  onClick={() => signOut()}
                >
                  Çıkış
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserDropdown;
