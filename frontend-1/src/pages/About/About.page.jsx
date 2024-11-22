export const About = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Project Background</h2>
          <p className="leading-relaxed">
            Addressing the looming challenges of water scarcity and management
            requires innovative solutions. For communities and individuals,
            pinpointing the most viable locations for water wells, factoring in
            diverse considerations like lithology, water levels, and quality,
            presents an intricate puzzle. Realizing the gravity of this
            challenge, our team delved deep into crafting an intelligent answer.
          </p>
          <p className="leading-relaxed">
            Thus, we introduced the AI-enabled water well predictor, designed
            within the framework of the Smart India Hackathon. By leveraging
            comprehensive NAQUIM data, our web-based system empowers users,
            offering insights such as the site's suitability for water well
            construction, depth predictions for water-bearing zones, anticipated
            well discharge rates, region-specific drilling techniques, and
            forecasts on groundwater quality. This not only demystifies the
            decision-making process for well construction but also promotes
            sustainable water resource management, marking our significant
            stride in the realm of Clean & Green Technology.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Team</h2>
          <div className="flex space-x-4">
            <ul className="w-1/2 space-y-4">
              <li className="flex items-start">
                <img
                  src="/image/profile-1.jpg"
                  alt="profile-1"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-xl">Arya kumari</h3>
                  <p className="text-gray-600">Fullstack Developer (Leader)</p>
                </div>
              </li>
              <li className="flex items-start">
                <img
                  src="/image/profile-2.jpg"
                  alt="profile-2"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-xl">Ameer Wajid Ali</h3>
                  <p className="text-gray-600">Fullstack Developer</p>
                </div>
              </li>
              <li className="flex items-start">
                <img
                  src="/image/profile-3.jpg"
                  alt="profile-3"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-xl">Arjun kumar Sharma</h3>
                  <p className="text-gray-600">Frontend Developer</p>
                </div>
              </li>
            </ul>
            <ul className="w-1/2 space-y-4">
              <li className="flex items-start">
                <img
                  src="/image/profile-4.jpg"
                  alt="profile-4"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-xl">Anurag Adhikari</h3>
                  <p className="text-gray-600">Frontend Developer</p>
                </div>
              </li>
              <li className="flex items-start">
                <img
                  src="/image/profile-5.jpg"
                  alt="profile-5"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-xl">Divyansh Karakoti</h3>
                  <p className="text-gray-600">Frontend Developer</p>
                </div>
              </li>
              <li className="flex items-start">
                <img
                  src="/image/profile-6.jpg"
                  alt="profile-6"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-xl">Aarav Bamba</h3>
                  <p className="text-gray-600">AI/ML Developer</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Partners & Collaborators</h2>
          <p className="leading-relaxed">
            In our endeavor to revolutionize water management solutions,
            collaboration has been the cornerstone. We've been privileged to
            work alongside renowned experts, researchers, and organizations that
            share our vision.
          </p>
          <p className="leading-relaxed">
            Their vast expertise, resources, and unwavering support have been
            instrumental in refining our AI-enabled water well predictor. By
            harnessing collective intelligence and fostering interdisciplinary
            collaboration, we've ensured that our solution is robust,
            innovative, and poised to make a lasting impact. A special
            acknowledgment goes to [Mentor Name], [Mentor Name], and all those
            who've been part of this transformative journey.
          </p>
        </section>
      </div>
    </div>
  );
};
