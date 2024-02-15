import  {useState, useEffect} from 'react';

export default function useWindowPosition(): number {
  const [scrollPosition, setPosition] = useState(0);
  useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPosition;
}
