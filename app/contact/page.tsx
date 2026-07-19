export default function ContactPage() {

  return (

    <main className="
      max-w-5xl
      mx-auto
      px-6
      py-12
    ">

      <h1 className="
        text-4xl
        font-bold
      ">
        Contact Exitius
      </h1>


      <p className="
        mt-4
        text-gray-600
        text-lg
      ">
        Interested in acquiring a business, partnering with Exitius,
        or discussing your company's future?
      </p>



      <div className="
        mt-10
        grid
        md:grid-cols-2
        gap-8
      ">


        <div className="
          rounded-2xl
          border
          p-8
        ">

          <h2 className="
            text-xl
            font-bold
          ">
            Get in touch
          </h2>


          <div className="
            mt-5
            space-y-4
            text-gray-600
          ">

            <p>
              Email
            </p>

            <p className="
              font-semibold
              text-black
            ">
              hello@exitius.com
            </p>


            <p className="pt-4">
              We typically respond within 1-2 business days.
            </p>


          </div>

        </div>



        <form className="
          rounded-2xl
          border
          p-8
          space-y-5
        ">


          <div>

            <label className="
              text-sm
              font-medium
            ">
              Name
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
              Message
            </label>


            <textarea
              className="
                mt-2
                w-full
                rounded-lg
                border
                px-4
                py-3
                h-32
              "
              placeholder="How can we help?"
            />

          </div>



          <button
            type="submit"
            className="
              w-full
              rounded-lg
              bg-black
              px-5
              py-3
              text-white
            "
          >
            Send Message
          </button>


        </form>


      </div>


    </main>

  );

}
