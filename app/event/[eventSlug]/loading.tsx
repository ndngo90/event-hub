export default function loading() {
  return (
    <>
      <div className="h-56 flex flex-col items-center justify-center">
        <div className="h-16 w-1/3 m-auto bg-gray-700 animate-pulse rounded-lg"></div>
      </div>
      <div className="h-56 py-24 space-y-8">
        <div className="h-16 w-1/3 mx-auto bg-gray-700  animate-pulse rounded-lg"></div>
        <div className="h-20 max-w-4xl w-2/3 mx-auto bg-gray-700 animate-pulse rounded-lg"></div>
        <div className="h-8 w-1/3 mx-auto bg-gray-700 animate-pulse rounded-lg"></div>
        <div className="h-8 w-1/3 mx-auto bg-gray-700 animate-pulse rounded-lg"></div>
      </div>
    </>
  );
}
