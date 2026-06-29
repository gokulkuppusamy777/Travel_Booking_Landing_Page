import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function ScrollProgress() {
  const { scrollProgress } = useScrollPosition();
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary-400 to-teal-400 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
