import Image from "next/image";

// Define types for audio and progress bar refs
interface AudioRef extends HTMLAudioElement {
  currentTime: number;
  paused: boolean;
}

interface ProgressBarRef extends HTMLInputElement {
  value: string;
}

interface ProgressBarProps {
  progressBarRef: React.RefObject<ProgressBarRef>;
  audioRef: React.RefObject<AudioRef>;
  timeProgress: number;
  duration: number;
}

const formatTime = (time: number): string => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return "00:00";
};

export default function ProgressBar({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}: ProgressBarProps): JSX.Element {
  const handleProgressChange = (): void => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
    }
  };

  return (
    <div className="flex flex-col progress pt-2">
      <div className="flex items-center">
        <span className="text-base font-bold text-white">
          {formatTime(timeProgress)}
        </span>
        {!audioRef.current?.paused && timeProgress < 0.5 && (
          <Image
            className="ml-2 max-w-[2.5rem]"
            src="/three-dots.svg"
            width={120}
            height={30}
            alt="Loader"
          />
        )}
      </div>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="text-base font-bold text-white">
        {formatTime(duration)}
      </span>
    </div>
  );
}
