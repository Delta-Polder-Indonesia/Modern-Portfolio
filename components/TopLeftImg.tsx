import Image from "next/image";

import { assetPath } from "@/lib/assets";

const TopLeftImg = () => {
  return (
    <div
      className="fixed inset-0 z-10 overflow-hidden mix-blend-color-dodge opacity-50 pointer-events-none select-none"
      aria-hidden
    >
      <div className="absolute left-0 top-0 w-50 xl:w-100">
        <Image
          src={assetPath("/top-left-img.png")}
          alt=""
          width={400}
          height={400}
          priority
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default TopLeftImg;
