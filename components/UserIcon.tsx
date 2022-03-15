import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import CurriculumListItem from "../components/CurriculumListItem";
import { Category, Curriculum } from "../interfaces";

type Props = {
  user: any;
};

const UserIcon = ({ user }: Props) => {
  return (
    <>
      {" "}
      <div>{user?.email}</div>
      <button
        className="block px-4 py-3 mb-3 text-xs font-semibold leading-none text-center hover:leading-loose bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
        onClick={() => signOut()}
      >
        Çıkış
      </button>{" "}
    </>
  );
};

export default UserIcon;
