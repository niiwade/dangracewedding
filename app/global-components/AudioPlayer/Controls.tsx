import {
  useState,
  useEffect,
  useRef,
  useCallback,
  SetStateAction,
  Dispatch,
} from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface Track {
  title: string;
  src: string;
  author: string;
}

interface AudioRef extends HTMLAudioElement {
  currentTime: number;
  play(): Promise<void>;
  pause(): void;
}

interface ProgressBarRef extends HTMLInputElement {
  value: string;
}

interface ControlsProps {
  audioRef: React.RefObject<AudioRef>;
  progressBarRef: React.RefObject<ProgressBarRef>;
  duration: number;
  setTimeProgress: (time: number) => void;
  tracks: Track[];
  trackIndex: number;
  setTrackIndex: Dispatch<SetStateAction<number>>;
  setCurrentTrack: (track: Track) => void;
  handleNext: () => void;
}

export default function Controls({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}: ControlsProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playAnimationRef = useRef<number>();

  const togglePlayPause = (): void => {
    setIsPlaying((prev) => !prev);
  };

  const repeat = useCallback((): void => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, progressBarRef, setTimeProgress]);

  const handlePrevious = (): void => {
    if (trackIndex === 0) {
      const lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
      playAnimationRef.current = requestAnimationFrame(repeat);
    }

    return () => {
      if (playAnimationRef.current) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className="flex items-center pt-8 pb-4 gap-4">
      <button onClick={togglePlayPause}>
        {isPlaying ? (
          <Pause className="fill-red-300 hover:fill-white transition-all" />
        ) : (
          <Play className="fill-red-300 hover:fill-white transition-all" />
        )}
      </button>
      <button onClick={handlePrevious}>
        <ChevronLeft className="fill-red-300 hover:fill-white transition-all" />
      </button>
      <button onClick={handleNext}>
        <ChevronRight className="fill-red-300 hover:fill-white transition-all" />
      </button>
    </div>
  );
}
