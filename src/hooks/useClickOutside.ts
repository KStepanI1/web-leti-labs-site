import React from "react";


function useClickOutside (callback: (ev?: MouseEvent) => any) {
    const ref = React.useRef<any>(null);

    React.useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(event);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [ref]);

    return ref;
}

export { useClickOutside }