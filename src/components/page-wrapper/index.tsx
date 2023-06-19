import { Header } from 'components'
import React from 'react'

export default function PageWrapper({ children }: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  )
}
