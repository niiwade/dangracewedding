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
  };

  const handleNext = (): void => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
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
    <div className="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
      <div className="relative">
        <Image
          src="/musicbg.png"
          width={800}
          height={250}
          alt="Album cover"
          className="object-cover w-full h-64"
        />
        <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop-blur-sm text-white">
          <h3 className="font-bold text-xl">{currentTrack.title}</h3>
          <span className="opacity-70">{currentTrack.author}</span>
        </div>
      </div>
      
      <div>
        <div className="relative h-1 bg-gray-200">
          <input
            ref={progressBarRef}
            type="range"
            className="absolute w-full h-1 appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow cursor-pointer opacity-0 z-10"
            defaultValue="0"
            onChange={handleProgressChange}
          />
          <div 
            className="absolute h-full bg-green-500 flex items-center justify-end" 
            style={{ width: `${(timeProgress / duration) * 100}%` }}
          >
            <div className="rounded-full w-3 h-3 bg-white shadow-md"></div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
        <div>
          {formatTime(timeProgress)}
        </div>
        <div className="flex space-x-3 p-2">
          <button onClick={handlePrevious} className="focus:outline-none">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={togglePlayPause} 
            className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>
          <button onClick={handleNext} className="focus:outline-none">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div>
          {formatTime(duration)}
        </div>
      </div>

      <ul className="text-xs sm:text-base divide-y border-t cursor-default">
        {tracks.map((track, index) => (
          <li 
            key={index}
            className="flex items-center space-x-3 hover:bg-gray-100"
            onClick={() => {
              setTrackIndex(index);
              setCurrentTrack(tracks[index]);
              setIsPlaying(true);
            }}
          >
            <button className="p-3 hover:bg-green-500 group focus:outline-none">
              {trackIndex === index && isPlaying ? (
                <Pause className="w-4 h-4 group-hover:text-white" />
              ) : (
                <Play className="w-4 h-4 group-hover:text-white" />
              )}
            </button>
            <div className="flex-1">
              {track.author} - {track.title}
            </div>
            <div className="text-xs text-gray-400 pr-4">
              {/* You could add duration for each track if available */}
              --:--
            </div>
          </li>
        ))}
      </ul>

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