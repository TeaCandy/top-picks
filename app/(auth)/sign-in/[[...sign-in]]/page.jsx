import { SignIn } from "@clerk/nextjs";

export default function Page() { 
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://brunchcafe.com/wp-content/uploads/2020/12/IMG_2127.jpeg"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Houston's Top Picks
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
            Welcome! I'm Candace Ryan, and I'm excited to present my Capstone Project for my Full Stack course at MIT. Join me as I showcase my favorite culinary delights since relocating to Houston, TX.
            </p>
          </div>
        </section>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <SignIn />
        </main>
      </div>
    </section>
  );
}
