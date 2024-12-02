import React from 'react'
import appLogo from './../assets/logos/app-logo.svg'
import aquaBox from './../assets/images/aqua-box.png'

const LogoHeader: React.FC = () => {
  return (
    <div className="flex w-full h-20 sm:h-36 justify-center items-center gap-4 sm:gap-10">
      <div className="h-20 w-20 sm:h-32 sm:w-32">
        <img
          src={appLogo}
          alt="App Logo"
          className="h-full w-full object-contain"
        />
      </div>
      <svg
        className="w-4 h-4 sm:w-8 sm:h-8"
        fill="#ffffff"
        viewBox="0 -8 72 72"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>times</title>
          <path d="M43.74,28,59,12.75a3.29,3.29,0,0,0,0-4.66L55.9,5a3.32,3.32,0,0,0-4.67,0L36,20.26,20.77,5.07a3.32,3.32,0,0,0-4.67,0L13,8.18a3.3,3.3,0,0,0,0,4.67L28.18,28,13,43.21a3.31,3.31,0,0,0,0,4.66L16.11,51a3.32,3.32,0,0,0,4.67,0L36,35.82,51.16,51a3.32,3.32,0,0,0,4.67,0l3.11-3.12a3.29,3.29,0,0,0,0-4.66Z"></path>
        </g>
      </svg>
      <div className="h-20 w-20 sm:h-32 sm:w-32">
        <img
          src={aquaBox}
          alt="aquaBox"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  )
}

export default LogoHeader
