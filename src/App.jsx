import { useState } from 'react';
import useSound from 'use-sound';
import { FaPlay, FaPause } from 'react-icons/fa'; // Example icons

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound('sound.mp3', { loop: true,interrupt: false });

  const togglePlay = () => {
    if (isPlaying) {
      stop(); 
    } else {
      play(); 
    }
    setIsPlaying(!isPlaying); 
  };

  return (
    <div className="flex justify-center">
      <button className="text-3xl p-4" onClick={togglePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}
