import Image from "next/image";
import Link from "next/link";

import Socials from "@/components/Socials";
import { SHOULD_PREFETCH, assetPath } from "@/lib/assets";

const Header = () => {
  return (
    <header className="absolute z-30 w-full xl:h-22.5">
      <div className="container mx-auto">
        <div className="site-header-inner flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-6 py-5 lg:py-8">
          <Link
            prefetch={SHOULD_PREFETCH}
            href="/"
            aria-label="Ethan Smith — home"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Image
              src={assetPath("/logo.svg")}
              alt="Ethan Smith"
              width={220}
              height={48}
              priority
              className="w-44 sm:w-55 h-auto"
            />
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
