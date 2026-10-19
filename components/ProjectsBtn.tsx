import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import { SHOULD_PREFETCH, assetPath } from "@/lib/assets";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        prefetch={SHOULD_PREFETCH}
        href="/work"
        aria-label="View my work"
        className="relative w-46.25 h-46.25 flex justify-center items-center bg-circle-star bg-cover bg-center bg-no-repeat group rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <Image
          src={assetPath("/rounded-text.png")}
          alt=""
          aria-hidden
          width={141}
          height={148}
          loading="eager"
          className="animate-spin-slow w-full h-full max-w-35.25 max-h-37 pointer-events-none select-none"
        />
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
