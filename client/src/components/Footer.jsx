
import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>

        <div>
          <img src={assets.vishal} alt="logo" className='w-2 sm:w-10' />
          <p className='max-w-[410px] mt-0'>
            Adventure Blogs is committed to bringing you inspiring stories from every corner of the world. Whether it’s a thrilling trek, a soulful journey, or a personal discovery, we believe every adventure deserves to be shared. Join us in exploring, dreaming, and creating memories that last forever.
          </p>
        </div>

        {/* <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>
                {section.title}
              </h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='hover:underline transition'>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {/* Quick Links */}
          <ul className="text-sm space-y-2">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://en.wikipedia.org/wiki/Main_Page"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                Home
              </a>
            </li>

            <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://www.usatoday.com/booklist/booklist"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                Best Seller
              </a>
            </li>
              <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://www.amazon.in/?tag=msndeskstdin-21&ref=pd_sl_722hxwhlgc_b&adgrpid=1319415560701318&hvadid=82463731741786&hvnetw=o&hvqmt=p&hvbmt=bb&hvdev=c&hvlocint=&hvlocphy=149639&hvtargid=kwd-82464353193289:loc-90&hydadcr=24578_2159440&mcid=95b4d197eae83d3198b8dbb580541bad&msclkid=c04f1d1bffe718054eb775a2f1d488c7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
               Offers & Deals
              </a>
            </li>
             <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://www.linkedin.com/in/vishal202-rgb/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
              Contact Us
              </a>
            </li>
          </ul>

          {/* Resources / Policies*/}
          <ul className="text-sm space-y-2">
            <h3 className="font-semibold mb-2">Resources / Policies</h3>
             <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://policymaker.io/blog-privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
             Privacy Policy
              </a>
            </li>
            <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://www.websitepolicies.com/blog/terms-and-conditions-for-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
             Terms & Condition
              </a>
            </li>
             <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://github.com/Vishal202-rgb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
             Any Issue
              </a>
            </li>
             <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://www.privacypolicies.com/blog/app-disclaimer-template/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
            Disclaimer
              </a>
            </li>
          </ul>

          {/* Follow Us */}
          <ul className="text-sm space-y-2">
            <h3 className="font-semibold mb-2">Follow Us</h3>
               <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://x.com/VishalKuma82042"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
            Twitter
              </a>
            </li>
             <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://www.linkedin.com/in/vishal202-rgb/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
            linkeidin
              </a>
            </li>
             <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://www.youtube.com/feed/you"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
            Youtube
              </a>
            </li>
              <li className="cursor-pointer hover:text-primary transition">
              <a
                href="https://www.instagram.com/itz___vishalkumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
            instagram
              </a>
            </li>
          
          </ul>
        </div>

      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
      <marquee behavior="" direction="right">
         Copyright : 2025 © || Yogesh & Vishal
      </marquee>
       
      </p>
    </div>
  )
}

export default Footer
