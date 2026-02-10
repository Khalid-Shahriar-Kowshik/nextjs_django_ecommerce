import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-lg grid grid-cols-1 lg:grid-cols-2">
        {/* Left panel */}
        <section className="p-8 sm:p-12 lg:p-16">
          <h1 className="text-3xl font-bold text-gray-900">Get Started Now!</h1>
          <form className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="name"
                placeholder="Enter your name"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2
             text-gray-900 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2
             text-gray-900 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200"
              />
            </div>

            <div className="mt-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  password
                </label>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2
             text-gray-900 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900"
            >
              Login
            </button>
          </form>

          {/* OR divider */}
          <div className="py-6">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <span
                className="h-px w-full border-gray-400
                "
              />
              <p className="text-xs font-medium text-gray-600">OR</p>
              <span className="h-px w-full border-gray-400" />
            </div>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <Image
                src="/google-icon-logo-svgrepo-com.svg"
                alt=""
                width={18}
                height={18}
              />
              Sign up with Google
            </button>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <Image
                src="/github-svgrepo-com.svg"
                alt=""
                width={18}
                height={18}
              />
              Sign up with GitHub
            </button>
          </div>

          {/* Bottom text */}
          <p className="pt-2 text-center text-xs text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-blue-700 hover:text-emrald-700"
            >
              Login
            </Link>
          </p>
        </section>

        {/* Right panel (image) */}
        <aside className="relative hidden lg:block lg:min-h-[640px]">
          <Image
            src="/auth_leaf.png"
            alt="leaf background"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </aside>
      </div>
    </main>
  );
}
