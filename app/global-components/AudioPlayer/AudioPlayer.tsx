"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { tracks } from "./Tracks";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

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
  max: string;
}

export default function AudioPlayer(): JSX.Element {
  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  const audioRef = useRef<AudioRef>(null);
  const progressBarRef = useRef<ProgressBarRef>(null);
  const playAnimationRef = useRef<number>();

  // Format time in minutes:seconds
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

  const togglePlayPause = (): void => {
    setIsPlaying((prev) => !prev);
  };

  const handlePrevious = (): void => {
    if (trackIndex === 0) {
      const lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
    // Start playing immediately when changing tracks
    setIsPlaying(true);
  };

  const handleNext = (): void => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
    // Start playing immediately when changing tracks
    setIsPlaying(true);
  };

  const handleProgressChange = (): void => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
    }
  };

  const repeat = useCallback((): void => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, progressBarRef, setTimeProgress]);

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  // Effect for handling play/pause state changes
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
  
  // Effect for handling track changes
  useEffect(() => {
    // Reset progress when track changes
    setTimeProgress(0);
    if (progressBarRef.current) {
      progressBarRef.current.value = '0';
    }
    
    // Play immediately when track changes if isPlaying is true
    if (isPlaying && audioRef.current) {
      // Need to wait a tiny bit for the audio src to update
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(error => {
            console.error("Error playing after track change:", error);
          });
        }
      }, 50);
    }
  }, [currentTrack]);

  return (
    <div className="mt-6 sm:mt-10 relative z-10 rounded-xl shadow-xl">
      <div className="bg-white border-slate-100 transition-all duration-500 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
        <div className="flex items-center space-x-4">
          <Image 
            src="/musicbg.png" 
            width={88} 
            height={88} 
            alt="Album cover" 
            className="flex-none rounded-lg bg-slate-100"
          />
          <div className="min-w-0 flex-auto space-y-1 font-semibold">
            <p className="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
              <abbr title="Track">{trackIndex + 1}</abbr> of {tracks.length}
            </p>
            <h2 className="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
              {currentTrack.title}
            </h2>
            <p className="text-slate-900 dark:text-slate-50 text-lg">
              {currentTrack.author}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="relative">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <input
                ref={progressBarRef}
                type="range"
                className="absolute w-full h-full appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none cursor-pointer opacity-0 z-10"
                defaultValue="0"
                onChange={handleProgressChange}
              />
              <div 
                className="bg-cyan-500 dark:bg-cyan-400 h-2" 
                style={{ width: `${(timeProgress / duration) * 100}%` }}
                role="progressbar"
                aria-label="music progress"
                aria-valuenow={timeProgress}
                aria-valuemin={0}
                aria-valuemax={duration}
              ></div>
            </div>
            <div 
              className="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute top-1/2 w-4 h-4 -mt-2 flex items-center justify-center bg-white rounded-full shadow"
              style={{ left: `${(timeProgress / duration) * 100}%` }}
            >
              <div className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
            </div>
          </div>
          <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
            <div className="text-cyan-500 dark:text-slate-100">{formatTime(timeProgress)}</div>
            <div className="text-slate-500 dark:text-slate-400">{formatTime(duration)}</div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
        <div className="flex-auto flex items-center justify-evenly">
          <button type="button" aria-label="Previous track" onClick={handlePrevious}>
            <svg width="24" height="24" fill="none">
              <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M6 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <button type="button" aria-label="Rewind 10 seconds">
            <svg width="24" height="24" fill="none">
              <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
        <button 
          type="button" 
          className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" 
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <svg width="30" height="32" fill="currentColor">
              <rect x="6" y="4" width="4" height="24" rx="2"></rect>
              <rect x="20" y="4" width="4" height="24" rx="2"></rect>
            </svg>
          ) : (
            <svg width="30" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5.14v14l11-7-11-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <div className="flex-auto flex items-center justify-evenly">
          <button type="button" aria-label="Skip 10 seconds">
            <svg width="24" height="24" fill="none">
              <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <button type="button" aria-label="Next track" onClick={handleNext}>
            <svg width="24" height="24" fill="none">
              <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M18 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <button type="button" className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500">
            1x
          </button>
        </div>
      </div>

      <div className="mt-4 bg-white dark:bg-slate-800 rounded-xl shadow overflow-hidden">
        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {tracks.map((track, index) => (
            <li 
              key={index}
              className={`flex items-center p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 ${trackIndex === index ? 'bg-slate-50 dark:bg-slate-700' : ''}`}
              onClick={() => {
                setTrackIndex(index);
                setCurrentTrack(tracks[index]);
                setIsPlaying(true);
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center mr-4">
                {trackIndex === index && isPlaying ? (
                  <div className="w-4 h-4 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></div>
                ) : (
                  <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center">
                    <Play className="w-2 h-2 text-slate-500 dark:text-slate-400" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{track.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{track.author}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        onEnded={handleNext}
        onLoadedMetadata={onLoadedMetadata}
      />
    </div>
  );
}