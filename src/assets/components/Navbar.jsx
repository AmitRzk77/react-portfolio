import { useState } from "react"


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(fasle);
    const toggleMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen);

    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if(targetElement){
            const offset = -85;
            const elementPosition = targetElement,
            getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
        setIsMobileMenuOpen(false)
    }
  return ( 
    <div >
        <nav className="fixed left-0 right-0 top-4 z-50">
            {/*desktop menu */}
            <div className="max-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 "
        </nav>
    </div>
  )
}

export default Navbar