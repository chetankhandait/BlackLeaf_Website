 
function ProductList() {
  return (
    <div>
      <article className="relative min-h-screen flex flex-col justify-end overflow-hidden rounded-2xl mx-4 bg-gray-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="University of Southern California"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="flex flex-col justify-between h-full p-8">
          <div>
            <h3 className="text-3xl font-bold">Paris</h3>
            <div className="gap-y-1 text-sm leading-6">
              <span>City of love</span>
              <div className="flex mt-2 text-gray-300">
                <div className="mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1l-.298 6.719A2 2 0 0 1 16 19H4a2 2 0 0 1-1.702-2.981L2 11h-.999A2 2 0 0 1 0 9V5a2 2 0 0 1 1-1V1zm5 2V1H5v2h5zM4 6v3h1V6H4zm11-3V3h-4V1h4zM3 9h14v2H3V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>3 beds</span>
                </div>
                <div className="mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1l-.298 6.719A2 2 0 0 1 16 19H4a2 2 0 0 1-1.702-2.981L2 11h-.999A2 2 0 0 1 0 9V5a2 2 0 0 1 1-1V1zm5 2V1H5v2h5zM4 6v3h1V6H4zm11-3V3h-4V1h4zM3 9h14v2H3V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>3 bathrooms</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 1a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1l-.298 6.719A2 2 0 0 1 16 19H4a2 2 0 0 1-1.702-2.981L2 11h-.999A2 2 0 0 1 0 9V5a2 2 0 0 1 1-1V1zm5 2V1H5v2h5zM4 6v3h1V6H4zm11-3V3h-4V1h4zM3 9h14v2H3V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>3200 sq feet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductList;
