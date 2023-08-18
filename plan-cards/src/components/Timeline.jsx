import { Fragment } from "react";

const timeLineData = [
  {
    id: 1,
    title: "eat",
    time: "9:30am",
    description: "Because you need strength.",
  },
  {
    id: 2,
    title: "eat",
    time: "9:30am",
    description: "Because you need strength.",
  },
  {
    id: 3,
    title: "eat",
    time: "9:30am",
    description: "Because you need strength.",
  },
  {
    id: 4,
    title: "eat",
    time: "9:30am",
    description: "Because you need strength.",
  },
];

function Timeline() {
  return (
    <div className="h-auto min-h-screen bg-gray-900 p-6 text-white flex sm:justify-center items-center">
      {/* Timeline starts here */}
      <ol className="overflow-auto sm:h-auto sm:flex sm:flex-wrap xl:flex-nowrap sm:gap-2">
        {timeLineData.map((timeline) => (
          <Fragment key={timeline.id}>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full dark:bg-blue-900">
                  <svg
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {timeline.title}
                </h3>
                {timeline.time && (
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {timeline.time}
                  </time>
                )}
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {timeline.description}
                </p>
              </div>
            </li>
          </Fragment>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;
