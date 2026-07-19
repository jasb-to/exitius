export default function RegisterPage() {

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
          Create your Exitius account
        </h1>


        <p className="
          mt-3
          text-gray-600
        ">
          Start discovering businesses that could become your next acquisition.
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
              Full Name
            </label>


            <input
              className="
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
              "
              placeholder="Your name"
            />

          </div>



          <div>

            <label className="
              text-sm
              font-medium
            ">
              Email
            </label>


            <input
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
              placeholder="Create password"
            />

          </div>



          <div>

            <label className="
              text-sm
              font-medium
            ">
              I am interested in
            </label>


            <select
              className="
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
              "
            >

              <option>
                Buying a business
              </option>

              <option>
                Selling a business
              </option>

              <option>
                Investing
              </option>

              <option>
                Advising buyers
              </option>

            </select>


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

            Create Account

          </button>


        </form>



      </div>


    </main>

  );

}
