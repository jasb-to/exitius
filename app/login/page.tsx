export default function LoginPage() {

  return (

    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      py-12
    ">


      <div className="
        w-full
        max-w-md
        rounded-2xl
        border
        p-8
      ">


        <h1 className="
          text-3xl
          font-bold
        ">
          Welcome back
        </h1>


        <p className="
          mt-3
          text-gray-600
        ">
          Login to manage your acquisition opportunities.
        </p>



        <form className="
          mt-8
          space-y-5
        ">


          <div>

            <label className="
              text-sm
              font-medium
            ">
              Email
            </label>


            <input
              type="email"
              className="
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
              "
              placeholder="you@example.com"
            />

          </div>




          <div>

            <label className="
              text-sm
              font-medium
            ">
              Password
            </label>


            <input
              type="password"
              className="
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
              "
              placeholder="Your password"
            />

          </div>




          <button
            className="
              w-full
              rounded-lg
              bg-black
              px-5
              py-3
              text-white
            "
          >

            Login

          </button>



        </form>



        <p className="
          mt-6
          text-sm
          text-gray-600
        ">

          Don't have an account?

          <a
            href="/register"
            className="
              ml-1
              font-semibold
              text-black
            "
          >
            Create one
          </a>

        </p>



      </div>


    </main>

  );

}
