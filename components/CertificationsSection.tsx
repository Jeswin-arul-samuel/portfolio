'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Medal } from 'lucide-react'

const hangingCerts = [
  { name: "Complete Generative AI with LangChain and HuggingFace", issuer: "Udemy" },
  { name: "LLMs: Developer's Masterclass", issuer: "Udemy" },
  { name: "Data Analyst with Power BI", issuer: "Datacamp" },
  { name: "Deep Learning Specialization", issuer: "Coursera" },
]

const framedCerts = [
  { name: "Agile Project Management (AgilePM) Foundation", issuer: "APMG International", position: "top-left" },
  { name: "Machine Learning", issuer: "Andrew NG (Coursera)", position: "top-right" },
  { name: "Leadership Development Program", issuer: "Compassion International", position: "bottom-right" },
]

function HangingCertificate({ cert, index, isInView }: { cert: typeof hangingCerts[0], index: number, isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30, rotate: index % 2 === 0 ? -6 : 6 }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        rotate: index % 2 === 0 ? -2 : 2
      } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 60
      }}
      whileHover={{
        rotate: 0,
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="relative flex flex-col items-center cursor-pointer"
      style={{ transformOrigin: 'top center' }}
    >
      {/* String */}
      <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-gray-600" />

      {/* Clip */}
      <div className="absolute top-10 z-10">
        <div className="w-8 h-4 bg-gradient-to-b from-gray-300 to-gray-500 rounded-sm shadow-md flex items-center justify-center">
          <div className="w-5 h-1.5 bg-gray-600 rounded-full" />
        </div>
      </div>

      {/* Certificate Card - Bigger */}
      <div className="relative w-full p-5 pt-7 bg-card-bg border border-card-border rounded-xl text-center shadow-xl mt-2">
        {/* Icon */}
        <div className="mx-auto mb-3 p-2.5 rounded-full w-fit bg-accent/10">
          <Award size={24} className="text-accent" />
        </div>

        {/* Certificate Name */}
        <h3 className="text-sm font-semibold mb-1.5 leading-tight">{cert.name}</h3>

        {/* Issuer */}
        <p className="text-xs text-muted">{cert.issuer}</p>
      </div>
    </motion.div>
  )
}

function FramedCertificate({ cert, index, isInView }: { cert: typeof framedCerts[0], index: number, isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
      } : {}}
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 25px 50px rgba(245, 158, 11, 0.25)",
        transition: { duration: 0.2 }
      }}
      className="relative cursor-pointer"
    >
      {/* Outer Frame - Wood texture effect */}
      <div className="relative p-3 rounded-lg shadow-xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #5D4037 0%, #4E342E 25%, #6D4C41 50%, #4E342E 75%, #5D4037 100%)',
        }}
      >
        {/* Wood grain lines */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          }}
        />
        {/* Inner Frame Border - lighter wood */}
        <div className="relative p-1.5 rounded-md"
          style={{
            background: 'linear-gradient(135deg, #8D6E63 0%, #795548 50%, #8D6E63 100%)',
          }}
        >
          {/* Certificate Content */}
          <div className="relative p-5 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded text-center min-w-[160px]">
            {/* Decorative Corner Flourishes */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-700/30" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-700/30" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-700/30" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-700/30" />

            {/* Medal Icon */}
            <div className="mx-auto mb-3 p-2.5 rounded-full w-fit bg-amber-900/30">
              <Medal size={22} className="text-amber-200/70" />
            </div>

            {/* Certificate Name */}
            <h3 className="text-sm font-bold text-zinc-100 mb-1 leading-tight">{cert.name}</h3>

            {/* Issuer */}
            <p className="text-xs text-zinc-400">{cert.issuer}</p>

            {/* Decorative Line */}
            <div className="mt-3 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Frame Shadow */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-black/25 blur-md rounded-full" />
    </motion.div>
  )
}

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="certifications" className="py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative min-h-[700px]"
      >
        {/* Framed certificates positioned at edges - far from center */}
        <div className="absolute -top-4 -left-4 z-10">
          <FramedCertificate cert={framedCerts[0]} index={0} isInView={isInView} />
        </div>

        <div className="absolute -top-4 -right-4 z-10">
          <FramedCertificate cert={framedCerts[1]} index={1} isInView={isInView} />
        </div>

        <div className="absolute bottom-4 -right-4 z-10">
          <FramedCertificate cert={framedCerts[2]} index={2} isInView={isInView} />
        </div>

        {/* Center section with string and hanging certificates */}
        <div className="pt-44 pb-24">
          {/* String/Wire - thicker and more visible */}
          <div className="relative mb-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-1 bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700 rounded-full shadow-sm" />
            {/* String supports */}
            <div className="absolute top-0 left-[7%] w-2 h-2 bg-gray-500 rounded-full" />
            <div className="absolute top-0 right-[7%] w-2 h-2 bg-gray-500 rounded-full" />
          </div>

          {/* Hanging Certificates */}
          <div className="flex justify-center flex-wrap gap-6 lg:gap-8 px-4">
            {hangingCerts.map((cert, index) => (
              <div key={cert.name} className="w-40 lg:w-44">
                <HangingCertificate cert={cert} index={index} isInView={isInView} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
