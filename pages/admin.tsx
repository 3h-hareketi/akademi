import { useMemo } from "react";
import { Column, useGlobalFilter, useSortBy, useTable } from "react-table";
import Image from "next/image";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { getSdk } from "../interfaces/fauna";
import { client } from "../lib/faunaGraphQlClient";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Admin() {
  const data = useMemo(
    () => [
      {
        user: {
          name: "Jane Cooper",
          email: "jane.cooper@example.com",
          image:
            "https://lh3.googleusercontent.com/a-/AOh14GgINwldyYIwSgpUVNVwxTuB_DNZScdRAbmjicWagw=s288-p-no",
        },
        event: "Liberalizm 101 - Jane Cooper Sınav Sonucu",
        eventType: "Sınav",
        id: "123",
      },
      {
        user: {
          name: "Jim Cooper",
          email: "jim.cooper@example.com",
          image:
            "https://lh3.googleusercontent.com/a-/AOh14GgINwldyYIwSgpUVNVwxTuB_DNZScdRAbmjicWagw=s288-p-no",
        },
        event: "Liberalizm 101 - Jane Cooper Sınav Sonucu",
        eventType: "Başvuru",
        id: "123",
      },
    ],

    []
  );

  const columns: Array<Column> = useMemo(
    () => [
      {
        Header: "Kullanıcı",

        accessor: "user",
        Cell: ({ value }) => (
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <Image
                className="w-10 h-10 rounded-full"
                src={value.image}
                alt=""
                height={"40px"}
                width={"40px"}
              />
            </div>
            <div className="ml-4">
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
        accessor: "event",
        Cell: ({ value }) => (
          <div className="text-sm text-gray-900">{value}</div>
        ),
      },
      {
        Header: "Tür",

        accessor: "eventType",
        Cell: ({ value }) => (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            {value}
          </span>
        ),
      },
      {
        Header: "Onayla",

        accessor: "id",
        Cell: ({ value }) => (
          <Link href={`/exam/${value}`} passHref>
            <a className="text-indigo-600 hover:text-indigo-900">Gör</a>
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
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setGlobalFilter(value);
  };

  return (
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
                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
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
                    {rows.map((row) => {
                      prepareRow(row);

                      return (
                        <tr {...row.getRowProps()} key={row.id}>
                          {row.cells.map((cell, cellIdx) => (
                            <td
                              className={classNames(
                                "border-b border-gray-200 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });
  const sdk = getSdk(client);
  const { results, submissions } = await sdk.resultsAndSubmissions();

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/giris",
      },
    };
  }

  return {
    props: {
      results,
      submissions,
    },
  };
};
