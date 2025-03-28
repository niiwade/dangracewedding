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
  
  // Explicitly type the audioRef as HTMLAudioElement
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const playAnimationRef = useRef<number | null>(null);
  
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
    // Use optional chaining and null checks
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
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      progressBarRef.current.value = currentTime.toString();
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  };
  
  // Format time in minutes:seconds
  const formatTime = (time: number) => {
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
        progressBarRef.current.max = seconds.toString();
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
        if (playAnimationRef.current) {
          cancelAnimationFrame(playAnimationRef.current);
        }
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
      {/* Rest of the component remains the same */}
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