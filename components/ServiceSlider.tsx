"use client";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import type { IconType } from "react-icons";
import Link from "next/link";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { SHOULD_PREFETCH } from "@/lib/assets";

const serviceData: {
  Icon: IconType;
  title: string;
  description: string;
}[] = [
  {
    Icon: RxCrop,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Icon: RxPencil2,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Icon: RxDesktop,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Icon: RxReader,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    Icon: RxRocket,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-60 sm:h-85"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <Link
            href="/contact"
            prefetch={SHOULD_PREFETCH}
            className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-87.5 leading-normal">{item.description}</p>
            </div>

            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
