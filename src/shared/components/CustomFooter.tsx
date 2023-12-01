import { Footer } from "flowbite-react";
import { Button, Checkbox, TextInput } from "flowbite-react";
import image from "/Manoj/Izh-Tech New/izhtech-react-latest/src/assets/Logo/Logo-white.png";

export default function CustomFooter() {
  return (
    <footer className="bg-neutral-900 ">
      <div className="container ">
        <div className="grid w-full lg:grid-cols-4 gap-8 p-8 lg:px-28  md:px-6 py-8 md:grid-cols-4">
          <div>
            <img src={image} className="h-16" alt="" />
          </div>
          <div className="text-stone-50 ">
            <h2 className="font-semibold">Singapore</h2>
            <div className="space-y-1 pt-3 text-gray-300">
              <p>Head Office</p>
              <p>Flora Drive, Singapore</p>
              <p>506889.</p>
            </div>
          </div>
          <div className="text-stone-50 ">
            <h2 className="font-semibold">Work Inquiries</h2>
            <div className="space-y-1 pt-3 text-gray-300">
              <p>Interested in working with us?</p>
              <p>hello@izhtech.com</p>
            </div>
          </div>
          <div>
            <h2 className="text-stone-50 font-semibold">
              Sign up for the newsletter
            </h2>
            <Footer.LinkGroup col>
              <div className="max-w-md">
                <div className=" flex fle-wrap pt-3">
                  <TextInput
                    className="text-slate-800"
                    id="email4"
                    type="email"
                    style={{ backgroundColor: "#201f23", border: "none" }}
                    placeholder="you@admin.com"
                    required
                  />
                  <Button className="w-16 text-slate-800" style={{ backgroundColor: "#201f23", border: "none", color:"#FFFFFF" }} size="xs">
                    Sign up
                  </Button>
                </div>

                <div className="mt-4 gap-2 flex flex-row">
                  <Checkbox
                    id="accept"
                    style={{ backgroundColor: "#201f23", borderColor: "grey" }}
                    defaultChecked
                  />
                  <p className="text-gray-300">
                    I’m okay with getting emails and having that activity
                    tracked to improve my experience.
                  </p>
                </div>
              </div>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-neutral-900 p-8 lg:px-28 sm:px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="izh tech 2023. All rights reserved"
            className="text-stone-50"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 text-stone-50 sm:justify-center list-none">
            <Footer.Link className="text-stone-50 text-xs text-gray-300" href="#">
              Sitemap
            </Footer.Link>
            <Footer.Link href="#" className="text-xs text-gray-300">
              Security
            </Footer.Link>
            <Footer.Link href="#" className="text-xs text-gray-300">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" className="text-xs text-gray-300">
              Terms of Service
            </Footer.Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
