import { RefObject, useEffect, useState } from "react";
import { isWindow } from "@src/utils/windowUtil";

export default function useIntersectionObserver(
  elementRef: RefObject<Element>
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [isIntersected, setIntersected] = useState(false);

  const frozen = entry?.isIntersecting;

  useEffect(() => {
    if (!isWindow() || !IntersectionObserver || !elementRef.current || frozen)
      return;

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return entry;
}
