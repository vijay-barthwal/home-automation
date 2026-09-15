import Image from "next/image";
import { LOGO_MARK_SRC } from "@/lib/site-config";

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <span
      className="dark flex shrink-0 items-center justify-center rounded-xl bg-surface-2 border border-border-strong"
      style={{ width: size, height: size }}
    >
      <Image
        src={LOGO_MARK_SRC}
        alt=""
        width={size}
        height={size}
        priority
        className="h-[78%] w-[78%] object-contain"
      />
    </span>
  );
}
