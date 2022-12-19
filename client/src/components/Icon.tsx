type IconName = "Copy" | "ArrowLeft" | "ShortArrow" | 'EyeClosed' | 'EyeOpened' | 'Close' | 'Magnifier';

interface IconProps {
    name: IconName;
    color?: string;
}

const Icon = ({ name, color = "#0057B6" }: IconProps) => {
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
                            d="M 13.859375 10.699219 L 7.628906 16.972656 C 7.230469 17.375 6.585938 17.375 6.1875 16.980469 C 5.789062 16.582031 5.785156 15.9375 6.179688 15.539062 L 11.695312 9.984375 L 6.140625 4.472656 C 5.742188 4.074219 5.738281 3.429688 6.136719 3.03125 C 6.53125 2.632812 7.175781 2.628906 7.574219 3.027344 L 13.851562 9.257812 C 14.054688 9.457031 14.152344 9.714844 14.152344 9.976562 C 14.15625 10.238281 14.054688 10.496094 13.859375 10.695312 " />
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
        case 'EyeClosed':
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7148 9.94556L17.4969 13.0321" stroke="#B8C1CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.0459 11.6611L12.6017 14.813" stroke="#B8C1CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.94745 11.6597L7.3916 14.8121" stroke="#B8C1CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.28182 9.94312L2.49121 13.0445" stroke="#B8C1CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M2.5 8.19336C3.81348 9.81918 6.22141 11.875 10 11.875C13.7787 11.875 16.1866 9.81919 17.5001 8.19338"
                        stroke="#B8C1CC"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        case 'EyeOpened':
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 4.37451C3.75 4.37451 1.25 10.0001 1.25 10.0001C1.25 10.0001 3.75 15.6245 10 15.6245C16.25 15.6245 18.75 10.0001 18.75 10.0001C18.75 10.0001 16.25 4.37451 10 4.37451Z"
                        stroke="#4587ED"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                        stroke="#4587ED"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        case 'Close':
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 5.5L5.5 14.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.5 14.5L5.5 5.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'Magnifier':
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z"
                        stroke={color}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M13.7021 13.7031L17.4991 17.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
    }
};

export { Icon };
