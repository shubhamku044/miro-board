import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
