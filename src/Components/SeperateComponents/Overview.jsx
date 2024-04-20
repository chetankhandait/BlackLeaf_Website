function Overview() {
  return (
    <div
      className="w-full sm:  overflow-hidden bg-gray-900 shadow sm:rounded-lg p-1 sm:m-4 "
      id="overview"
    >
      {/* <div className="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg flex flex-col space-y-4"></div> */}
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-white">
          User database
        </h3>
        <p className="max-w-2xl mt-1 text-sm text-white">
          Details and informations about user.
        </p>
      </div>
      <div className="border-t border-gray-200 p-4">
        <dl>
          <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-white"> City</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              Zirkapur
            </dd>
          </div>
          <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-white">State</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              Punjab
            </dd>
          </div>
          <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-white">Zip/Postal Code</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              140306
            </dd>
          </div>
          <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-white">Country</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              India
            </dd>
          </div>
          <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-white">Area/Location</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              Patiala Road, Zirakpur
            </dd>
          </div>
          <div className="px-4 py-5 bg-gray-800 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-lg font-medium text-white">Address</dt>
            <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
              Trishla City High Ground Road, Patiala Rd, Zirakpur, Punjab 140603
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Overview;
