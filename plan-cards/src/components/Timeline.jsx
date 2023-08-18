function Timeline() {
  return (
    <div className="h-screen bg-gray-900 p-6 text-white flex sm:justify-center items-center">
      {/* Timeline starts here */}
      <ol className="items-center sm:flex">
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
              Eat
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              9:30 am
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Because you need strength.
            </p>
          </div>
        </li>

        {/* Another item */}
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
              Code
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              10:00am
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Because it's awesome
            </p>
          </div>
        </li>

        {/* Another item */}
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
              Sleep
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              11:00am
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Because you need rest.
            </p>
          </div>
        </li>

        {/* Another item */}
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
              Repeat
            </h3>
            {/* In case we don't want to show some element and keep the style working - we must keep invisible property */}
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 invisible">
              9:30 am
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Because this is the life you love
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Timeline;
