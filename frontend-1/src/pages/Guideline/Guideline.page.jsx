import "./Guideline.style.css";
export const Guideline = () => {
  return (
    <section className="guideline container-lg p-6">
      <h1 className="heading-md">Guidelines and Recommendations</h1>
      <h2 className="heading mb-4 mt-16 px-4">Drilling Techniques</h2>
      <div className="flex gap-4 px-4 flex-wrap">
        <div className="p-5 card shadow rounded duration-300">
          <div className="mb-4">
            <img className="images rounded" src="/image/drill1.jpg" />
          </div>
          <div>
            <h2 className="heading-sm">Direct Rotary Drilling</h2>
            <p className="text">
              This method is widely used in India for drilling deep water wells.
              It involves a rotary drill bit that cuts through various
              geological formations to access groundwater. Direct rotary
              drilling is versatile and suitable for a range of subsurface
              conditions.
            </p>
          </div>
        </div>
        <div className="p-3 card shadow rounded duration-300">
          <div className="mb-4">
            <img
              className="images rounded"
              src="/image/drill2.jpg"
              alt="drill"
            />
          </div>
          <div>
            <h2 className="heading-sm">Down The Hole Drilling</h2>
            <p className="text">
              DTH drilling is prevalent in India, especially in regions with
              hard rock formations. It uses a pneumatic or hydraulic hammer to
              drive a drill bit into the subsurface. DTH drilling is effective
              for both shallow and deep water wells and is known for its
              efficiency in hard and abrasive rock.
            </p>
          </div>
        </div>
        <div className="p-3 card shadow rounded duration-300">
          <div className="mb-4">
            <img
              className="images rounded"
              src="/image/drill3.jpg"
              alt="drill"
            />
          </div>
          <div>
            <h2 className="heading-sm">Hand Auger Drilling</h2>
            <p className="text">
              In rural and remote areas of India, hand auger drilling is often
              used for small, shallow water wells. It is a manual method that
              involves turning a helical auger bit by hand to excavate soil and
              reach the water table.
            </p>
          </div>
        </div>
        <div className="p-3 card shadow rounded duration-300">
          <div className="mb-4">
            <img
              className="images rounded"
              src="/image/drill4.jpg"
              alt="drill"
            />
          </div>
          <div>
            <h2 className="heading-sm">Jetting</h2>
            <p className="text">
              Jetting techniques, such as air rotary jetting, may be used in
              India, particularly in areas with sandy or gravelly formations.
              Compressed air or water is used to create a high-velocity stream
              that erodes the subsurface material to form a wellbore.
            </p>
          </div>
        </div>
        <div className="p-3 card shadow rounded duration-300">
          <div className="mb-4">
            <img
              className="images rounded"
              src="/image/drill5.jpg"
              alt="drill"
            />
          </div>
          <div>
            <h2 className="heading-sm">Cable Tool Drilling</h2>
            <p className="text">
              Cable tool drilling is sometimes employed for shallow water wells
              in India, particularly in regions with softer formations. It uses
              a heavy bit on a cable to repeatedly impact and break through the
              subsurface.
            </p>
          </div>
        </div>
      </div>
      <h2 className="heading mb-4 px-4 mt-24">Water Conservation Tips</h2>
      <div className="flex gap-4 px-4 flex-wrap">
        <div className="card1 p-5 shadow rounded duration-300">
          <h3 className="heading-sm">Indoor Water Conservation</h3>
          <ul className="list-disc mx-4">
            <li>
              <strong>Fix Leaks:</strong> Promptly repair any leaks in faucets,
              pipes, or toilets.
            </li>
            <li>
              <strong>Install Low-Flow Fixtures:</strong> Use low-flow
              showerheads, faucets, and toilets to reduce water consumption.
            </li>
            <li>
              <strong>Capture Rainwater:</strong> Install a rain barrel to
              collect rainwater for outdoor use.
            </li>
            <li>
              <strong>Efficient Appliances:</strong> Invest in water-efficient
              appliances, such as ENERGY STAR-rated dishwashers and washing
              machines.
            </li>
          </ul>
        </div>
        <div className="card1 p-5 shadow rounded duration-300">
          <h3 className="heading-sm">Outdoor Water Conservation</h3>
          <ul className="list-disc mx-4">
            <li>
              <strong>Drip Irrigation:</strong> Use drip irrigation systems or
              soaker hoses to water plants more efficiently.
            </li>
            <li>
              <strong>Watering Schedule:</strong> Water your lawn and garden
              during the early morning or late evening to minimize evaporation.
            </li>
            <li>
              <strong>Native Plants:</strong> Choose native and
              drought-resistant plants for landscaping.
            </li>
            <li>
              <strong>Smart Sprinklers:</strong> Install a smart irrigation
              system that adjusts watering based on weather conditions.
            </li>
          </ul>
        </div>
        <div className="card1 p-5 shadow rounded duration-300">
          <h3 className="heading-sm">General Water-Saving Practices</h3>
          <ul className="list-disc mx-4">
            <li>
              <strong> Collect Water:</strong> Collect and reuse water from
              cooking or washing vegetables to water plants.
            </li>
            <li>
              <strong>Insulate Pipes:</strong> Insulate hot water pipes to
              reduce the time it takes for hot water to reach the tap.
            </li>
            <li>
              <strong>Composting:</strong> Use a compost bin for food scraps
              instead of using the garbage disposal.
            </li>
            <li>
              <strong>Educate and Raise Awareness:</strong> Share water
              conservation tips with friends and family to encourage responsible
              water usage.
            </li>
          </ul>
        </div>
        <div className="card1 p-5 shadow rounded duration-300">
          <h3 className="heading-sm">Conservation Around the House</h3>
          <ul className="list-disc mx-4">
            <li>
              <strong> Fixtures Upgrade:</strong> Consider upgrading to
              WaterSense-labeled plumbing fixtures for better water efficiency.
            </li>
            <li>
              <strong>Monitor Bills:</strong> Regularly monitor your water bills
              for any unusual spikes in usage.
            </li>
            <li>
              <strong>Inspect Sprinklers:</strong> Regularly inspect and
              maintain sprinkler systems to ensure they are functioning
              efficiently.
            </li>
            <li>
              <strong>Teach Children:</strong> Educate children about the
              importance of water conservation and involve them in water-saving
              practices.
            </li>
          </ul>
        </div>
      </div>
      <div className="card shadow rounded duration-300 p-5 mt-24">
        <h2 className="heading text-center mb-4 px-4">Safety Precautions</h2>
        <div className="flex gap-8 mx-14">
          <ul className="basis-1/2 list-disc">
            <li>
              Hire experienced, licensed well drilling professionals or
              companies
            </li>
            <li>Conduct a thorough site inspection to identify hazards</li>
            <li>
              Ensure workers wear PPE (hard hats, boots, gloves, safety glasses)
            </li>
            <li>Provide training on equipment use and emergency procedures</li>
            <li>Develop and communicate an emergency response plan</li>
            <li>Maintain a well-equipped first-aid kit on-site</li>
            <li>Regularly inspect and maintain drilling equipment</li>
            <li>Prevent harmful gas buildup in the well during drilling</li>
            <li>Properly secure and barricade the wellhead</li>
          </ul>
          <ul className="basis-1/2 list-disc">
            <li>Display safety signs around the drilling site</li>
            <li>Have fire extinguishers and a fire response plan</li>
            <li>Implement fall protection for elevated work</li>
            <li>Hold regular safety meetings</li>
            <li>Continuously monitor the well during drilling</li>
            <li>Follow environmental regulations</li>
            <li>Train in safe handling of drilling materials and chemicals</li>
            <li>Maintain clear communication channels on-site</li>
            <li>Plan for proper well abandonment procedures</li>
            <li>Adhere to local safety regulations and permits.</li>
            <li>Use safe casing materials and proper installation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
