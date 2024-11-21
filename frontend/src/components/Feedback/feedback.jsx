import "./feedback.css";
export default () => {
  return (
    <form>
      <div className="mb-2">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          id="name"
          className="w-full p-2 rounded-md bg-[var(--input-color)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--primary-1)] ring-1 ring-[var(--text-color)] border-none transition duration-200"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col md:flex-row min-w-[268px] sm:min-w-full mb-2 space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex-1">
          <label htmlFor="phone" className="block mb-2">
            Phone
          </label>
          <input
            id="phone"
            className="w-full p-2 rounded-md bg-[var(--input-color)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--primary-1)] ring-1 ring-[var(--text-color)] border-none transition duration-200 resize-none"
            type="text"
            required
          />
        </div>

        <div className="flex-1">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            id="email"
            className="w-full p-2 rounded-md bg-[var(--input-color)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--primary-1)] ring-1 ring-[var(--text-color)] border-none transition duration-200 resize-none"
            type="email"
            required
          />
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="message" className="block mb-2">
          Feedback
        </label>
        <textarea
          id="message"
          className="w-full p-2 rounded-md bg-[var(--input-color)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--primary-1)] ring-1 ring-[var(--text-color)] border-none transition duration-200 resize-none"
          type="text"
        />
      </div>
      <div className="flex items-center">
        <button className="cta mx-auto">
          <span>Send Feedback</span>
        </button>
      </div>
    </form>
  );
};
