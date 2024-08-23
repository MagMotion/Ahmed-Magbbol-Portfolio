import { CONTACT } from "../constants"

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <div className="flex text-center tracking-tighter items-center justify-center gap-4">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">|</p>
            <p className="my-4">{CONTACT.email}</p>
        </div>
    </div>
  )
}

export default Contact