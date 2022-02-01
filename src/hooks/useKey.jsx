import { useEffect, useRef } from "react";


const useKey = (key,cb) => {
    const callBackRef = useRef(cb);
    useEffect(() => {
        callBackRef.current = cb
    })

    useEffect(() => {

        function handle(e) {
            if (e.code === key) {
                callBackRef.current(e)
            }

        }

        document.addEventListener("keypress", handle)
        return () => {
            document.removeEventListener("keypress",handle)
        }
    }, [key])
    
}

export default useKey