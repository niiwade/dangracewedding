

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";

const ModernAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const playAnimationRef = useRef(null);
  
  const tracks = [
    {
      title: "Now and Always",
      artist: "Kotrell",
      src: "./mp3-songs/kotrell.mp3",
      coverArt: "/musicbg.png"
    },
    {
      title: "Masede",
      artist: "Daddy Lumba",
      src: "./mp3-songs/DaddyLumba.mp3",
      coverArt: "/musicbg.png"
    }
  ];
  
  const currentTrack = tracks[currentTrackIndex];
  
  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };
  
  const handlePrevious = () => {
    setCurrentTrackIndex(prev => 
      prev === 0 ? tracks.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentTrackIndex(prev => 
      prev === tracks.length - 1 ? 0 : prev + 1
    );
  };
  
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = parseFloat(progressBarRef.current.value);
    }
  };
  
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const handleVolumeChange = (e) => {
    const value = parseInt(e.target.value);
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
      if (value === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };
  
  const repeat = () => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  };
  
  // Format time in minutes:seconds
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };
  
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds;
      }
    }
  };
  
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        playAnimationRef.current = requestAnimationFrame(repeat);
      } else {
        audioRef.current.pause();
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
  }, [isPlaying, currentTrackIndex]);
  
  useEffect(() => {
    return () => {
      if (playAnimationRef.current) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src={currentTrack.coverArt}
          width={800}
          height={250}
          className="object-cover w-full h-56"
          alt="Album artwork"
        />
        <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop-blur-sm text-white">
          <h3 className="font-bold text-xl">{currentTrack.title}</h3>
          <span className="opacity-70">{currentTrack.artist}</span>
        </div>
      </div>
      
      <div>
        <div className="relative h-1 bg-gray-200">
          <input
            ref={progressBarRef}
            type="range"
            defaultValue="0"
            className="absolute w-full h-1 appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow cursor-pointer opacity-0"
            onChange={handleProgressChange}
          />
          <div 
            className="absolute h-full bg-red-300" 
            style={{ width: `${(timeProgress / duration) * 100}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md"></div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
        <div>
          {formatTime(timeProgress)}
        </div>
        <div className="flex space-x-4 p-2">
          <button onClick={handlePrevious} className="focus:outline-none transition hover:text-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={togglePlayPause} 
            className="rounded-full w-8 h-8 flex items-center justify-center ring-2 ring-gray-100 focus:outline-none transition hover:ring-red-200"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>
          <button onClick={handleNext} className="focus:outline-none transition hover:text-gray-700">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div>
          {formatTime(duration)}
        </div>
      </div>
      
      <div className="border-t px-4 py-3 flex items-center">
        <button onClick={toggleMute} className="focus:outline-none mr-2">
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-1 bg-gray-200 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-red-300 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full"
        />
      </div>
      
      <ul className="text-xs sm:text-base divide-y border-t cursor-default">
        {tracks.map((track, index) => (
          <li 
            key={index}
            onClick={() => {
              setCurrentTrackIndex(index);
              setIsPlaying(true);
            }}
            className={`flex items-center space-x-3 hover:bg-gray-100 ${
              currentTrackIndex === index ? 'bg-gray-50' : ''
            }`}
          >
            <button className={`p-3 group focus:outline-none ${currentTrackIndex === index && isPlaying ? 'text-red-300' : 'hover:text-red-300'}`}>
              {currentTrackIndex === index && isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
            <div className="flex-1">
              <div className="font-medium">{track.title}</div>
              <div className="text-xs text-gray-500">{track.artist}</div>
            </div>
          </li>
        ))}
      </ul>
      
      <audio 
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
    </div>
  );
};

export default ModernAudioPlayer;