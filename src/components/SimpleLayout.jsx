import { Container } from '@/components/Container'
import Heading from '@/components/Heading'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="relative z-10 mt-16 sm:mt-24">
      <header className="max-w-3xl animate-fade-up">
        <p className="eyebrow mb-5">Selected work / notes</p>
        <Heading>{title}</Heading>
        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">{intro}</p>
      </header>
      <div className="mt-14 sm:mt-20">{children}</div>
    </Container>
  )
}
