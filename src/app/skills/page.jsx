import { AnimatedTooltip } from '@/components/AnimatedTooltip'
import { SimpleLayout } from '@/components/SimpleLayout'
import { skillCategories } from '@/data/site'

const borderColors = {
  indigo: 'border-indigo-500/30',
  violet: 'border-violet-500/30',
  sky: 'border-sky-500/30',
  fuchsia: 'border-fuchsia-500/30',
}

const dotColors = {
  indigo: 'bg-indigo-400',
  violet: 'bg-violet-400',
  sky: 'bg-sky-400',
  fuchsia: 'bg-fuchsia-400',
}

const textColors = {
  indigo: 'text-indigo-400',
  violet: 'text-violet-400',
  sky: 'text-sky-400',
  fuchsia: 'text-fuchsia-400',
}

export const metadata = {
  title: 'Skills',
  description: 'AI, machine learning, deep learning, NLP, and deployment skills used by Amaan Behlim.',
}

export default function SkillsPage() {
  return (
    <SimpleLayout
      title="AI/ML Skills & Core Capabilities"
      intro="Tools and methods spanning machine learning, deep learning, computer vision, NLP, generative AI, retrieval, and deployment."
    >
      <div className="mx-auto max-w-5xl space-y-12">
        {skillCategories.map((category) => (
          <section key={category.id} className={`surface rounded-[1.5rem] border-l-2 p-6 sm:p-8 ${borderColors[category.color]}`}>
            <h3 className={`mb-8 flex items-center gap-2 font-mono text-sm font-semibold tracking-widest ${textColors[category.color]}`}>
              <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${dotColors[category.color]}`} />
              {category.label}
            </h3>
            <div className="flex flex-wrap justify-start gap-4">
              <AnimatedTooltip items={category.items} />
            </div>
          </section>
        ))}
      </div>
    </SimpleLayout>
  )
}
