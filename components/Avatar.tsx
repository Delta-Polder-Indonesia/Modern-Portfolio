import Image from "next/image";

import { assetPath } from "@/lib/assets";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src={assetPath("/avatar.png")}
        alt=""
        aria-hidden
        width={737}
        height={678}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
