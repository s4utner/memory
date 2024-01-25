import { useState } from "react";
import styles from "./IconsStyles.module.css";

export function WithoutSuperpowerAchievement(withoutSuperpower) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const onMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const onMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <div className={styles.container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {withoutSuperpower.withoutSuperpower ? (
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.0369 18.4848C20.8394 18.4042 20.6226 18.383 20.4131 18.4237C20.2037 18.4644 20.0107 18.5652 19.8579 18.7137L19.7222 18.849C18.5553 20.0367 17.1623 20.9798 15.625 21.6233C14.0877 22.2667 12.4371 22.5974 10.77 22.5959C9.10264 22.5718 7.45663 22.218 5.92717 21.5552C4.39771 20.8924 3.01517 19.9337 1.85951 18.7345C1.71102 18.5759 1.51653 18.4676 1.30326 18.4246C1.08998 18.3817 0.868589 18.4064 0.670056 18.4952C0.461888 18.5747 0.284741 18.7187 0.164572 18.906C0.0444034 19.0933 -0.0124688 19.3141 0.00228981 19.536V24.9592C0.00228981 25.2352 0.112218 25.5 0.30789 25.6952C0.503563 25.8903 0.768951 26 1.04567 26H20.6196C20.8963 26 21.1617 25.8903 21.3573 25.6952C21.553 25.5 21.6629 25.2352 21.6629 24.9592V19.4839C21.672 19.2738 21.6171 19.0658 21.5053 18.8875C21.3936 18.7091 21.2303 18.5687 21.0369 18.4848Z"
            fill="url(#paint0_linear_201_104)"
          />
          <path
            d="M10.8536 0C8.70748 0 6.60951 0.63484 4.82504 1.82424C3.04057 3.01364 1.64975 4.70418 0.828444 6.68208C0.00714305 8.65998 -0.207747 10.8364 0.210949 12.9361C0.629645 15.0359 1.66312 16.9646 3.18069 18.4784C4.69825 19.9922 6.63175 21.0232 8.73668 21.4408C10.8416 21.8585 13.0234 21.6441 15.0062 20.8248C16.989 20.0056 18.6837 18.6182 19.8761 16.8381C21.0684 15.0581 21.7048 12.9653 21.7048 10.8244C21.6993 7.95528 20.5543 5.20525 18.5205 3.17647C16.4867 1.14769 13.7299 0.00550168 10.8536 0Z"
            fill="url(#paint1_radial_201_104)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_201_104"
              x1="10.832"
              y1="18.4035"
              x2="10.832"
              y2="27.061"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFB500" />
              <stop offset="1" stopColor="#FFE052" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_201_104"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.8536 21.6406) rotate(90) scale(16.0758 16.1156)"
            >
              <stop offset="0.015625" stopColor="#7F12F4" />
              <stop offset="1" stopColor="#E0C5FF" />
            </radialGradient>
          </defs>
        </svg>
      ) : (
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_i_201_112)">
            <path
              d="M21.0369 18.4847C20.8394 18.4042 20.6226 18.383 20.4131 18.4237C20.2037 18.4644 20.0107 18.5652 19.8579 18.7137L19.7222 18.849C18.5553 20.0366 17.1623 20.9798 15.625 21.6232C14.0877 22.2667 12.4371 22.5974 10.77 22.5959C9.10264 22.5717 7.45663 22.218 5.92717 21.5552C4.39771 20.8924 3.01517 19.9337 1.85951 18.7345C1.71102 18.5759 1.51653 18.4675 1.30326 18.4246C1.08998 18.3817 0.868589 18.4064 0.670056 18.4951C0.461888 18.5747 0.284741 18.7187 0.164572 18.906C0.0444034 19.0933 -0.0124688 19.3141 0.00228981 19.536V24.9592C0.00228981 25.2352 0.112218 25.5 0.30789 25.6951C0.503563 25.8903 0.768951 26 1.04567 26H20.6196C20.8963 26 21.1617 25.8903 21.3573 25.6951C21.553 25.5 21.6629 25.2352 21.6629 24.9592V19.4839C21.672 19.2738 21.6171 19.0658 21.5053 18.8874C21.3936 18.7091 21.2303 18.5687 21.0369 18.4847Z"
              fill="#E9ECED"
            />
          </g>
          <g filter="url(#filter1_i_201_112)">
            <path
              d="M10.8536 0C8.70748 0 6.60951 0.63484 4.82504 1.82424C3.04057 3.01364 1.64975 4.70418 0.828444 6.68208C0.00714305 8.65998 -0.207747 10.8364 0.210949 12.9361C0.629645 15.0359 1.66312 16.9646 3.18069 18.4784C4.69825 19.9922 6.63175 21.0232 8.73668 21.4408C10.8416 21.8585 13.0234 21.6441 15.0062 20.8248C16.989 20.0056 18.6837 18.6182 19.8761 16.8381C21.0684 15.0581 21.7048 12.9653 21.7048 10.8244C21.6993 7.95528 20.5543 5.20525 18.5205 3.17647C16.4867 1.14769 13.7299 0.00550168 10.8536 0Z"
              fill="#E9ECED"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_201_112"
              x="0"
              y="18.4035"
              width="21.6641"
              height="8.59647"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_201_112" />
            </filter>
            <filter
              id="filter1_i_201_112"
              x="0.00244141"
              y="0"
              width="21.7026"
              height="22.6488"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_201_112" />
            </filter>
          </defs>
        </svg>
      )}
      {isMouseEnter && (
        <div className={styles.toolTip}>
          <svg
            className={styles.toolTipImg}
            width="174"
            height="87"
            viewBox="0 0 174 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="174" height="78" rx="12" fill="#C2F5FF" />
            <path d="M14 87L14 73L34 73L14 87Z" fill="#C2F5FF" />
          </svg>
          <p className={styles.toolTipText}>Игра пройдена без супер-сил</p>
        </div>
      )}
    </div>
  );
}
