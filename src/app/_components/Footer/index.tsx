import React from 'react'
import Link from 'next/link'

import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'
import { Footer } from '../../../payload/payload-types'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
