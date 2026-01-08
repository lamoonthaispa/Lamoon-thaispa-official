import messages from '@/content/messages.json'
import { MapPin, Phone, Smartphone } from "lucide-react"
export default function ContactInfo() {
  const contact = messages.landing.contact
  return (
    <address className="flex flex-col gap-3 lg:gap-4 not-italic text-landing-contact-text">
      <p className="inline-flex gap-8 lg:gap-10 items-center text-lg md:text-2xl lg:text-3xl">
        <MapPin className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12' aria-hidden="true" />
        <a
          href="https://maps.app.goo.gl/STF6KkZDzz4TXpLLA"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          {contact.address}
        </a>
      </p>

      <p className="inline-flex gap-8 lg:gap-10 items-center text-lg md:text-2xl lg:text-3xl">
        <Phone className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12' aria-hidden="true" />
        <span>
          {contact.phones.landline.label} :
          <a className="ml-1 underline-offset-2 hover:underline" href={`tel:${contact.phones.landline.value}`}>
            {contact.phones.landline.value}
          </a>
        </span>
      </p>

      <p className="inline-flex gap-8 lg:gap-10 items-center text-lg md:text-2xl lg:text-3xl">
        <Smartphone className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12' aria-hidden="true" />
        <span>
          {contact.phones.mobile.label} :
          <a className="ml-1 underline-offset-2 hover:underline" href={`tel:${contact.phones.mobile.value}`}>
            {contact.phones.mobile.value}
          </a>
        </span>
      </p>
    </address>
  )
}