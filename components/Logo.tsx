import Image from "next/image";

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const height = size === "lg" ? "h-10" : "h-8";

  return (
    <span className="inline-flex items-center">
      <Image
        src="/logodarkmode.png"
        alt="A3TechLabs"
        width={680}
        height={115}
        className={`logo-dark ${height} w-auto`}
      />
      <Image
        src="/logodaymode.png"
        alt="A3TechLabs"
        width={705}
        height={114}
        className={`logo-light ${height} w-auto`}
      />
    </span>
  );
}
