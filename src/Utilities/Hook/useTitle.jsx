import { useEffect } from "react";
const useTitle = (title) =>
  useEffect(() => {
    document.title = `ই-বুক//সেলফ/${title}`;
  }, [title]);

export default useTitle;
