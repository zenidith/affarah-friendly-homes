import { Skeleton } from '@/components/ui/skeleton';

const PageLoader = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-4">
        <Skeleton className="h-12 w-1/4" />
        <Skeleton className="h-8 w-1/2" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="pt-4">
            <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
