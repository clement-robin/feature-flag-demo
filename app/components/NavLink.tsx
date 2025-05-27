"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

type Props = {
    href: string
    label: string
}
  
export default function NavLink({ href, label }: Props) {
    const pathname = usePathname()
    const isActive = pathname === href
  
    return (
      <Link href={href} className={isActive ? 'font-bold text-[18px]' : ''}>
        {label}
      </Link>
    )
  }
  