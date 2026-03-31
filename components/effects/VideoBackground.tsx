"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface VideoBackgroundProps {
  videoUrl: string;
  overlay?: boolean;
  className?: string;
}

export default function VideoBackground({
  videoUrl,
  overlay = true,
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video Background */}
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Gradient Overlay */}
      {overlay && (
        <motion.div
          className="video-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      )}

      {/* Animated Trees/Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900/30 to-transparent"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
  );
}