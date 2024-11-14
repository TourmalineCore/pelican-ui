import Link from "next/link";

export function HeaderEye() {
  return (
    <Link
      href="#"
      className="header-eye"
    >
      <svg
        width="27"
        height="16"
        viewBox="0 0 27 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="13.5"
          cy="11.5"
          r="3.5"
          strokeWidth="2"
        />
        <path
          d="M1 10V10C6.15028 -0.300568 20.8497 -0.300568 26 10V10"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}
