import messages from '@/content/messages.json'
import FeatureCard from './FeatureCard'
import SpaCreamPotIcon from '@/components/icons/SpaCreamPotIcon'
import CandleIcon from '@/components/icons/CandleIcon'
import WomanHeadIcon from '@/components/icons/WomanHeadIcon'
import HerbsLeavesIcon from '@/components/icons/HerbsLeavesIcon'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'SpaCreamPotIcon': SpaCreamPotIcon,
  'CandleIcon': CandleIcon,
  'WomanHeadIcon': WomanHeadIcon,
  'HerbsLeavesIcon': HerbsLeavesIcon,
}

export default function Features() {
  const features = messages.landing.features
  
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName]
    if (!IconComponent) return null
    return <IconComponent className="text-landing-features-icon" />
  }

  return (
    <section
      className="w-full grid grid-cols-1 lg:grid-cols-2 py-16 px-4 md:px-8 lg:p-36 gap-20 justify-items-center"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">
        Pourquoi choisir Lamoon Thaï Spa
      </h2>
      {Object.values(features).map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={getIcon(feature.icon)}
        />
      ))}
    </section>
  )
}