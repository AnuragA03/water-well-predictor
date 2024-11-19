import './form.css'
export default () => {
  return (
    <div className="card rounded shadow duration-300 p-5 m-5">
      <h1 className="text-center heading-sm mb-6 text-[var(--title-color)]">Contact Us</h1>
      <form action="#" method="post">
        <div className="flex flex-col md:flex-row min-w-[268px] sm:min-w-full mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 rounded-md bg-[var(--input-color)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--primary-1)] ring-1 ring-[var(--text-color)] border-none transition duration-200"
              required />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-md bg-[var(--input-color)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--primary-1)] ring-1 ring-[var(--text-color)] border-none transition duration-200"
              required />
          </div>
        </div>


        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-text-color-light">Message</label>
          <textarea id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 rounded-md bg-[var(--input-color)] shadow focus:outline-none focus:ring-2 focus:ring-[var(--primary-1)] ring-1 ring-[var(--text-color)] border-none transition duration-200 resize-none"
            required>
          </textarea>
        </div>

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}