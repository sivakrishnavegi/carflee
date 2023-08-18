
"use client"

import { FC } from "react"
import { CustomButtonProps } from "./types"

const CustomButton = ({ title, btnType="button", containerStyles,handleClick } : CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton