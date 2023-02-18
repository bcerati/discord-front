import ServerCategory from "../../../types/ServerCategory";

interface IChannelCategoryProps {
  category: ServerCategory;
}

export default function ChannelCategory({ category }: IChannelCategoryProps) {
  return (
    <div>
      <button className="flex items-center px-0.5 w-full font-title text-xs tracking-wide hover:text-gray-100 uppercase">
        <svg
          viewBox="0 0 24 24"
          className="w-3 h-3 mr-0.5 transition duration-200"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
          ></path>
        </svg>
        {category.name}
      </button>
      <div className="mt-[5px] space-y-0.5">{/** CHANNELS */}</div>
    </div>
  );
}
