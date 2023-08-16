function DownArrow({ onToggle }) {
  return (
    <svg
      className="w-5 h-5 dark:text-black font-bold hover:cursor-pointer"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 8"
      onClick={onToggle}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
      />
    </svg>
  );
}

export default DownArrow;
