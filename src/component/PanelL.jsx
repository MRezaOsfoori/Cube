import { Link } from "react-router-dom";

const PanelL = (props) => {
    return (
        <>
            <div className="panelL absolute top-0 left-0 w-4/5 rounded-sm ml-auto max-md:left-[10%]" >
                <div className="flex justify-around items-center border-b-2 border-white/10 ">
                    <div className=" flex items-center gap-x-2 mx-auto md:mx-0">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_59_17)">
                                <path
                                    d="M14 18H10C8.897 18 8 17.103 8 16V12C8 10.897 8.897 10 10 10H14C15.103 10 16 10.897 16 12V16C16 17.103 15.103 18 14 18ZM10 12V16H14.002L14 12H10ZM19 24H5C2.243 24 0 21.757 0 19V9.724C0 8.059 0.824 6.509 2.204 5.579L9.203 0.854999C10.902 -0.291001 13.098 -0.291001 14.797 0.854999L21.797 5.579C23.176 6.509 24 8.058 24 9.724V19C24 21.757 21.757 24 19 24ZM12 1.997C11.416 1.997 10.832 2.169 10.322 2.514L3.322 7.237C2.494 7.795 2 8.724 2 9.723V18.999C2 20.653 3.346 21.999 5 21.999H19C20.654 21.999 22 20.653 22 18.999V9.724C22 8.725 21.506 7.795 20.679 7.238L13.678 2.514C13.168 2.169 12.584 1.997 12 1.997Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_59_17">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="h-16 md:w-full text-center text-white leading-normal not-italic mb-0 md:text-sm  font-bold content-center grid">

                            {props.header}
                        </p>
                    </div>
                    <div className="p-2">
                        <svg onClick={() => {
                        }} className="w-6 h-6 pr-auto md:hidden ml-8 " id="callbacksvg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_178_1354)">
                                <path d="M23 24C22.7348 24 22.4804 23.8946 22.2929 23.7071C22.1054 23.5196 22 23.2652 22 23C21.9984 21.4092 21.3658 19.884 20.2409 18.7591C19.116 17.6342 17.5908 17.0016 16 17H10.17V18.586C10.1699 18.9815 10.0526 19.3681 9.83282 19.6969C9.61305 20.0257 9.30073 20.282 8.93533 20.4334C8.56993 20.5847 8.16786 20.6243 7.77995 20.5472C7.39205 20.47 7.03572 20.2796 6.75602 20L0.877017 14.121C0.314603 13.5584 -0.00134277 12.7955 -0.00134277 12C-0.00134277 11.2045 0.314603 10.4416 0.877017 9.879L6.75602 4C7.03572 3.72038 7.39205 3.52997 7.77995 3.45284C8.16786 3.3757 8.56993 3.41531 8.93533 3.56665C9.30073 3.71799 9.61305 3.97427 9.83282 4.30309C10.0526 4.63191 10.1699 5.0185 10.17 5.414V7H15C17.3862 7.00265 19.6738 7.95171 21.3611 9.63897C23.0483 11.3262 23.9974 13.6139 24 16V23C24 23.2652 23.8947 23.5196 23.7071 23.7071C23.5196 23.8946 23.2652 24 23 24ZM8.17002 5.414L2.29102 11.293C2.10355 11.4805 1.99823 11.7348 1.99823 12C1.99823 12.2652 2.10355 12.5195 2.29102 12.707L8.17002 18.586V16C8.17002 15.7348 8.27537 15.4804 8.46291 15.2929C8.65045 15.1054 8.9048 15 9.17002 15H16C17.1356 14.9997 18.2582 15.2416 19.2929 15.7096C20.3275 16.1776 21.2505 16.8609 22 17.714V16C21.9979 14.1441 21.2597 12.3649 19.9474 11.0526C18.6351 9.7403 16.8559 9.00212 15 9H9.17002C8.9048 9 8.65045 8.89465 8.46291 8.70711C8.27537 8.51957 8.17002 8.26522 8.17002 8V5.414Z" fill="white" fill-opacity="0.75" />
                            </g>
                            <defs>
                                <clipPath id="clip0_178_1354">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>


                <ul className="text-start text-white content-center grid pl-0 mt-4">
                    {(props.items.map((list, key) => {
                        return (

                            (<li className="pb-825">
                                <div className="flex items-center justify-start lg:mr-8">
                                    <div>
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_137_93)">
                                                <path d="M13.6847 2.81131L9.66668 0.491305C9.15962 0.19972 8.58494 0.0462646 8.00002 0.0462646C7.41509 0.0462646 6.84041 0.19972 6.33335 0.491305L2.31535 2.81131C1.80926 3.10458 1.389 3.52552 1.09653 4.03207C0.804064 4.53862 0.649639 5.11305 0.648682 5.69797V10.338C0.649657 10.923 0.804083 11.4975 1.09654 12.0041C1.389 12.5108 1.80926 12.9319 2.31535 13.2253L6.33335 15.5446C6.84034 15.8364 7.41505 15.99 8.00002 15.99C8.58498 15.99 9.15969 15.8364 9.66668 15.5446L13.6847 13.2253C14.1908 12.9319 14.611 12.5108 14.9035 12.0041C15.1959 11.4975 15.3504 10.923 15.3513 10.338V5.69797C15.3504 5.11305 15.196 4.53862 14.9035 4.03207C14.611 3.52552 14.1908 3.10458 13.6847 2.81131ZM7.00002 1.64664C7.30405 1.4711 7.64894 1.37869 8.00002 1.37869C8.35109 1.37869 8.69598 1.4711 9.00002 1.64664L13.018 3.96597C13.1199 4.03037 13.2156 4.10402 13.304 4.18597L9.17535 6.56931C8.81791 6.77536 8.41259 6.88382 8.00002 6.88382C7.58744 6.88382 7.18212 6.77536 6.82468 6.56931L2.69602 4.18597C2.78439 4.10402 2.88013 4.03037 2.98202 3.96597L7.00002 1.64664ZM2.98202 12.07C2.67815 11.8939 2.42585 11.6411 2.25036 11.337C2.07486 11.0328 1.98233 10.6878 1.98202 10.3366V5.69797C1.98664 5.57787 2.00249 5.45846 2.02935 5.34131L6.15802 7.72464C6.52264 7.93205 6.92021 8.07525 7.33335 8.14797V14.5273C7.21819 14.492 7.10659 14.4461 7.00002 14.39L2.98202 12.07ZM14.018 10.3366C14.0177 10.6878 13.9252 11.0328 13.7497 11.337C13.5742 11.6411 13.3219 11.8939 13.018 12.07L9.00002 14.39C8.89344 14.4461 8.78184 14.492 8.66668 14.5273V8.14797C9.07982 8.07525 9.47739 7.93205 9.84202 7.72464L13.9707 5.34131C13.9975 5.45846 14.0134 5.57787 14.018 5.69797V10.3366Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_137_93">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>

                                    <Link to={"/LoginPage/SignUp"} style={{ textDecoration: "none" }}>
                                        <p className="md:text-sm lg:text-base text-right mb-0 text-white">{list}
                                        </p>
                                    </Link>
                                </div>
                            </li>))
                    }))}

                </ul>

            </div>





        </>
    )

}
export default PanelL 