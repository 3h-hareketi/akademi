import { Curriculum } from "../interfaces";

type Props = {
  curriculum: Curriculum;
};

const CurriculumListItem = ({ curriculum }: Props) => (
  <div className="flex flex-wrap mb-8 -mx-3 lg:mb-6">
    <div className="w-full px-3 mb-4 lg:mb-0 lg:w-1/4">
      {/* <img
      className="object-cover w-full h-full rounded"
      src="https://images.unsplash.com/photo-1552338804-c42590cb7b88?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
      alt=""
    /> */}
    </div>
    <div className="w-full px-3 lg:w-3/4">
      <a className="hover:underline" href="#">
        <h3 className="mb-1 text-2xl font-bold font-heading">
          {curriculum.title}
        </h3>
      </a>
      <div className="flex items-center mb-2 text-sm">
        <a
          className="text-green-600 hover:underline hover:text-green-700"
          href="#"
        >
          Finans
        </a>
        <span className="mx-2 text-gray-400">•</span>
        <span className="text-gray-400">8 konu</span>
      </div>
      <p className="text-gray-500">{curriculum.description}</p>
    </div>
  </div>
);

export default CurriculumListItem;
