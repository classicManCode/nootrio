import Image from "next/image";

const Page = () => {
  return (
    <section className="h-screen w-full">
      <Image
        src="/hero-image.png"
        alt="Hero Image"
        width={2000}
        height={1333}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        priority
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "black",
          opacity: 0.4, // 👈 adjust this (0.1–0.7)
        }}
      ></div>
    </section>
  );
};

export default Page;
