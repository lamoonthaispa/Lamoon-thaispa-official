import messages from '@/content/messages.json'
import { MapPin, Phone, Smartphone } from "lucide-react"
export default function ContactInfo() {
  const contact = messages.landing.contact
  return (
    <div className="flex flex-col gap-3 lg:gap-4 ">
      
      <div className="inline-flex gap-8 lg:gap-10 text-landing-contact-text text-lg md:text-2xl lg:text-3xl">
        <MapPin className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12'/>
        { contact.address }
      </div>

      <div className="inline-flex gap-8 lg:gap-10 text-landing-contact-text text-lg md:text-2xl lg:text-3xl">
        <Phone className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12'/>
        { contact.phones.landline.label } : { contact.phones.landline.value }
      </div>

      <div className="inline-flex gap-8 lg:gap-10 text-landing-contact-text text-lg md:text-2xl lg:text-3xl">
        <Smartphone className='w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12'/>
        { contact.phones.mobile.label } : { contact.phones.mobile.value }
      </div>
    </div>
  )
}