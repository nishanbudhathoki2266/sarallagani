import Card from "../components/Card";

const contents = [
  {
    id: 1,
    title: "Bundle",
    subtitle: "Active Investors",
    price: 99,
    image: "card-images/application.png",
    type: "static",
  },
  {
    id: 2,
    title: "Customize",
    subtitle: "Occasional Investors",
    image: "card-images/customization.png",
    type: "dynamic",
  },
];

function DetailCheckout() {
  return (
    <div className="flex sm:container mx-auto justify-center items-center flex-col px-4 gap-10 py-4">
      {/* Heading */}
      <h1 className="text-3xl text-[##000000] text-center font-bold">
        Curate Plan as
        <br />
        Per Your Need
      </h1>
      {/* Cards */}
      <div className="flex flex-wrap w-full justify-center items-center -m-4 gap-8">
        {contents.map((content) => (
          <Card key={content.id} content={content} />
        ))}
      </div>
      {/* Compare plans */}
      <div className="container h-auto max-w-[920px] auto px-2 py-4 sm:p-6 rounded-2xl border-1 shadow-xl flex flex-col items-center justify-center">
        <div className="flex items-start justify-between w-full">
          <div>
            <h2 className="sm:text-2xl font-bold mb-2 text-xl">
              Compare Plans
            </h2>
            <div>
              {/* ICONS AND TITLE */}
              <div className="flex items-start gap-2">
                <img
                  src="/card-images/coin.png"
                  alt="Coin icon"
                  className="h-6 w-6 object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-[700]">Track</h3>
                  <p className="text-md text-[#5F5F5F]">Import Portfolio</p>
                  <p className="text-md text-[#5F5F5F]">Multiple Portfolio</p>
                  <p className="text-md text-[#5F5F5F]">Performance Review</p>
                  <p className="text-md text-[#5F5F5F]">
                    Performance Benchmarking
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-center gap-[1px] sm:gap-12 items-center">
            <div className="flex flex-col gap-2">
              <h2 className="sm:text-2xl font-bold mb-2 text-xl">Free</h2>
              <p>&nbsp;</p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.8333 0H5.16667C2.3126 0 0 2.31312 0 5.16667V25.8333C0 28.6869 2.31312 31 5.16667 31H25.8333C28.6869 31 31 28.6869 31 25.8333V5.16667C31 2.31312 28.6869 0 25.8333 0ZM22.9392 19.2197C23.9664 20.2469 23.9665 21.9122 22.9395 22.9395C21.9123 23.967 20.2466 23.9671 19.2192 22.9397L18.2888 22.0094C16.7481 20.4686 14.25 20.4688 12.7095 22.0097L11.7801 22.9394C10.7528 23.9669 9.08705 23.9671 8.05966 22.9397C7.03232 21.9123 7.03236 20.2467 8.05974 19.2194L8.98955 18.2897C10.5304 16.749 10.5305 14.2509 8.98981 12.7101L8.05957 11.7797C7.0323 10.7524 7.03245 9.08674 8.05991 8.05957C9.08724 7.03253 10.7526 7.03268 11.7797 8.05991L12.7094 8.98968C14.2501 10.5305 16.748 10.5306 18.2889 8.99006L19.2196 8.05957C20.2468 7.03253 21.9121 7.03261 22.9392 8.05974C23.9664 9.08688 23.9664 10.7522 22.9394 11.7794L22.009 12.7099C20.4684 14.2509 20.4685 16.749 22.0093 18.2898L22.9392 19.2197Z"
                      fill="#F24E1E"
                    />
                  </svg>
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="sm:text-2xl font-bold mb-2 text-xl">Saral</h2>
              <p>&nbsp;</p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.8333 0H5.16667C2.3126 0 0 2.31312 0 5.16667V25.8333C0 28.6869 2.31312 31 5.16667 31H25.8333C28.6869 31 31 28.6869 31 25.8333V5.16667C31 2.31312 28.6869 0 25.8333 0ZM22.9392 19.2197C23.9664 20.2469 23.9665 21.9122 22.9395 22.9395C21.9123 23.967 20.2466 23.9671 19.2192 22.9397L18.2888 22.0094C16.7481 20.4686 14.25 20.4688 12.7095 22.0097L11.7801 22.9394C10.7528 23.9669 9.08705 23.9671 8.05966 22.9397C7.03232 21.9123 7.03236 20.2467 8.05974 19.2194L8.98955 18.2897C10.5304 16.749 10.5305 14.2509 8.98981 12.7101L8.05957 11.7797C7.0323 10.7524 7.03245 9.08674 8.05991 8.05957C9.08724 7.03253 10.7526 7.03268 11.7797 8.05991L12.7094 8.98968C14.2501 10.5305 16.748 10.5306 18.2889 8.99006L19.2196 8.05957C20.2468 7.03253 21.9121 7.03261 22.9392 8.05974C23.9664 9.08688 23.9664 10.7522 22.9394 11.7794L22.009 12.7099C20.4684 14.2509 20.4685 16.749 22.0093 18.2898L22.9392 19.2197Z"
                      fill="#F24E1E"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Analyze */}
        <div className="flex items-start justify-between mt-2 w-full">
          <div>
            <h2 className="sm:text-2xl font-bold mb-2 text-xl">&nbsp;</h2>
            <div>
              {/* ICONS AND TITLE */}
              <div className="flex items-start gap-2">
                <img
                  src="/card-images/diagram.png"
                  alt="Coin icon"
                  className="h-6 w-6 object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-[700]">Analyze</h3>
                  <p className="text-md text-[#5F5F5F]">
                    Annual Financial Data
                  </p>
                  <p className="text-md text-[#5F5F5F]">
                    Quarterly Financial Data
                  </p>
                  <p className="text-md text-[#5F5F5F]">Saral Rating</p>
                  <p className="text-md text-[#5F5F5F]">Pro Rating</p>
                  <p className="text-md text-[#5F5F5F]">Economy Dashboard</p>
                  <p className="text-md text-[#5F5F5F]">Advanced Screener</p>
                  <p className="text-md text-[#5F5F5F]">Stock Screener Save</p>
                  <p className="text-md text-[#5F5F5F]">Broker Analysis</p>
                  <p className="text-md text-[#5F5F5F]">Mutual Fund Analysis</p>
                  <p className="text-md text-[#5F5F5F]">Technical Analysis</p>
                  <p className="text-md text-[#5F5F5F]">Company Statistics</p>
                  <p className="text-md text-[#5F5F5F]">Banking Statistics</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-center gap-[1px] sm:gap-12 items-center">
            <div className="flex flex-col gap-2">
              <h2 className="sm:text-2xl font-bold mb-2 text-xl">Free</h2>
              <p>&nbsp;</p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="sm:text-2xl font-bold mb-2 text-xl">Saral</h2>
              <p>&nbsp;</p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full bg-[#4CD263]">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p>
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-white rounded-full">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.8333 0H5.16667C2.3126 0 0 2.31312 0 5.16667V25.8333C0 28.6869 2.31312 31 5.16667 31H25.8333C28.6869 31 31 28.6869 31 25.8333V5.16667C31 2.31312 28.6869 0 25.8333 0ZM22.9392 19.2197C23.9664 20.2469 23.9665 21.9122 22.9395 22.9395C21.9123 23.967 20.2466 23.9671 19.2192 22.9397L18.2888 22.0094C16.7481 20.4686 14.25 20.4688 12.7095 22.0097L11.7801 22.9394C10.7528 23.9669 9.08705 23.9671 8.05966 22.9397C7.03232 21.9123 7.03236 20.2467 8.05974 19.2194L8.98955 18.2897C10.5304 16.749 10.5305 14.2509 8.98981 12.7101L8.05957 11.7797C7.0323 10.7524 7.03245 9.08674 8.05991 8.05957C9.08724 7.03253 10.7526 7.03268 11.7797 8.05991L12.7094 8.98968C14.2501 10.5305 16.748 10.5306 18.2889 8.99006L19.2196 8.05957C20.2468 7.03253 21.9121 7.03261 22.9392 8.05974C23.9664 9.08688 23.9664 10.7522 22.9394 11.7794L22.009 12.7099C20.4684 14.2509 20.4685 16.749 22.0093 18.2898L22.9392 19.2197Z"
                      fill="#F24E1E"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCheckout;
