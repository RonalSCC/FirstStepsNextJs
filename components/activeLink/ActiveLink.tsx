"use client"
import Link from "next/link"
import {usePathname} from "next/navigation"

interface ActiveLinkProps{
    path: string,
    text: string
}
export const ActiveLink = ({path, text}: ActiveLinkProps) => {
  const pathName = usePathname();

  return (
    <Link className={pathName === path ? `text-yellow-200` : `text-grey-400`} href={path}>{text}</Link>
  )
}
