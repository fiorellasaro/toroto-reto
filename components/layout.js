import Navb from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navb />
      <main>{children}</main>
      <Footer />
    </>
  )
}