import "./Error.css";
import { motion } from "framer-motion";

export default function Errormessage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="error-div">
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <a href="/">Go to the home page</a>
        </div>
      </motion.div>
    </>
  );
}
