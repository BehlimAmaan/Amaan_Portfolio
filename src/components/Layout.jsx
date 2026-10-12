import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-clip">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  )
}
