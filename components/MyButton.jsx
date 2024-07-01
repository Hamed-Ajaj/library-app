"use client"
import Link from 'next/link'
import React from 'react'
import Button from './ui/button'

const MyButton = ({variant,link,classes,onClick,children}) => {
  return (
    <>
        <Link href={link?link:""} className={"py-2 px-5 bg-gray-100  rounded-xl hover:bg-gray-200"} onClick={onClick}>{children}</Link>
    </>
  )
}

export default MyButton
