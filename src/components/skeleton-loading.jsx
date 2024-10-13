import { Skeleton } from "./ui/skeleton"

export const SkeletonLoading = () => {
  return (
     <section className="h-[80vh] flex flex-col space-y-3">
      <Skeleton className="h-[100px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </section>
  )
}