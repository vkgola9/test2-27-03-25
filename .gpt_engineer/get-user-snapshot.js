import { toPng } from "html-to-image";

export const loadGetUserSnapshotEventListener = () => {
  window.addEventListener("blur", () => {
    toPng(document.body).then((url) => {
      window.top.postMessage({ type: "USER_SNAPSHOT", snapshot: url }, "http://localhost:9080");
    });
  });
};
