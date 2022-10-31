type IconName = "Copy" | "ArrowLeft" | "ShortArrow";

interface IconProps {
    name: IconName;
    color?: string;
}

const Icon = ({name, color = "#0057B6"}: IconProps) => {
    switch (name) {
        case "ArrowLeft":
            return (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20.25 12H3.75M3.75 12L10.5 18.75M3.75 12L10.5 5.25"
                        stroke={color}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case 'ShortArrow':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
                    <g id="surface1">
                        <path fill={color}
                              d="M 13.859375 10.699219 L 7.628906 16.972656 C 7.230469 17.375 6.585938 17.375 6.1875 16.980469 C 5.789062 16.582031 5.785156 15.9375 6.179688 15.539062 L 11.695312 9.984375 L 6.140625 4.472656 C 5.742188 4.074219 5.738281 3.429688 6.136719 3.03125 C 6.53125 2.632812 7.175781 2.628906 7.574219 3.027344 L 13.851562 9.257812 C 14.054688 9.457031 14.152344 9.714844 14.152344 9.976562 C 14.15625 10.238281 14.054688 10.496094 13.859375 10.695312 "/>
                    </g>
                </svg>)
        case "Copy":
            return (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.125 13.124H16.875V3.12402H6.875V6.87402"
                        stroke={color}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.125 6.875H3.125V16.875H13.125V6.875Z"
                        stroke={color}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
    }
};

export {Icon};
