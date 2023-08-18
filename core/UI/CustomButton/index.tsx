
"use client"

import { FC } from "react"
import { CustomButtonProps } from "./types"

const CustomButton = ({ title,containerStyles,handleClick } : CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type="button"
    className={`custom-button ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton