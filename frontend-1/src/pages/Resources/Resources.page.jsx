export const Resources = () => {
  return (
    <div className="bg-primary-lighter">
      <div className="container mx-auto p-4 bg-container-color">
        <h1 className="text-3xl font-bold text-title-color mb-4">
          Water Well Predictor Documentation
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-title-color mb-2">
            User Guide
          </h2>
          <p className="text-text-color mb-4">
            Follow these steps to effectively use the Water Well Predictor tool:
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-title-color">
              Step 1: Registration and Login
            </h3>
            <p className="text-text-color">
              Explain how users can create an account or log in if they already
              have one.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-title-color">
              Step 2: Input Data
            </h3>
            <p className="text-text-color">
              Describe what kind of data users need to input, such as geological
              information, location, and historical data.
            </p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-title-color mb-2">
            Technical Documentation
          </h2>
          <p className="text-text-color mb-4">
            For those interested in the modeling process:
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-title-color mb-2">
            External Links
          </h2>
          <p className="text-text-color mb-4">
            Explore these resources, research papers, and other platforms for
            more information:
          </p>
        </section>
      </div>
    </div>
  );
};
