import Footer from "@/components/Footer";

export const metadata = {
  title: "About | jorgepliesa",
  description:
    "Jorge Pérez Liesa, Computer Engineer with experience in Full Stack and software development. Passionate about video game design and software architecture (C++, Java, React, SQL, Python, NestJS, etc.).",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
