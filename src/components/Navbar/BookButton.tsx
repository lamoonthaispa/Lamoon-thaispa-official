import { Calendar } from "lucide-react"
import messages from '@/content/messages.json'
export default function BookButton() {
  const bookText = messages.navbar.book
  return (
    <button className="flex items-center py-2 px-3 rounded-md gap-3 bg-navbar-button-background text-navbar-button-text font-medium">
      <Calendar size={20} className="text-navbar-button-text"/>
      { bookText }
    </button>
  )
}