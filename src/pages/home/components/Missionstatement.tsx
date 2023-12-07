import React from "react";
import { Footer, TextInput, Button } from "flowbite-react";

export default function MissionStatement() {
  return (
    <section className="flex items-center justify-center py-4 bg-white">
      <div className="text-center">
        <h1 className="font-bold text-md 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
          We are izh tech,<br />
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
              <div className="flex flex-wrap items-center">
                <TextInput
                  className="text-slate-800"
                  id="email"
                  type="email"
                  style={{ backgroundColor: "#D3D3D3", border: "none" }}
                  placeholder="you@admin.com"
                  required
                />
                <Button
                  className="w-24 h-10 text-slate-800"
                  style={{
                    backgroundColor: "#201f23",
                    border: "none",
                    color: "#FFFFFF",
                  }}
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
