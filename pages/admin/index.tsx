import { useMemo } from "react";
import {
  Column,
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { getSdk, UserFragment } from "../../interfaces/fauna";
import { client } from "../../lib/faunaGraphQlClient";
import { NextSeo } from "next-seo";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type DataRow = {
  user: UserFragment;
  curriculumName: string;
  type: "result" | "submission";
  id: string;
};

type Props = {
  submissionsAndResults: DataRow[];
};

const Admin = ({ submissionsAndResults }: Props) => {
  const data = useMemo(() => submissionsAndResults, [submissionsAndResults]);
  const columns: Array<Column<DataRow>> = useMemo(
    () => [
      {
        Header: "Kullanıcı",

        accessor: "user",
        Cell: ({ value }) => (
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <Image
                className="w-10 h-10 rounded-full"
                src={value.image || "/images/avatar.png"}
                alt=""
                height={"40px"}
                width={"40px"}
              />
            </div>
            <div className="mx-auto">
              <div className="text-sm font-medium text-gray-900">
                {value.name}
              </div>
              <div className="text-sm text-gray-500">{value.email}</div>
            </div>
          </div>
        ),
      },

      {
        Header: "Aktivite",

        accessor: "curriculumName",
        Cell: ({ value }) => (
          <div className="text-sm text-gray-900">{value}</div>
        ),
      },
      {
        Header: "Tür",

        accessor: "type",
        Cell: ({ value }) => (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            {value}
          </span>
        ),
      },
      {
        Header: "Onayla",

        accessor: "id",
        Cell: ({ value, row }) => (
          <Link
            href={
              row.values.type === "submission"
                ? `/admin/${value}`
                : `/api/certificate?id=${value}`
            }
            passHref
          >
            <a className="text-indigo-600 hover:text-indigo-900">
              {row.values.type === "submission" ? "Değerlendir" : "Görüntüle"}
            </a>
          </Link>
        ),
      },
    ],

    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setGlobalFilter(value);
  };

  return (
    <>
      <NextSeo title="Yönetim" noindex={true} />
      <div className="py-10 text-center md:px-10 radius-for-skewed bg-gray-50">
        <div className="flex flex-wrap justify-center mx-auto">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:py-5">
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      onChange={handleFilterInputChange}
                      id="search"
                      placeholder="Ara..."
                      className="block w-full h-8 max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>
                <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                  <table
                    className="min-w-full divide-y divide-gray-200"
                    {...getTableProps()}
                  >
                    <thead className="bg-gray-50">
                      {headerGroups.map((headerGroup) => (
                        <tr
                          {...headerGroup.getHeaderGroupProps()}
                          key={headerGroup.id}
                        >
                          {headerGroup.headers.map((column, columnIdx) => (
                            <th
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                              scope="col"
                              className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                              key={column.id}
                            >
                              {columnIdx !== headerGroup.headers.length - 1
                                ? column.render("Header")
                                : null}
                              <span>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? " ↑"
                                    : " ↓"
                                  : ""}
                              </span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody
                      className="bg-white divide-y divide-gray-200"
                      {...getTableBodyProps()}
                    >
                      {page.map((row) => {
                        prepareRow(row);

                        return (
                          <tr {...row.getRowProps()} key={row.id}>
                            {row.cells.map((cell, cellIdx) => (
                              <td
                                className={classNames(
                                  "border-b border-gray-200 whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                                )}
                                key={cell.value}
                              >
                                {cell.render("Cell")}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="flex flex-row pagination">
                    <span className="mt-3 ml-3 mr-auto">
                      Sayfa{" "}
                      <strong>
                        {pageIndex + 1} / {pageOptions.length}
                      </strong>{" "}
                    </span>
                    <div className="mx-auto mt-3">
                      <button
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                      >
                        {
                          <div
                            className={`w-4 h-4 ${
                              !canPreviousPage ? "text-gray-300" : ""
                            }`}
                          >
                            <ChevronDoubleLeftIcon />
                          </div>
                        }
                      </button>{" "}
                      <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                      >
                        <div
                          className={`w-4 h-4 ${
                            !canPreviousPage ? "text-gray-300" : ""
                          }`}
                        >
                          <ChevronLeftIcon />
                        </div>{" "}
                      </button>{" "}
                      <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                      >
                        <div
                          className={`w-4 h-4 ${
                            !canPreviousPage ? "text-gray-300" : ""
                          }`}
                        >
                          <ChevronRightIcon />
                        </div>{" "}
                      </button>{" "}
                      <button
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                      >
                        <div
                          className={`w-4 h-4 ${
                            !canPreviousPage ? "text-gray-300" : ""
                          }`}
                        >
                          <ChevronDoubleRightIcon />
                        </div>{" "}
                      </button>{" "}
                    </div>

                    {/* <span>
                      | Sayfa numarası:{" "}
                      <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                          const page = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;

                          gotoPage(page);
                        }}
                        className="w-16 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      />
                    </span>{" "} */}
                    <select
                      value={pageSize}
                      onChange={(e) => {
                        setPageSize(Number(e.target.value));
                      }}
                      className="ml-auto"
                    >
                      {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          {pageSize} adet
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/giris",
      },
    };
  }

  // Accept only in-house emails
  // if (!session.user.email?.includes("@3hhareketi.org")) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/giris",
  //     },
  //   };
  // }

  const sdk = getSdk(client);
  const { results, submissions } = await sdk.resultsAndSubmissions();

  const resultData = results.data.map((result) => {
    return {
      user: result?.user,
      curriculumName: result?.curriculumName,
      type: "result",
      id: result?._id,
    };
  });

  const submissionData = submissions.data.map((submission) => {
    return {
      user: submission?.user,
      curriculumName: submission?.curriculumName,
      type: "submission",
      id: submission?._id,
    };
  });

  return {
    props: {
      submissionsAndResults: submissionData.concat(resultData),
    },
  };
};

export default Admin;
