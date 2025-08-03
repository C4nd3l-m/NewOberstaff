"use client";
import { useRef, useState } from "react";
import { videos } from "@/helpers/testimonios";
import { Play, Pause } from "lucide-react";

const CardTestimonio = () => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);

    const handlePlayPause = (index: number) => {
    const currentVideo = videoRefs.current[index];

    if (!currentVideo) return;

    if (!currentVideo.paused && playingIndex === index) {
        currentVideo.pause();
        setPlayingIndex(null);
        return;
    }

    videoRefs.current.forEach((video, i) => {
        if (video && i !== index) {
        video.pause();
        }
    });

    currentVideo.play();
    setPlayingIndex(index);
    };

    return (
        <section className="max-w-6xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-3">
            {videos.map((video, index) => (
            <div
                key={index}
                className="bg-brand-light/5 border border-brand-pink/30 rounded-3xl p-4 shadow-brand-lg flex flex-col"
            >
            <div className="relative rounded-xl overflow-hidden aspect-video mb-4">
                <video
                    ref={(el) => {
                    videoRefs.current[index] = el;
                    }}
                    src={`${video.src}.mp4`}
                className="w-full h-full object-cover rounded-xl"
            />

            <button
                title="button"
                onClick={() => handlePlayPause(index)}
                className="absolute bottom-2 right-2 bg-brand-pink text-white p-2 rounded-full shadow-md hover:scale-105 transition"
            >
                {playingIndex === index ? <Pause size={20} /> : <Play size={20} />}
                </button>
            </div>

            <div className="text-left space-y-1">
                {video.nombre && (
                    <h3 className="text-lg font-semibold text-brand-pink">
                    {video.nombre}
                </h3>
            )}
            <p className="text-sm text-brand-gray italic">{video.puesto}</p>
            <p className="text-sm text-brand-gray mt-2">{video.description}</p>
            </div>
        </div>
        ))}
    </section>
    );
};

export default CardTestimonio;
