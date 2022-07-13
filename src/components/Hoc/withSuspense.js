import { Suspense } from "react";
import Preloader from "../common/preloader/preloader";

export const withSuspense = (Component) => {
  return (
    <Suspense fallback={<Preloader />}>
      <Component />
    </Suspense>
  );
};
