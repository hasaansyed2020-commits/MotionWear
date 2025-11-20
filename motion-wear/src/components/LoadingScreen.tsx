'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 flex items-center justify-center z-[9999]">
      <div className="text-center">
        {/* Large Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Logo variant="loading" isDark={true} clickable={false} />
        </motion.div>

        <motion.div
          className="flex space-x-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        <motion.p
          className="text-white mt-6 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Your Style...
        </motion.p>
      </div>
    </div>
  );
}
