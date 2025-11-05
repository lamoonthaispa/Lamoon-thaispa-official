import SocialLinks from "./SocialLinks"
import Copyright from "./Copyright"
import FooterLogo from "../images/FooterLogo"
export default function Footer() {
  return (
    <footer className="py-[43px] flex flex-col items-center gap-10 bg-footer-background px-10 md:px-14">

        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <FooterLogo />
          <SocialLinks />
        </div>

        <div className="w-full md:px-14">
          <Copyright />
        </div>

    </footer>
  )
}