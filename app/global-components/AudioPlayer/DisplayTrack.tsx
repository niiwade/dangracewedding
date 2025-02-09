import { useEffect } from "react";

// Define the shape of a track
interface Track {
  title: string;
  src: string;
  author: string;
}

// Define types for audio and progress bar refs
interface AudioRef extends HTMLAudioElement {
  currentTime: number;
}

// Remove the max property since it's already defined in HTMLInputElement
interface ProgressBarRef extends HTMLInputElement {
  value: string;
}

// Define props interface
interface DisplayTrackProps {
  currentTrack: Track;
  audioRef: React.RefObject<AudioRef>;
  setDuration: (duration: number) => void;
  progressBarRef: React.RefObject<ProgressBarRef>;
  handleNext: () => void;
  trackIndex: number;
}

export default function DisplayTrack({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
  trackIndex,
}: DisplayTrackProps): JSX.Element {
  const trackDuration = (): void => {
    if (audioRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      if (progressBarRef.current) {
        // Convert the number to string when setting max
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  useEffect(() => {
    trackDuration();
  }, []);

  return (
    <div className="text-[#6f705f]">
      <audio
        src={currentTrack.src}
        preload="metadata"
        ref={audioRef}
        onEnded={handleNext}
        onLoadedMetadata={trackDuration}
      />
      <div className="text-base">
        <p className="font-bold">
          {trackIndex + 1}. {currentTrack.title}
        </p>
        <p>
          Artist: <span className="italic">{currentTrack.author}</span>
        </p>
      </div>
    </div>
  );
}
