import React from "react";
import { Footer, TextInput, Button } from "flowbite-react";

export default function MissionStatement() {
  return (
    <section className="flex items-center justify-center py-4 bg-white">
      <div className="text-center">
        <h1 className="font-bold text-md lg:text-3xl md:text-3xl sm:text-3xl">
          We are  <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">izh tech</span> <br /> 
          Innovation ahead
        </h1>
        <p className="pt-4 pb-2 text-xs">
          Helping SaaS teams to increase e-commerce conversions,<br />
          reduce bounce rate, and <b>scale up fast.</b>
        </p>
        <div className="flex flex-col items-center">
          <h2 className="items-center font-semibold text-stone-50">
            Sign up for the newsletter
          </h2>
          <Footer.LinkGroup col>
  <div className="max-w-md">
    <div className="flex items-center">
      <TextInput
        className="py-2 border-transparent w-46 text-slate-800"
        id="email"
        type="email"
        placeholder="you@admin.com"
        required
      />
      <Button
        className="w-24 h-10 text-white bg-gray-800"
        size="xs"
      >
        Get a Demo
      </Button>
    </div>
  </div>
</Footer.LinkGroup>

        </div>
      </div>
    </section>
  );
}