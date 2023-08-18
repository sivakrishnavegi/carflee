import { FC } from "react"

export interface SearchBarProps {
searchString : string
}
export interface SearchManufacturerProps {
manufacturer : string,
setManufacturer : (manufacturer :string) => void
}
