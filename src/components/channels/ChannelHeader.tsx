import type ChannelType from "../../types/Channel";
import Hashtag from "../assets/icons/Hashtag";

interface IChannelHeaderProps {
  channel: ChannelType;
}

export default function ChannelHeader({ channel }: IChannelHeaderProps) {
  return (
    <div className="flex items-center px-2 h-12 shadow-sm">
      <div className="flex items-center">
        <Hashtag />

        <span className="mr-2 font-title text-white whitespace-nowrap">
          {channel.name}
        </span>
      </div>
      <div className="hidden mx-2 w-px h-6 bg-white/[.06] md:block"></div>
      <div className="flex items-center ml-auto md:hidden">
        <button className="text-gray-200 hover:text-gray-100">
          <svg
            aria-hidden="false"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-2 w-6 h-6"
          >
            <path
              fill="currentColor"
              d="M5.433 21a.12.12 0 01-.118-.141L6 17H2.143a.12.12 0 01-.118-.14l.308-1.76a.12.12 0 01.118-.1H6.35l1.06-6H3.553a.12.12 0 01-.118-.14l.308-1.76A.12.12 0 013.86 7H7.76l.692-3.901A.12.12 0 018.57 3h1.757a.12.12 0 01.118.141L9.76 7h6l.692-3.901A.12.12 0 0116.57 3h1.757a.12.12 0 01.118.141L17.76 7h3.857a.12.12 0 01.118.14l-.308 1.76a.12.12 0 01-.118.1h-3.9l-.36 2.04H15.05L15.41 9h-6l-1.06 6h2.21v2H8l-.693 3.901A.12.12 0 017.19 21H5.433z"
            ></path>
            <path
              fill="currentColor"
              d="M13.44 12.96a.96.96 0 00-.96.96v6.301c0 .53.43.96.96.96h.96a.24.24 0 01.24.24v2.039a.24.24 0 00.4.178l2.446-2.21a.96.96 0 01.643-.247h4.43c.531 0 .96-.43.96-.96V13.92a.96.96 0 00-.96-.96h-9.12z"
            ></path>
          </svg>
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <svg viewBox="0 0 24 24" className="mx-2 w-6 h-6">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"
            ></path>
            <path
              fill="currentColor"
              d="M20 20.006h2v-1c0-2.563-1.73-4.565-4.479-5.47 1.541 1.377 2.48 3.27 2.48 5.47v1zM14.883 11.908A4.007 4.007 0 0018 8.006a4.006 4.006 0 00-3.503-3.97A5.977 5.977 0 0116 8.007a5.974 5.974 0 01-1.362 3.804c.082.032.164.064.245.098z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden items-center ml-auto md:flex">
        <button className="text-gray-200 hover:text-gray-100">
          <svg
            aria-hidden="false"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-2 w-6 h-6"
          >
            <path
              fill="currentColor"
              d="M5.433 21a.12.12 0 01-.118-.141L6 17H2.143a.12.12 0 01-.118-.14l.308-1.76a.12.12 0 01.118-.1H6.35l1.06-6H3.553a.12.12 0 01-.118-.14l.308-1.76A.12.12 0 013.86 7H7.76l.692-3.901A.12.12 0 018.57 3h1.757a.12.12 0 01.118.141L9.76 7h6l.692-3.901A.12.12 0 0116.57 3h1.757a.12.12 0 01.118.141L17.76 7h3.857a.12.12 0 01.118.14l-.308 1.76a.12.12 0 01-.118.1h-3.9l-.36 2.04H15.05L15.41 9h-6l-1.06 6h2.21v2H8l-.693 3.901A.12.12 0 017.19 21H5.433z"
            ></path>
            <path
              fill="currentColor"
              d="M13.44 12.96a.96.96 0 00-.96.96v6.301c0 .53.43.96.96.96h.96a.24.24 0 01.24.24v2.039a.24.24 0 00.4.178l2.446-2.21a.96.96 0 01.643-.247h4.43c.531 0 .96-.43.96-.96V13.92a.96.96 0 00-.96-.96h-9.12z"
            ></path>
          </svg>
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <svg viewBox="0 0 24 24" fill="none" className="mx-2 w-6 h-6">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 9v5a3 3 0 003 3v1H3v-1a3 3 0 003-3V9a6 6 0 1112 0zm-6 12c-1.476 0-2.752-.81-3.445-2h6.89c-.693 1.19-1.97 2-3.445 2z"
            ></path>
          </svg>
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <svg viewBox="0 0 24 24" className="mx-2 w-6 h-6">
            <path
              fill="currentColor"
              d="M22 12l-9.899-9.899-1.415 1.413 1.415 1.415-4.95 4.949v.002L5.736 8.465 4.322 9.88l4.243 4.242-5.657 5.656 1.414 1.414 5.657-5.656 4.243 4.242 1.414-1.414-1.414-1.414L19.171 12h.001l1.414 1.414L22 12z"
            ></path>
          </svg>
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <svg viewBox="0 0 24 24" className="mx-2 w-6 h-6">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 8.006c0 2.205-1.794 4-4 4-2.205 0-4-1.795-4-4s1.794-4 4-4 4 1.795 4 4zm-12 11c0-3.533 3.29-6 8-6 4.711 0 8 2.467 8 6v1H2v-1z"
            ></path>
            <path
              fill="currentColor"
              d="M20 20.006h2v-1c0-2.563-1.73-4.565-4.479-5.47 1.541 1.377 2.48 3.27 2.48 5.47v1zM14.883 11.908A4.007 4.007 0 0018 8.006a4.006 4.006 0 00-3.503-3.97A5.977 5.977 0 0116 8.007a5.974 5.974 0 01-1.362 3.804c.082.032.164.064.245.098z"
            ></path>
          </svg>
        </button>
        <div className="relative mx-2">
          <input
            type="text"
            placeholder="Search"
            className="px-1.5 w-36 h-6 text-sm font-medium placeholder:text-gray-400 bg-gray-900 rounded border-none"
          />
          <div className="flex absolute inset-y-0 right-0 items-center">
            <svg viewBox="0 0 24 24" className="mr-1.5 w-4 h-4 text-gray-400">
              <path
                fill="currentColor"
                d="M21.707 20.293L16.314 14.9A7.928 7.928 0 0018 10a7.945 7.945 0 00-2.344-5.656A7.94 7.94 0 0010 2a7.94 7.94 0 00-5.656 2.344A7.945 7.945 0 002 10c0 2.137.833 4.146 2.344 5.656A7.94 7.94 0 0010 18a7.922 7.922 0 004.9-1.686l5.393 5.392 1.414-1.413zM10 16a5.959 5.959 0 01-4.242-1.757A5.958 5.958 0 014 10c0-1.602.624-3.109 1.758-4.242A5.956 5.956 0 0110 4c1.603 0 3.109.624 4.242 1.758A5.957 5.957 0 0116 10c0 1.603-.624 3.11-1.758 4.243A5.959 5.959 0 0110 16z"
              ></path>
            </svg>
          </div>
        </div>
        <button className="text-gray-200 hover:text-gray-100">
          <svg viewBox="0 0 24 24" fill="none" className="mx-2 w-6 h-6">
            <path
              d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button className="text-gray-200 hover:text-gray-100">
          <svg viewBox="0 0 24 24" className="mx-2 w-6 h-6">
            <path
              fill="currentColor"
              d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zm0 16.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1-4.375V15h-2v-3h1a2 2 0 10-2-2H8c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 01-3 3.875z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
