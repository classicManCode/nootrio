import Home from "@/components/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    google: "br85fb2aKlNnWn1tJMsug--YFxy3wdQjvwM3AK9HT8o",
  },
};

const HomePage = () => {
  return (
    <main className="">
      <Home />
    </main>
  );
};

export default HomePage;
