import { useEffect } from "react";

const useTitle = (pagetitle) => {
    useEffect(() => {
        document.title = `${pagetitle}/Cinematic`
    }, [pagetitle])
}
export default useTitle