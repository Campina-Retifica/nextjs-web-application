import LoginForm from "@/components/form/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const loginPage = () => {
  return (
    <main className="grid grid-cols-2 bg-zinc-50 poppins max-h-screen">
      <Image
        priority
        src={"/campina-retifica.jpg"}
        alt="Logo Campina Retífica"
        width={720}
        height={900}
        sizes="50vw"
        className="h-screen w-full object-cover object-center"
      />
      <div className="px-16 text-zinc-950 flex flex-col justify-center">
        <h1 className="text-4xl roboto font-[700] mb-4 w-[90%]">
          Realize o seu login!
        </h1>
        <LoginForm />
        <p className="text-zinc-600 text-sm">
          Enfrentando algum problema?{` `}
          <Link
            className="text-zinc-900"
            href={
              "https://wa.me/+5583996955416?text=Olá,%20Francinaldo!%20Estou%20com%20uma%20dúvida%20em%20relação%20a..."
            }
          >
            Entre em contato!
          </Link>
        </p>
      </div>
    </main>
  );
};

export default loginPage;
