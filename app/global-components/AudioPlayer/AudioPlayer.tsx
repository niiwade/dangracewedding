"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { tracks } from "./Tracks";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

// Define the shape of a track object
interface Track {
  title: string;
  src: string;
  author: string;
}

// Define types for audio and progress bar refs
interface AudioRef extends HTMLAudioElement {
  currentTime: number;
}

interface ProgressBarRef extends HTMLInputElement {
  value: string;
}

// Define props for child components
interface ControlsProps {
  audioRef: React.RefObject<AudioRef>;
  progressBarRef: React.RefObject<ProgressBarRef>;
  setTimeProgress: (time: number) => void;
  duration: number;
  tracks: Track[];
  trackIndex: number;
  setTrackIndex: (index: number) => void;
  setCurrentTrack: (track: Track) => void;
  handleNext: () => void;
}

interface DisplayTrackProps {
  currentTrack: Track;
  audioRef: React.RefObject<AudioRef>;
  progressBarRef: React.RefObject<ProgressBarRef>;
  setDuration: (duration: number) => void;
  handleNext: () => void;
  trackIndex: number;
}

interface ProgressBarProps {
  progressBarRef: React.RefObject<ProgressBarRef>;
  audioRef: React.RefObject<AudioRef>;
  timeProgress: number;
  duration: number;
}

export default function AudioPlayer(): JSX.Element {
  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const audioRef = useRef<AudioRef>(null);
  const progressBarRef = useRef<ProgressBarRef>(null);

  const handleNext = (): void => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <div className="relative w-full max-w-[35rem] my-auto bg-fluo-green rounded-xl border-solid border-4 border-white shadow-centered-shadow p-5 pt-20 before:content-[''] before:bg-album-cover before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:w-[29.6rem] before:h-[8.5rem] before:max-w-[15rem] before:bg-cover before:blur-md before:opacity-90 lg:w-3/4 lg:before:max-w-[18.75rem] lg:before:h-[11.25rem] lg:pt-40 lg:p-11">
      <Image
        className="absolute -top-16 left-1/2 -translate-x-1/2 rounded-xl max-w-[16rem] lg:max-w-xs"
        src="/musicbg.png"
        width={205}
        height={250}
        alt="Album cover"
      />
      <Controls
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        setTimeProgress={setTimeProgress}
        duration={duration}
        tracks={tracks}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        setCurrentTrack={setCurrentTrack}
        handleNext={handleNext}
      />
      <DisplayTrack
        currentTrack={currentTrack}
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        setDuration={setDuration}
        handleNext={handleNext}
        trackIndex={trackIndex}
      />
      <ProgressBar
        progressBarRef={progressBarRef}
        audioRef={audioRef}
        timeProgress={timeProgress}
        duration={duration}
      />
    </div>
  );
}
