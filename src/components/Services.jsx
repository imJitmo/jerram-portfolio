// import icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../anim/variant.jsx';
//services data
const services = [
  {
    name: 'UI/UX Design',
    description:
      'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip',
    link: 'Learn More...',
  },
  {
    name: 'Web Development',
    description:
      'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip',
    link: 'Learn More...',
  },
  {
    name: 'Product Branding',
    description:
      'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip',
    link: 'Learn More...',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-blue-400 mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              {' '}
              I am a Freelance Full-stack Developer with over 3 years of experience.
            </h3>
            <button className="text-white uppercase btn btn-sm hover:opacity-80">Contact me</button>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              return (
                <div key={index} className="border-b border-white/20 h-[146px] mb-[38px] flex">
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {service.name}
                    </h4>
                    <p className="font-secondary leading-tight">{service.description}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a href="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                      <BsArrowUpRight />
                    </a>
                    <a href="">{service.link}</a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
