import Image from "next/image";

import { assetPath } from "@/lib/assets";

const Circles = () => {
  return (
    <div
      className="hidden md:block fixed inset-0 z-10 overflow-hidden pointer-events-none select-none" style={{contain: "paint"}}
      aria-hidden
    >
      <div className="w-50 xl:w-75 absolute right-0 bottom-0 translate-x-16 translate-y-2 mix-blend-color-dodge animate-pulse">
        <Image
          src={assetPath("/circles.png")}
          alt=""
          width={260}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Circles;
