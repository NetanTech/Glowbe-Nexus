import Image from "next/image";
import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto grid w-full max-w-[1100px] items-center gap-8 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-2 lg:gap-12">
        <div className="order-2 mx-auto w-full max-w-[420px] lg:order-1">{children}</div>
        <div className="order-1 w-full overflow-hidden rounded-[20px] sm:rounded-[24px] lg:order-2 lg:rounded-[28px]">
          <Image
            src="/assets/auth_image.webp"
            alt=""
            width={720}
            height={960}
            priority
            quality={75}
            className="h-auto w-full rounded-[20px] object-contain sm:rounded-[24px] lg:rounded-[28px]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
