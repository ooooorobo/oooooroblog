import { Series } from "../types/Series";

export const SeriesMap = new Map<Series["id"], Series>([
  [
    "web-frontend-test",
    { id: "web-frontend-test", title: "프론트엔드 테스트 가이드" },
  ],
  [
    "custom-ssr-server",
    { id: "custom-ssr-server", title: "직접 만들어 보는 SSR 서버" },
  ],
]);
