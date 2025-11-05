import Image from "next/image"
export default function Background() {
  return (
    <>
      <Image 
        src="/images/contact.jpg"
        alt="Contact Background"
        fill
        className="absolute inset-0 object-cover z-10 w-full"
      />

      <div 
        className="absolute inset-0 bg-black opacity-60 z-10"
      />
    </>
  )
}