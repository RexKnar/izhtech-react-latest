import { Footer } from "flowbite-react";
import { Button,  TextInput } from "flowbite-react";
import logo from "../../assets/Logo/Logo-white.png";

export default function CustomFooter() {
  return (
<<<<<<< HEAD
    <footer className="bg-neutral-900 ">
      <div className="container mx-auto">
        <div className="grid w-full gap-8 p-4 py-8 lg:px-8 lg:grid-cols-4 md:px-6 md:grid-cols-4">
          <div >
=======
    <footer className="py-10 mx-auto container-fluid bg-neutral-900 ">
      <div className="container mx-auto">
        <div className="grid w-full gap-8 p-8 py-8 lg:grid-cols-4 xl:px-28 md:px-6 md:grid-cols-4">
          <div>
>>>>>>> 9e7af7f8c368d77f1f4cb25f707392d35b265157
            <img src={logo} className="h-16" alt="" />
          </div>
          <div className="text-stone-50 ">
            <h2 className="font-semibold">Singapore</h2>
            <div className="pt-3 space-y-1 text-gray-300">
              <p>Head Office</p>
              <p>Flora Drive, Singapore</p>
              <p>506889.</p>
            </div>
          </div>
          <div className="text-stone-50 ">
            <h2 className="font-semibold">Work Inquiries</h2>
            <div className="pt-3 space-y-1 text-gray-300">
              <p>Interested in working with us?</p>
              <p>hello@izhtech.com</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-stone-50">
              Sign up for the newsletter
            </h2>
            <Footer.LinkGroup col>
              <div className="max-w-md">
                <div className="flex gap-4 pt-3 fle-wrap">
                  <TextInput
                    className="text-slate-800"
                    id="email"
                    type="email"
                    style={{ backgroundColor: "#201f23", border: "none" }}
                    placeholder="you@admin.com"
                    required
                  />
                  <Button className="w-16 px-0 py-0 text-slate-800" style={{ backgroundColor: "#201f23", border: "none", color:"#FFFFFF" }} size="xs">
                    Sign up
                  </Button>
                </div>

                <div className="flex flex-row gap-2 mt-4">
                  {/* <Checkbox
                    id="accept"
                    style={{ backgroundColor: "#201f23", borderColor: "grey" }}
                    defaultChecked
                  />
                  <p className="text-gray-300">
                    I’m okay with getting emails and having that activity
                    tracked to improve my experience.
                  </p> */}
                </div>
              </div>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full p-4 py-6 bg-neutral-900 lg:px-8 sm:px-4 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="izhtech 2024. All rights reserved"
            className="text-stone-50"
          />
          <div className="flex mt-4 space-x-6 list-none sm:mt-0 text-stone-50 sm:justify-center">
            <Footer.Link className="text-xs text-gray-300 text-stone-50 mx-auto" href="#">
              Sitemap
            </Footer.Link>
<<<<<<< HEAD
            <Footer.Link href="#" className="text-xs text-gray-300 mx-auto">
              Security
            </Footer.Link>
            <Footer.Link href="#" className="text-xs text-gray-300 mx-auto">
=======
            <Footer.Link href="#" className="text-xs text-gray-300">
>>>>>>> 9e7af7f8c368d77f1f4cb25f707392d35b265157
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" className="text-xs text-gray-300 mx-auto">
              Terms of Service
            </Footer.Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
