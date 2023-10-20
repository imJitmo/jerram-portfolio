// import motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../anim/variant.jsx';
//img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="">
              <h2 className="h2 leading-tight text-blue-400">
                My Latest <br /> Work.
              </h2>
              <p className="max-w-sm mb-7">
                lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip,
                lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip,
              </p>
              <button className="text-white uppercase btn btn-sm hover:opacity-80">View all projects</button>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a href="https://pangilinan-capstone-3.onrender.com/" target="_blank" rel="noreferrer">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt={Img1} />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-white font-semibold uppercase">
                    Full-stack <span className="text-blue-400 font-bold">Web App</span>
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white ">J.re Properties</span>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/** Image 2 **/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt={Img2} />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white font-semibold uppercase">
                  N/A <span className="text-blue-400 font-bold">-</span>
                </span>
              </div>

              {/** */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white "> - </span>
              </div>
            </div>
            {/** end Image 2 **/}
            {/** Image 3 **/}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt={Img3} />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white font-semibold uppercase">
                  N/A <span className="text-blue-400 font-bold"> - </span>
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white "> - </span>
              </div>
            </div>
            {/** end Image 3 **/}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
