import messages from '@/content/messages.json'
export default function Copyright() {
  const footer = messages.footer.copyright
  return (
    <div className='border-t border-footer-divider'>
      <p className='text-footer-text text-center mt-4'>
        {footer}
      </p>
    </div>
  )
}