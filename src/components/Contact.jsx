// motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../anim/variant.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/** text **/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-2xl text-blue-400 uppercase font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let us work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex-col gap-y-6 pb-25 p-6 items-start"
            action=""
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-400 transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-400 transition-all"
              type="email"
              placeholder="Your email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-400 transition-all"
              type="tel"
              placeholder="Your contact number"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-400 transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
