import { MdEmail } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <section className='relative h-[50vh] w-full bg-[url("/images/contact-hero.jpg")] bg-cover bg-center '>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-50 flex flex-col h-full items-center justify-center gap-6">
         <h2>Let&apos;s get to know you</h2>
         <p>Start your health jounrey today.</p>
         <a
            href="/contact"
            className="flex items-center justify-center bg-white hover:bg-green-800/60 hover:text-lime-300 text-stone-700 gap-2 hover:gap-3 py-2 px-4 hover:-translate-y-0.5 transition-all duration-500 hover:scale-103 font-semibold rounded-full w-fit"
          >
            <span>Book a consultation</span>
            <MdOutlineArrowOutward className="text-xl font-extrabold" />
          </a>
          <div className="flex items-center gap-2 underline w-fit">
                <MdEmail />
                <span>email us</span>
              </div>
        </div>
      </section>
      <section className="h-[50vh] w-full bg-white p-4 flex flex-col">
        LOGO
      </section>
    </>
    
  )
}

export default Footer