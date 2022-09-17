import React from "react";
import NextLink from 'next/link'
import { LinkProps } from "./inteface";


const Link = ({href, children}: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <a>
        {children}
      </a>
    </NextLink>
  )
}

export default Link