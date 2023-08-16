import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { contacts } from '../constants';

const Contact = () => {
  return (
    <div className="xl:mt-12 inline-flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        {/* <h3 className={styles.sectionHeadText}>Contacts.</h3> */}
        {contacts.map((contact) => (
          <a href={contact.link} target="_blank" className='inline-flex'>
            <img src={contact.icon} alt={contact.title}
              className='w-[60px] h-[60px] object-contain m-4'
            />
          </a>
        ))}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");