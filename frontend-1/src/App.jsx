import { Link } from "react-router-dom";
import "./App.css";
import { ContactForm, FeedForm } from "@components";
export const App = () => {
  return (
    <main className="home">
      <section className="min-h-screen p-3 flex flex-col justify-center bg-gradient-to-r from-blue-400 to-green-400">
        <article className="content max-w-5xl mx-auto p-6 rounded-xl shadow-lg">
          <header className="text-center mb-6">
            <h1 className="title text-4xl font-bold mb-4">
              AI Water Well Suitability Predictor
            </h1>
            <p className="description">
              Our tool utilizes state-of-the-art artificial intelligence to
              determine the suitability of establishing a well in your desired
              location. Understand the importance of positioning, the benefits
              of accurate predictions, and make informed decisions to save time
              and resources.
            </p>
          </header>
          <div className="flex gap-4 justify-center mt-8 flex-wrap">
            <Link to="predictor" className="btn text-center">
              Try the Predictor
            </Link>
            <Link to="about" className="btn strip text-center">
              Learn More
            </Link>
          </div>
        </article>
      </section>
      <section className="mb-10 px-5 py-6">
        <h2 className="text-3xl font-bold mb-4">Why Choose H2Home?</h2>
        <p className="leading-relaxed mb-4">
          There are numerous reasons to select H2Home as your premier water well
          predictor. Here's why:
        </p>
        <ul className="list-disc pl-5">
          <li className="leading-relaxed mb-2">
            State-of-the-art AI algorithms ensure accurate predictions.
          </li>
          <li className="leading-relaxed mb-2">
            Extensive database ensuring diverse data points are considered.
          </li>
          <li className="leading-relaxed mb-2">
            Dedicated support and continuous improvements.
          </li>
        </ul>
      </section>
      <section className="mb-10 px-5 py-6">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <div className="flex gap-5">
          <div className="basis-1/2 p-5">
            <FeedForm />
          </div>
          <div className="basis-1/2 p-5">
            <img
              src="/image/waterWell.jpg"
              className="rounded-md aspect-video"
              alt="water well image"
            />
          </div>
        </div>
      </section>
      <section className="mb-10 px-5 py-6">
        <h2 className="heading-md mb-8 text-center">Meet Our Team</h2>
        <div className="flex flex-wrap -m-4">
          <div className="w-full sm:w-1/2 p-4">
            <img
              src="/image/profile-2.jpg"
              alt="Member Name"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              Ameer Wajid Ali
            </h3>
            <p className="text-center">Fullstack Developer</p>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <img
              src="/image/profile-3.jpg"
              alt="Member Name"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              Arjun Kumar Sharma
            </h3>
            <p className="text-center">Fullstack Developer</p>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <img
              src="/image/profile-4.jpg"
              alt="Member Name"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              Anurag Adhikari
            </h3>
            <p className="text-center">Backend & ML Developer</p>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <img
              src="/image/profile-1.jpg"
              alt="Member Name"
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              Anirudh Chauhan
            </h3>
            <p className="text-center">Backend & ML Developer</p>
          </div>
        </div>
      </section>
      <section className="mb-10 px-5 py-6 contact">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

        <p className="leading-relaxed mb-4">
          We're here to help and answer any questions you might have. Reach out
          to us!
        </p>
        <div className="flex gap-5">
          <div className="container basis-1/2 mx-auto w-3/4">
            <ContactForm />
          </div>
          <div className="basis-1/2 self-center">
            <img
              src="/image/waterWell.jpg"
              className="rounded-md aspect-video"
              alt="water well image"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
