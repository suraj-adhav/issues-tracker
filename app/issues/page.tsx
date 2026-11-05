import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuePage = () => {
  return (
    <>
    <div>IssuePage</div>
    <Button><Link href="/issues/new">new</Link></Button>
    </>
  )
}

export default IssuePage