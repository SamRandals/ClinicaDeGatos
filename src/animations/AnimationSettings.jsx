import { useEffect, useRef } from "react";
import "./AnimationSettings.css";

export default function AnimationSettings({
  children,
  type = "fade",
  direction = "up",
  duration = "0.8s",
  threshold = 0.2,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("anim-visible");
            return;
            
          }
          element.classList.remove("anim-visible");
        });
      },
      { threshold }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return (
    <div
      ref={containerRef}
      className={`anim-container anim-${type}-${direction}`}
      style={{ "--duration": duration }}
    >
      {children}
    </div>
  );
}
