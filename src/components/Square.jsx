import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
function Square({ value, onSquareClick }) {

   
return (
    <AnimatePresence>
           <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="square font-bold text-5xl"
        >
    <div
      className="btn btn-primary p-14 m-2 max-w-0 w-1/3 font-mono font-bold "
      onClick={onSquareClick}
    >
      <span className="flex justify-center items-center text-3xl h-full">
      <motion.span
        animate={value ? { rotate: 180 } : ""}
        transition={{
          repeatType: "reverse",
          duration: 0.6
        }}

        
      >
        {value}
        </motion.span>
      </span>
    </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default Square;
