export function Skeleton() {
  return (
    <div className="space-y-4">
      <div className="w-56 h-10 bg-slate-600 animate-pulse rounded-lg"></div>
      <div className="w-32 h-6 bg-slate-600 animate-pulse rounded-lg mb-4"></div>
      <div className="w-24 h-4 bg-slate-600 animate-pulse rounded-lg mb-4"></div>
      <div className="w-24 h-6 bg-slate-600 animate-pulse rounded-lg mb-4"></div>
    </div>
  );
}

export function EventsListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
