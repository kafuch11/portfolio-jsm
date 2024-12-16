
const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 flex justify-between items-center border-black-300 border-t flex-wrap ">

        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
            <div className="social-icon">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
            </div>
            <div className="social-icon">
                <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
            </div>
            <div className="social-icon">
                <img src="/assets/twitter.svg" alt="github" className="w-1/2 h-1/2"/>
            </div>

        </div>
        <p className="text-white-500">&copy; 2024 Kafeel. All rights reserved.</p>
    </section>
  )
}

export default Footer