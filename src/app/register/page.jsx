export default function Register() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-brass">Create an Account</h1>
          <p className="text-sm text-gray-400 text-center">
            Join Olefy and start your music journey.
          </p>
  
          {/* Registration Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brass"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brass"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brass"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-brass text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition"
            >
              Register
            </button>
          </form>
  
          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-brass hover:underline">Login</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  