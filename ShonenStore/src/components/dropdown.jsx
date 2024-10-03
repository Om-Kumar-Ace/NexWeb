import { useState } from 'react';

function DropdownHover() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        id="dropdownHoverButton"
        type="button"
        className='flex items-center'
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        Resources
        <svg
          className="w-2.5 h-2.5 ml-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {dropdownVisible && (
        <div
          id="dropdownHover"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-50"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <ul className="py-2 text-sm text-gray-50 dark:text-gray-900">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-200 dark:hover:text-black">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-200 dark:hover:text-black">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-200 dark:hover:text-black">
                Earnings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-200 dark:hover:text-black">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownHover;
