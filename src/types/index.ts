export interface Service {
  id: string
  icon: string
  title: string
  description: string
  badge?: string
}

export interface PackageFeature {
  label: string
  included: boolean
}

export interface Package {
  id: 'standard' | 'mid' | 'premium'
  name: string
  price: string
  priceNote: string
  features: { label: string; included: boolean }[]
  highlighted: boolean
  badge?: string
  cta: string
  whatsappMessage: string
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  text: string
  service: string
  date: string
  initials: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface BeforeAfterItem {
  id: string
  label: string
  before: string
  after: string
}
