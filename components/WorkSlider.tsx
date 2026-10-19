"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { assetPath } from "@/lib/assets";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Brand identity project",
          path: "/thumb1.jpg",
          link: "https://example.com",
        },
        {
          title: "Web application project",
          path: "/thumb2.jpg",
          link: "https://example.com",
        },
        {
          title: "Mobile experience project",
          path: "/thumb3.jpg",
          link: "https://example.com",
        },
        {
          title: "Marketing website project",
          path: "/thumb4.jpg",
          link: "https://example.com",
        },
      ],
    },
    {
      images: [
        {
          title: "Marketing website project",
          path: "/thumb4.jpg",
          link: "https://example.com",
        },
        {
          title: "Brand identity project",
          path: "/thumb1.jpg",
          link: "https://example.com",
        },
        {
          title: "Web application project",
          path: "/thumb2.jpg",
          link: "https://example.com",
        },
        {
          title: "Mobile experience project",
          path: "/thumb3.jpg",
          link: "https://example.com",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-70 sm:h-120"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {slide.images.map((image) => (
              <Link
                key={image.path}
                href={image.link}
                target="_blank"
                rel="noreferrer noopener"
                className="relative rounded-lg overflow-hidden flex items-center justify-center group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={assetPath(image.path)}
                  alt={`${image.title} — preview`}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:bg-linear-to-l md:from-transparent md:via-[#e838cc] md:to-[#4a22bd] md:opacity-0 md:group-hover:opacity-80 transition-all duration-700"
                  aria-hidden
                />

                <div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-max max-w-[92%] md:bottom-0 md:left-auto md:translate-x-0 md:translate-y-full md:group-hover:-translate-y-10 md:group-hover:xl:-translate-y-20 transition-all duration-300"
                  aria-hidden
                >
                  <span className="flex items-center justify-center gap-x-1.5 md:gap-x-2 text-[10px] sm:text-[13px] tracking-[0.12em] sm:tracking-[0.2em] whitespace-nowrap">
                    <span className="delay-100">LIVE</span>
                    <span className="md:translate-y-[500%] md:group-hover:translate-y-0 transition-all duration-300 delay-150">
                      PROJECT
                    </span>
                    <span className="text-base sm:text-xl md:translate-y-[500%] md:group-hover:translate-y-0 transition-all duration-300 delay-150">
                      <BsArrowRight />
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
