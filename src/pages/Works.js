import Project from '../components/Project'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { pageAnimation, photoAnim } from '../animation'
const Works = ({ projects }) => {
  return (
    <div className='bg-stone-900'>
      <motion.div
        className='bg-stone-300 grid grid-cols-1'
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        <Navbar />
        <motion.div
          variants={photoAnim}
          className='grid grid-cols-1 gap-3 m-3 md:grid-cols-2 xlg:grid-cols-3'
        >
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              img={project.img}
              code={project.code}
              deployedLink={project.deployedLink}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Works
