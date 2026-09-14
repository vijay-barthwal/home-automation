import Image from "next/image";

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <span
      className="dark flex shrink-0 items-center justify-center rounded-xl bg-surface-2 border border-border-strong"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo-mark.webp"
        alt=""
        width={size}
        height={size}
        priority
        className="h-[78%] w-[78%] object-contain"
      />
    </span>
  );
}
