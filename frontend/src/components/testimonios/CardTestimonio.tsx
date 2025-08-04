"use client";
import { useRef, useState } from "react";
import { videos } from "@/helpers/testimonios";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

// Función para solicitar pantalla completa de forma tipada
const requestFullscreen = (element: HTMLElement): Promise<void> => {
  if (element.requestFullscreen) {
    return element.requestFullscreen();
  } else if (
    "webkitRequestFullscreen" in element &&
    typeof (element as HTMLElement & { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen === "function"
  ) {
    return (element as HTMLElement & { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen();
  } else if (
    "mozRequestFullScreen" in element &&
    typeof (element as HTMLElement & { mozRequestFullScreen: () => Promise<void> }).mozRequestFullScreen === "function"
  ) {
    return (element as HTMLElement & { mozRequestFullScreen: () => Promise<void> }).mozRequestFullScreen();
  } else if (
    "msRequestFullscreen" in element &&
    typeof (element as HTMLElement & { msRequestFullscreen: () => Promise<void> }).msRequestFullscreen === "function"
  ) {
    return (element as HTMLElement & { msRequestFullscreen: () => Promise<void> }).msRequestFullscreen();
  }

  return Promise.reject(new Error("Fullscreen API is not supported"));
};

const CardTestimonio = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlayPause = async (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    // Si ya se está reproduciendo ese video, lo pausamos
    if (!currentVideo.paused && playingIndex === index) {
      currentVideo.pause();
      setPlayingIndex(null);
      return;
    }

    // Pausar otros videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    try {
      await currentVideo.play();
      setPlayingIndex(index);
      await requestFullscreen(currentVideo);
    } catch (err) {
      console.error("Error al reproducir el video o activar pantalla completa", err);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-3">
      {videos.map((video, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-brand-light/5 border border-pink-400/30 rounded-3xl p-4 shadow-brand-lg flex flex-col"
        >
          <div className="relative rounded-xl overflow-hidden aspect-video mb-4">
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={`${video.src}.mp4`}
              className="w-full h-full object-cover rounded-xl"
              playsInline
              controls={false}
            />
            <button
              title="Reproducir video"
              onClick={() => handlePlayPause(index)}
              className="absolute bottom-2 right-2 bg-pink-300 text-white p-2 rounded-full shadow-md hover:scale-105 transition"
            >
              {playingIndex === index ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>

          <div className="text-left space-y-1">
            {video.nombre && (
              <h3 className="text-lg font-semibold text-pink-400">
                {video.nombre}
              </h3>
            )}
            <p className="text-sm text-brand-gray italic">{video.puesto}</p>
            <p className="text-sm text-brand-gray mt-2">{video.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default CardTestimonio;
