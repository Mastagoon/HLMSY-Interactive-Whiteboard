import { useCanvasContext } from "../../context/canvasContext"

const BrushButton: React.FC = () => {
  const { setEraser } = useCanvasContext()

  return (
    <svg
      onClick={() => setEraser(false)}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="45"
        height="45"
        stroke="white"
        strokeOpacity="0.57"
      />
      <path
        d="M36.9557 9.12397C36.6824 8.81794 36.3396 8.6135 35.9735 8.5119C36.1522 9.15632 36.0118 9.87298 35.5433 10.4107L31.3534 15.2187C27.9311 19.1458 24.2039 22.7838 20.1939 26.1115C20.0348 26.2435 20.0232 26.4829 20.1693 26.629L21.3242 27.7842C25.4472 24.3902 29.2741 20.6698 32.7807 16.6458L36.9269 11.888C37.6147 11.0991 37.653 9.90444 36.9557 9.12397Z"
        fill="#EBE7F2"
      />
      <path
        d="M19.5021 22.9569C19.1203 23.4006 18.7423 23.8478 18.3683 24.2985C19.9248 24.7585 21.1892 25.8997 21.8157 27.3768C22.2711 26.9969 22.7229 26.6128 23.171 26.2249C22.5469 24.626 21.1841 23.3969 19.5021 22.9569Z"
        fill="#ED9ABC"
      />
      <path
        d="M18.9814 26.9292C18.6425 26.5903 18.2616 26.3191 17.8553 26.1154C18.6727 27.7454 18.4015 29.7818 17.0415 31.1418C17.0415 31.1418 14.4621 34.071 9.42118 33.3542C9.07753 33.4588 8.73564 33.5391 8.43065 33.6098C7.82737 33.7497 7.07556 33.7174 6.50075 33.9243C6.50075 33.9243 5.57421 34.2579 10.9113 35.2215C16.2483 36.1852 18.9814 33.0816 18.9814 33.0816C20.6803 31.3828 20.6803 28.6283 18.9814 26.9292Z"
        fill="#EBE7F2"
      />
      <path
        d="M38.1855 9.72739C37.2628 8.80454 35.7697 8.75339 34.7862 9.61068L29.9782 13.8006C25.9514 17.3097 22.1871 21.1817 18.7898 25.3086C18.6356 25.496 18.6623 25.7731 18.8497 25.9272C19.0371 26.0816 19.3141 26.0547 19.4683 25.8673C22.835 21.7776 26.5655 17.9406 30.5557 14.4633L35.3637 10.2734C36.0003 9.71843 36.9668 9.75165 37.5641 10.349C38.1612 10.9461 38.1944 11.9125 37.6395 12.5492L33.4497 17.3572C29.9726 21.3472 26.1357 25.0777 22.0452 28.4449C21.8579 28.5991 21.831 28.8761 21.9853 29.0635C22.0723 29.1692 22.198 29.2236 22.3249 29.2236C22.4232 29.2236 22.5221 29.1908 22.6039 29.1235C26.7316 25.7254 30.6035 21.9609 34.1124 17.9346L38.3022 13.1267C39.1591 12.143 39.108 10.6499 38.1855 9.72739Z"
        fill="#846F75"
      />
      <path
        d="M13.5181 27.6186C12.7886 28.3479 12.3075 29.3108 12.1632 30.3298C12.1081 30.7185 12.1357 31.0934 12.1625 31.456C12.2032 32.0085 12.2386 32.4856 11.9811 32.9022C11.5006 33.6792 10.1953 33.9819 9.33151 34.1821C9.10457 34.2346 8.84459 34.261 8.5695 34.2888C8.15957 34.3302 7.73559 34.373 7.35204 34.5111C7.12668 34.5923 6.98254 34.8089 7.0017 35.0379C7.03282 35.4094 7.06498 35.7935 11.8334 36.6544C12.5861 36.7903 13.2885 36.849 13.9415 36.849C17.9812 36.849 20.1111 34.5946 20.3013 34.3839C22.16 32.5155 22.157 29.4834 20.2923 27.6187C18.4247 25.7509 15.3858 25.7509 13.5181 27.6186ZM19.6708 33.7711C19.6648 33.7771 19.6581 33.7841 19.6525 33.7904C19.5465 33.9094 16.9989 36.6942 11.9895 35.7892C10.4845 35.5177 9.51467 35.302 8.89065 35.1388C9.10651 35.1151 9.32325 35.0861 9.52996 35.0381C10.5358 34.8049 12.0559 34.4524 12.7287 33.3642C13.1359 32.7052 13.0844 32.0071 13.0389 31.3912C13.0145 31.0605 12.9914 30.748 13.0333 30.453C13.1511 29.6216 13.5439 28.8355 14.1395 28.24C15.6644 26.7152 18.1455 26.7152 19.6706 28.24C21.1955 29.7649 21.1955 32.2462 19.6708 33.7711Z"
        fill="#846F75"
      />
    </svg>
  )
}

export default BrushButton