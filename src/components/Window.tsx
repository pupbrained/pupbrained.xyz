import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Sona from './Sona'
import Terminal from './Terminal'

export default function Window(props: { active: number }) {
  const [selected, setSelected] = useState(0)
  const [commands, setCommands] = useState<
    {
      name: string
      value: React.ReactNode
    }[]
  >([])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div className="flex items-center justify-center h-full w-full overflow-hidden bg-basetranslucent rounded-2xl backdrop-blur-md">
        {
          {
            1: (
              <motion.div
                key={1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full"
              >
                <Terminal commands={commands} setCommands={setCommands} />
              </motion.div>
            ),
            2: (
              <motion.div
                key={2}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full w-full"
              >
                <Sona selected={selected} setSelected={setSelected} />
              </motion.div>
            ),
          }[props.active]
        }
      </div>
    </AnimatePresence>
  )
}
