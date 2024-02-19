import CanvasConfetti from "canvas-confetti";
import { useEffect, useRef } from "react";
import Confetti from "react-canvas-confetti";

const ConfettiComponent = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = setInterval(shoot, 100);
    return () => clearInterval(animationRef.current);
  }, []);

  const shoot = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    };

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      CanvasConfetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      CanvasConfetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return <Confetti />;
};

export default ConfettiComponent;
