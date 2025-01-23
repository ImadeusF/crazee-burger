import { useState } from "react";

export const useSuccessMessage = (timeDelay = 2000) => {
  const [isSubmited, setIsSubmited] = useState(false);

  const displaySuccessMessage = () => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, timeDelay);
  };
  return { isSubmited, displaySuccessMessage };
};
