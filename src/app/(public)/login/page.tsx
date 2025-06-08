import LoginForm from "@/components/form/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const loginPage = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 bg-zinc-50 poppins max-h-screen">
      <Image
        priority
        src={"/campina-retifica.png"}
        alt="Logo Campina Retífica"
        width={720}
        height={900}
        sizes="40vw"
        className="h-auto w-initial mx-auto hidden md:block"
      />
      <div className="px-16 text-zinc-950 flex flex-col justify-center">
        <h1 className="text-4xl poppins font-[700] mb-4 w-[100%] md:w-[90%]">
          Realize o seu login!
        </h1>
        <LoginForm />
        <p className="text-zinc-600 text-sm">
          Enfrentando algum problema?{` `}
          <Link
            className="text-zinc-900 underline"
            href={"https://encurtador.com.br/wvvX9"}
          >
            Entre em contato!
          </Link>
        </p>
      </div>
    </main>
  );
};

export default loginPage;
