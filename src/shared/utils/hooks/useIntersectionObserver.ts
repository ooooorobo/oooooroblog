import { RefObject, useEffect, useState } from "react";
import { isWindow } from "@src/shared/utils/windowUtil";

export default function useIntersectionObserver(
  elementRef: RefObject<Element>,
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting;

  useEffect(() => {
    if (!isWindow() || !IntersectionObserver || !elementRef.current || frozen)
      return;

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, frozen]);

  return entry;
}
