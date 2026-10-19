import Image from "next/image";

import { assetPath } from "@/lib/assets";

const Bulb = () => {
  return (
    <div
      className="hidden md:block fixed inset-0 z-10 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      <div className="absolute left-0 bottom-0 -translate-x-36 translate-y-12 rotate-12 mix-blend-color-dodge animate-pulse w-50 xl:w-65">
        <Image
          src={assetPath("/bulb.png")}
          alt=""
          width={260}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Bulb;
