import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurServices() {
    useEffect(() => {
        AOS.init({
            offset: -300,
            duration: 600,
        });
    }, []);

    return (
        <div className="w-full bg-primary/10 rounded-xl flex flex-col items-center relative">
            <h2 className="text-4xl font-semibold py-4">Our Services</h2>
            <div className="w-full flex flex-col md:flex-row gap-3 p-4 pb-12">
                <div data-aos="slide-up" className="flex flex-col items-center">
                    <svg
                        className="fill-primary dark:fill-white w-20 h-20"
                        width="800px"
                        height="800px"
                        viewBox="0 0 512 512"
                        version="1.1"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g id="_x33_82_x2C__economy_x2C__finance_x2C__money_x2C__information_x2C__reports">
                                {" "}
                                <g>
                                    {" "}
                                    <path d="M87.382,302.592v-8.434c-2.618-0.747-4.544-1.884-5.755-3.408 c-1.229-1.525-1.856-3.351-1.856-5.533c0-2.213,0.706-4.066,2.095-5.563c1.375-1.495,3.229-2.362,5.517-2.57v-2.004h2.931v2.004 c2.137,0.238,3.857,0.985,5.131,2.182c1.253,1.196,2.078,2.812,2.421,4.815l-5.113,0.687c-0.316-1.584-1.137-2.66-2.439-3.229 v7.864c3.246,0.868,5.457,2.004,6.626,3.38c1.165,1.405,1.762,3.17,1.762,5.353c0,2.423-0.748,4.486-2.211,6.13 c-1.495,1.676-3.544,2.692-6.177,3.111v3.768h-2.931v-3.707c-2.316-0.301-4.201-1.138-5.636-2.573 c-1.467-1.435-2.379-3.499-2.783-6.101l5.236-0.628c0.207,1.077,0.628,2.003,1.225,2.781 C86.007,301.694,86.649,302.232,87.382,302.592 M141.794,327.921h-36.513h-0.105H89.46H45.679v25.749h43.483h0.091h52.541V327.921 z M145.563,360.996h-0.091h-0.102H92.931v25.748h76.062h0.105h0.091h19.857v-25.748H145.563z M381.496,288.537h-10.841v84.51 h10.841V288.537z M346.089,315.81h-10.841v57.237h10.841V315.81z M310.682,249.779h-10.841v123.268h10.841V249.779z M275.274,294.278h-10.841v78.769h10.841V294.278z M239.867,322.509h-10.841v50.538h10.841V322.509z M366.978,281.18h18.183 c2.035,0,3.678,1.645,3.678,3.679v91.868c0,2.004-1.643,3.678-3.678,3.678h-18.183c-2.019,0-3.679-1.674-3.679-3.678v-91.868 C363.299,282.824,364.959,281.18,366.978,281.18z M331.57,308.453h18.183c2.035,0,3.678,1.645,3.678,3.678v64.596 c0,2.004-1.643,3.678-3.678,3.678H331.57c-2.018,0-3.678-1.674-3.678-3.678v-64.596 C327.893,310.098,329.553,308.453,331.57,308.453z M296.162,242.424h18.184c2.035,0,3.678,1.645,3.678,3.678v130.625 c0,2.004-1.643,3.678-3.678,3.678h-18.184c-2.018,0-3.678-1.674-3.678-3.678V246.102 C292.484,244.068,294.145,242.424,296.162,242.424z M260.755,286.922h18.183c2.036,0,3.679,1.645,3.679,3.678v86.127 c0,2.004-1.643,3.678-3.679,3.678h-18.183c-2.018,0-3.678-1.674-3.678-3.678V290.6 C257.077,288.566,258.737,286.922,260.755,286.922z M225.348,315.152h18.183c2.036,0,3.678,1.645,3.678,3.678v57.896 c0,2.004-1.642,3.678-3.678,3.678h-18.183c-2.018,0-3.678-1.674-3.678-3.678V318.83 C221.67,316.797,223.33,315.152,225.348,315.152z M105.176,89.788h0.105h218.8V67.479h-218.8h-0.105H78.784v22.309H105.176z M90.313,302.92c1.004-0.209,1.839-0.688,2.467-1.436c0.642-0.747,0.958-1.613,0.958-2.631c0-0.897-0.27-1.675-0.807-2.333 c-0.523-0.628-1.407-1.136-2.618-1.495V302.92z M87.382,281.449c-0.793,0.269-1.421,0.748-1.87,1.405 c-0.463,0.628-0.685,1.347-0.685,2.124c0,0.717,0.207,1.375,0.625,1.974c0.421,0.597,1.063,1.105,1.93,1.495V281.449z M140.18,119.154c-2.018,0-3.678-1.644-3.678-3.678c0-2.033,1.66-3.678,3.678-3.678h118.199c2.019,0,3.664,1.645,3.664,3.678 c0,2.034-1.646,3.678-3.664,3.678H140.18z M140.18,138.295c-2.018,0-3.678-1.645-3.678-3.679s1.66-3.679,3.678-3.679h174.66 c2.019,0,3.664,1.645,3.664,3.679s-1.646,3.679-3.664,3.679H140.18z M140.18,157.404c-2.018,0-3.678-1.646-3.678-3.649 c0-2.034,1.66-3.679,3.678-3.679h246.91c2.019,0,3.679,1.645,3.679,3.679c0,2.003-1.66,3.649-3.679,3.649H140.18z M140.18,176.543 c-2.018,0-3.678-1.646-3.678-3.679c0-2.003,1.66-3.649,3.678-3.649h246.91c2.019,0,3.679,1.646,3.679,3.649 c0,2.032-1.66,3.679-3.679,3.679H140.18z M140.18,195.682c-2.018,0-3.678-1.645-3.678-3.678c0-2.004,1.66-3.68,3.678-3.68h246.91 c2.019,0,3.679,1.676,3.679,3.68c0,2.033-1.66,3.678-3.679,3.678H140.18z M140.18,214.821c-2.018,0-3.678-1.646-3.678-3.679 s1.66-3.678,3.678-3.678h246.91c2.019,0,3.679,1.645,3.679,3.678s-1.66,3.679-3.679,3.679H140.18z M110.514,368.023 c0-2.033,1.646-3.678,3.678-3.678c2.036,0,3.678,1.645,3.678,3.678v11.723c0,2.004-1.643,3.648-3.678,3.648 c-2.032,0-3.678-1.645-3.678-3.648V368.023z M128.458,368.023c0-2.033,1.643-3.678,3.678-3.678c2.032,0,3.678,1.645,3.678,3.678 v11.723c0,2.004-1.646,3.648-3.678,3.648c-2.036,0-3.678-1.645-3.678-3.648V368.023z M146.402,368.023 c0-2.033,1.643-3.678,3.678-3.678c2.018,0,3.678,1.645,3.678,3.678v11.723c0,2.004-1.66,3.648-3.678,3.648 c-2.035,0-3.678-1.645-3.678-3.648V368.023z M164.342,368.023c0-2.033,1.646-3.678,3.678-3.678c2.035,0,3.678,1.645,3.678,3.678 v11.723c0,2.004-1.643,3.648-3.678,3.648c-2.032,0-3.678-1.645-3.678-3.648V368.023z M86.965,401.099 c0-2.034,1.643-3.679,3.678-3.679c2.018,0,3.664,1.645,3.664,3.679v11.723c0,2.033-1.646,3.679-3.664,3.679 c-2.036,0-3.678-1.646-3.678-3.679V401.099z M104.905,401.099c0-2.034,1.646-3.679,3.682-3.679c2.018,0,3.661,1.645,3.661,3.679 v11.723c0,2.033-1.643,3.679-3.661,3.679c-2.036,0-3.682-1.646-3.682-3.679V401.099z M122.85,401.099 c0-2.034,1.646-3.679,3.678-3.679c2.018,0,3.664,1.645,3.664,3.679v11.723c0,2.033-1.646,3.679-3.664,3.679 c-2.032,0-3.678-1.646-3.678-3.679V401.099z M140.793,401.099c0-2.034,1.643-3.679,3.664-3.679c2.032,0,3.678,1.645,3.678,3.679 v11.723c0,2.033-1.646,3.679-3.678,3.679c-2.021,0-3.664-1.646-3.664-3.679V401.099z M63.953,334.919 c0-2.003,1.643-3.649,3.678-3.649c2.032,0,3.678,1.646,3.678,3.649v11.723c0,2.034-1.646,3.678-3.678,3.678 c-2.035,0-3.678-1.644-3.678-3.678V334.919z M81.894,334.919c0-2.003,1.646-3.649,3.682-3.649c2.032,0,3.678,1.646,3.678,3.649 v11.723c0,2.034-1.646,3.678-3.678,3.678c-2.036,0-3.682-1.644-3.682-3.678V334.919z M99.838,334.919 c0-2.003,1.646-3.649,3.678-3.649c2.036,0,3.678,1.646,3.678,3.649v11.723c0,2.034-1.643,3.678-3.678,3.678 c-2.032,0-3.678-1.644-3.678-3.678V334.919z M117.782,334.919c0-2.003,1.643-3.649,3.678-3.649c2.032,0,3.678,1.646,3.678,3.649 v11.723c0,2.034-1.646,3.678-3.678,3.678c-2.036,0-3.678-1.644-3.678-3.678V334.919z M220.147,395.357 c-2.036,0-3.678-1.646-3.678-3.678c0-2.034,1.643-3.68,3.678-3.68h175.121c2.035,0,3.678,1.646,3.678,3.68 c0,2.032-1.643,3.678-3.678,3.678H220.147z M466.04,301.845c0,2.032-1.646,3.678-3.664,3.678c-2.035,0-3.678-1.646-3.678-3.678 V64.997h-79.206l58.841,58.823v295.999H172.762v-25.719h19.962c2.018,0,3.664-1.674,3.664-3.678v-33.075 c0-2.034-1.646-3.678-3.664-3.678H149.15v-29.427c0-2.004-1.657-3.649-3.678-3.649h-34.719c1.077-0.867,2.095-1.764,3.081-2.751 c4.577-4.575,7.865-10.437,9.286-16.986l0.014-0.089c0.193-0.896,0.358-1.824,0.478-2.752l0.031-0.148v-0.12l0.028-0.269 l0.018-0.03l0.014-0.27L123.73,297v-0.09l0.032-0.3l0.014-0.03l0.018-0.238l0.028-0.209v-0.09l0.014-0.27l0.018-0.061v-0.208 l0.014-0.239v-0.061l0.014-0.299v-0.09l0.014-0.18v-0.27l0.018-0.029v-0.269v-0.12v-0.18v-0.269v-0.3v-0.149v-0.149v-0.269 l-0.018-0.03v-0.27l-0.014-0.18v-0.089l-0.014-0.3v-0.059l-0.014-0.21v-0.209l-0.018-0.089l-0.014-0.271v-0.089l-0.028-0.209 l-0.018-0.239l-0.014-0.029l-0.032-0.3v-0.09l-0.028-0.179l-0.014-0.271h-0.018l-0.028-0.298v-0.119l-0.031-0.15 c-0.12-0.928-0.285-1.854-0.478-2.75l-0.014-0.091c-1.421-6.55-4.709-12.411-9.286-16.986c-1.495-1.495-3.141-2.841-4.875-4.036 V97.145h218.785c2.033,0,3.679-1.674,3.679-3.678V63.801c0-2.033-1.646-3.678-3.679-3.678H108.959V37.814l243.366,0.029 l19.856,19.827h90.194c2.019,0,3.664,1.645,3.664,3.679V301.845z M361.355,435.967c2.021,0,3.664,1.646,3.664,3.68 c0,2.032-1.643,3.679-3.664,3.679H88.772c-2.018,0-3.678-1.646-3.678-3.679l0.298-19.827H69.305v-25.719h19.857h0.091h76.167 v25.719H92.752l-0.302,16.147H361.355z M454.81,358.484c0-2.033,1.66-3.679,3.678-3.679c2.032,0,3.679,1.646,3.679,3.679v81.162 c0,2.032-1.646,3.679-3.679,3.679h-56.461c-2.032,0-3.678-1.646-3.678-3.679c0-2.034,1.646-3.68,3.678-3.68h52.783V358.484z M52.273,459.353c-2.018,0-3.678-1.644-3.678-3.678s1.66-3.678,3.678-3.678h307.018c2.036,0,3.682,1.644,3.682,3.678 s-1.646,3.678-3.682,3.678H52.273z M221.551,474.186c-2.032,0-3.678-1.645-3.678-3.678c0-2.034,1.646-3.678,3.678-3.678h212.476 c2.019,0,3.664,1.644,3.664,3.678c0,2.033-1.646,3.678-3.664,3.678H221.551z M455.768,474.186c-2.035,0-3.682-1.645-3.682-3.678 c0-2.034,1.646-3.678,3.682-3.678h26.553c2.036,0,3.679,1.644,3.679,3.678c0,2.033-1.643,3.678-3.679,3.678H455.768z M29.683,473.707c-2.035,0-3.681-1.645-3.681-3.678c0-2.004,1.646-3.679,3.681-3.679h100.66c2.032,0,3.678,1.675,3.678,3.679 c0,2.033-1.646,3.678-3.678,3.678H29.683z M109.826,274.332c-4.889-4.904-11.662-7.925-19.137-7.925 c-7.493,0-14.266,3.021-19.169,7.925c-4.906,4.904-7.924,11.662-7.924,19.169c0,7.476,3.018,14.234,7.924,19.139 c4.903,4.905,11.676,7.954,19.169,7.954c5.054,0,9.777-1.405,13.831-3.797l0.042-0.029c1.944-1.168,3.709-2.543,5.264-4.128 c3.664-3.647,6.282-8.344,7.388-13.606v-0.09l0.028-0.119l0.046-0.21l0.119-0.658l0.032-0.209l0.014-0.119l0.031-0.12l0.028-0.21 v-0.03l0.031-0.208l0.014-0.12l0.014-0.089l0.032-0.21v-0.03l0.014-0.209l0.014-0.149v-0.06l0.032-0.239v-0.029l0.014-0.181 l0.014-0.179v-0.029l0.014-0.24l0.018-0.06v-0.149l0.014-0.209v-0.03l0.014-0.239v-0.061v-0.149l0.017-0.209v-0.03v-0.209v-0.119 v-0.121v-0.208v-0.239v-0.119v-0.121v-0.209v-0.029l-0.017-0.209v-0.12v-0.091l-0.014-0.238v-0.029l-0.014-0.18v-0.18l-0.018-0.06 l-0.014-0.21v-0.06l-0.014-0.179l-0.014-0.18v-0.03l-0.032-0.239v-0.06l-0.014-0.149l-0.014-0.18v-0.06l-0.032-0.21l-0.014-0.09 l-0.014-0.119l-0.031-0.209v-0.03l-0.028-0.21l-0.031-0.09l-0.014-0.119l-0.032-0.239l-0.119-0.657l-0.046-0.18l-0.028-0.15v-0.09 C116.108,282.705,113.504,277.98,109.826,274.332z" />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Layer_1" />{" "}
                        </g>
                    </svg>
                    <h3 className="text-lg text-primary dark:text-white font-bold py-2 text-center">
                        Επιδοτούμενα Προγράμματα
                    </h3>
                    <p className="text-center w-full md:w-1/2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nihil nesciunt reiciendis, quas dolorum sint vero
                        non impedit iure praesentium doloremque!
                    </p>
                </div>

                <div
                    data-aos="slide-up"
                    data-aos-delay="100"
                    className="flex flex-col items-center"
                >
                    <svg
                        className="fill-primary dark:fill-white w-20 h-20"
                        width="900px"
                        height="900px"
                        viewBox="0 0 512 512"
                        version="1.1"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g id="B_-_135_x2C__chart_x2C__Analytics_x2C__graphs_x2C__market_x2C__schedule_x2C__time_x2C__trends">
                                {" "}
                                <g>
                                    {" "}
                                    <path d="M160.196,234.708c-1.119-0.89-1.315-2.501-0.427-3.621 c0.888-1.118,2.536-1.316,3.654-0.427l28.04,22.182l24.714-14.548c1.221-0.723,2.799-0.329,3.555,0.923 c0.724,1.216,0.296,2.83-0.954,3.554l-26.166,15.468c-0.888,0.526-2.072,0.461-2.927-0.197L160.196,234.708z M299.244,266.104 h-10.893v43.015h10.893V266.104z M325.705,239.677h-10.896v69.441h10.896V239.677z M352.162,253.992h-10.925v55.126h10.925 V253.992z M378.592,232.108h-10.86v77.01h10.86V232.108z M405.053,216.375h-10.896v92.743h10.896V216.375z M432.168,192.647 h-10.86v116.471h10.86V192.647z M270.02,151.213c0,1.416-1.15,2.6-2.602,2.6c-1.447,0-2.598-1.184-2.598-2.6v-20.898l-7.999-4.608 l-24.418,30.64c-0.724,0.922-2.01,1.219-3.062,0.758c-3.457-1.317-6.975-2.468-10.662-3.457c-3.653-0.954-7.34-1.744-10.991-2.336 c-1.187-0.165-2.01-1.085-2.207-2.172l-5.792-38.734h-16.785l-5.858,38.734c-0.164,1.252-1.183,2.14-2.371,2.206 c-3.65,0.592-7.239,1.35-10.793,2.303c-3.72,0.988-7.271,2.172-10.728,3.489c-1.085,0.428-2.305,0.066-2.997-0.791l-24.418-30.64 l-14.513,8.393l14.348,36.498c0.428,1.119,0.033,2.336-0.888,3.028c-2.897,2.337-5.66,4.838-8.295,7.471 c-2.699,2.698-5.231,5.496-7.537,8.393c-0.724,0.888-1.941,1.183-2.994,0.789L69.364,175.93l-8.36,14.513l30.641,24.419 c0.921,0.758,1.217,2.008,0.756,3.062c-1.315,3.455-2.47,6.977-3.457,10.629c-0.954,3.654-1.743,7.372-2.334,11.026 c-0.165,1.151-1.089,2.008-2.174,2.171l-38.735,5.858v16.783l38.735,5.827c1.217,0.163,2.141,1.183,2.239,2.402 c0.526,3.588,1.316,7.206,2.27,10.795l0.033,0.065c0.954,3.686,2.142,7.24,3.457,10.662c0.428,1.087,0.066,2.304-0.822,2.962 l-30.608,24.42l8.36,14.546l36.498-14.349c1.085-0.427,2.303-0.065,2.994,0.789c2.371,2.931,4.903,5.728,7.537,8.393 c2.668,2.633,5.464,5.167,8.361,7.505c0.92,0.756,1.216,1.975,0.822,2.994L111.227,377.9l14.513,8.393l24.418-30.642 c0.757-0.953,2.043-1.249,3.063-0.789c3.423,1.351,7.008,2.501,10.629,3.457c3.653,0.986,7.374,1.775,11.06,2.336 c1.118,0.165,1.974,1.086,2.138,2.173l5.858,38.734h16.785l5.792-38.734c0.197-1.219,1.216-2.106,2.404-2.205 c3.618-0.562,7.238-1.351,10.826-2.304c3.687-0.988,7.271-2.14,10.728-3.489c1.085-0.428,2.272-0.066,2.963,0.821l24.418,30.642 l7.999-4.641v-20.865c0-1.448,1.15-2.6,2.598-2.6c1.451,0,2.602,1.151,2.602,2.6v22.378c-0.033,0.89-0.46,1.745-1.315,2.238 l-11.224,6.483c-1.119,0.658-2.533,0.395-3.325-0.625l-24.649-30.903c-3.128,1.12-6.285,2.14-9.478,2.996 c-3.128,0.821-6.351,1.546-9.643,2.106l-5.858,38.997c-0.164,1.284-1.249,2.337-2.601,2.337h-21.292 c-1.253,0-2.371-0.921-2.569-2.237l-5.857-39.097c-3.325-0.561-6.548-1.285-9.708-2.106c-3.193-0.856-6.35-1.876-9.445-2.996 l-24.616,30.903c-0.825,0.987-2.206,1.283-3.357,0.625l-18.331-10.598c-1.151-0.592-1.678-1.973-1.184-3.225l14.48-36.827 c-2.569-2.106-5.002-4.344-7.34-6.648c-2.335-2.369-4.575-4.837-6.679-7.339l-36.828,14.482c-1.183,0.428-2.567,0-3.193-1.153 l-10.53-18.265c-0.757-1.118-0.526-2.633,0.526-3.455l30.904-24.618c-1.121-3.126-2.108-6.252-2.963-9.412l-0.033-0.065 c-0.822-3.159-1.546-6.385-2.104-9.676l-38.969-5.856c-1.315-0.132-2.367-1.252-2.367-2.603v-21.293 c0-1.249,0.954-2.369,2.236-2.566l39.1-5.858c0.559-3.325,1.283-6.55,2.104-9.676c0.855-3.226,1.842-6.385,2.996-9.478 l-30.904-24.617c-0.987-0.79-1.283-2.206-0.625-3.324l10.531-18.265c0.592-1.219,2.042-1.778,3.292-1.285l36.828,14.48 c2.138-2.566,4.377-5.035,6.679-7.338c2.338-2.336,4.771-4.575,7.34-6.679l-14.48-36.827c-0.46-1.153,0-2.534,1.118-3.194 l18.397-10.629c1.118-0.625,2.532-0.395,3.357,0.625l24.616,30.935c3.128-1.15,6.285-2.172,9.478-3.027 c3.128-0.822,6.351-1.546,9.676-2.105l5.857-38.999c0.099-1.284,1.25-2.304,2.569-2.304h21.292c1.253,0,2.371,0.921,2.568,2.204 l5.89,39.098c3.292,0.559,6.515,1.284,9.643,2.105c3.193,0.855,6.35,1.877,9.478,3.027l24.649-30.935 c0.759-0.987,2.206-1.25,3.325-0.625l11.023,6.386c0.891,0.395,1.516,1.315,1.516,2.369V151.213z M296.346,326 c-1.447,0-2.598-1.151-2.598-2.6c0-1.416,1.15-2.599,2.598-2.599h110.482c1.446,0,2.602,1.183,2.602,2.599 c0,1.448-1.155,2.6-2.602,2.6H296.346z M347.686,338.473c-1.446,0-2.631-1.184-2.631-2.599c0-1.449,1.185-2.601,2.631-2.601 h98.765c1.417,0,2.602,1.151,2.602,2.601c0,1.415-1.185,2.599-2.602,2.599H347.686z M456.557,338.473 c-1.418,0-2.635-1.184-2.635-2.599c0-1.449,1.217-2.601,2.635-2.601h12.339c1.45,0,2.635,1.151,2.635,2.601 c0,1.415-1.185,2.599-2.635,2.599H456.557z M258.467,338.111c-1.447,0-2.599-1.186-2.599-2.633c0-1.416,1.151-2.6,2.599-2.6 h46.799c1.45,0,2.602,1.184,2.602,2.6c0,1.447-1.151,2.633-2.602,2.633H258.467z M422.854,178.891 c-0.131,1.416-1.381,2.468-2.828,2.336c-1.414-0.098-2.47-1.383-2.338-2.796l0.229-2.929l-37.156,37.155 c-0.986,0.988-2.663,0.988-3.683,0l-7.934-7.964l-30.012,30.015c-1.023,0.987-2.667,0.987-3.688,0l-14.084-14.085l-37.716,37.714 c-1.023,1.02-2.668,1.02-3.688,0s-1.02-2.665,0-3.686l39.558-39.559c1.022-1.02,2.667-1.02,3.686,0l14.086,14.085l30.017-30.013 c1.02-1.021,2.664-1.021,3.684,0l7.933,7.964l36.201-36.168l-4.573-0.165c-1.418-0.065-2.536-1.284-2.503-2.699 c0.066-1.448,1.285-2.567,2.699-2.501l10.268,0.362c0.725-0.033,1.447,0.231,2.006,0.758c0.629,0.625,0.859,1.513,0.694,2.337 L422.854,178.891z M244.118,203.146c-4.016-3.981-8.459-7.503-13.264-10.53l-6.942,12.045c-0.724,1.251-2.305,1.646-3.555,0.954 c-1.217-0.724-1.645-2.304-0.954-3.554l6.942-12.045c-9.708-5.2-20.732-8.294-32.479-8.689v13.888c0,1.448-1.155,2.6-2.569,2.6 c-1.447,0-2.635-1.151-2.635-2.6v-13.888c-11.713,0.395-22.738,3.489-32.479,8.689l6.975,12.045 c0.691,1.25,0.264,2.83-0.954,3.554c-1.25,0.692-2.864,0.297-3.588-0.954l-6.909-12.045c-4.838,3.027-9.249,6.549-13.264,10.53 c-3.983,4.016-7.538,8.458-10.533,13.263l12.046,6.944c1.217,0.724,1.645,2.304,0.955,3.554c-0.724,1.252-2.303,1.679-3.556,0.955 l-12.043-6.977c-5.2,9.741-8.295,20.8-8.689,32.515h13.888c1.414,0,2.602,1.151,2.602,2.6c0,1.416-1.188,2.6-2.602,2.6h-13.888 c0.394,11.717,3.489,22.741,8.689,32.482l12.043-6.977c1.253-0.69,2.832-0.264,3.556,0.954c0.69,1.251,0.263,2.831-0.955,3.555 l-12.046,6.944c2.995,4.837,6.55,9.28,10.533,13.262c4.016,3.982,8.426,7.538,13.264,10.532l6.909-12.045 c0.724-1.219,2.338-1.646,3.588-0.922c1.217,0.691,1.645,2.303,0.954,3.521l-6.975,12.045c9.741,5.199,20.766,8.294,32.479,8.688 v-13.888c0-1.416,1.188-2.6,2.635-2.6c1.414,0,2.569,1.184,2.569,2.6v13.888c11.747-0.395,22.771-3.489,32.479-8.688 l-6.942-12.045c-0.691-1.219-0.263-2.83,0.954-3.521c1.25-0.725,2.832-0.297,3.555,0.922l6.975,12.045 c4.772-2.994,9.249-6.55,13.231-10.532c3.982-3.981,7.505-8.425,10.533-13.262l-12.046-6.944 c-1.217-0.724-1.645-2.304-0.955-3.555c0.724-1.218,2.302-1.645,3.555-0.954l12.043,6.977c5.2-9.741,8.295-20.766,8.689-32.482 H252.05c-1.415,0-2.602-1.184-2.602-2.6c0-1.449,1.187-2.6,2.602-2.6h13.888c-0.395-11.715-3.489-22.774-8.689-32.515 l-12.043,6.977c-1.253,0.724-2.832,0.297-3.555-0.955c-0.69-1.25-0.263-2.83,0.955-3.554l12.046-6.944 c-2.963-4.771-6.485-9.183-10.402-13.132L244.118,203.146z" />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Layer_1" />{" "}
                        </g>
                    </svg>
                    <h3 className="text-lg text-primary dark:text-white font-bold py-2 text-center">
                        Στρατηγική & Ανάπτυξη Επιχειρήσεων
                    </h3>
                    <p className="text-center w-full md:w-1/2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nihil nesciunt reiciendis, quas dolorum sint vero
                        non impedit iure praesentium doloremque!
                    </p>
                </div>
                <div
                    data-aos="slide-up"
                    data-aos-delay="200"
                    className="flex flex-col items-center"
                >
                    <svg
                        className="fill-primary dark:fill-white w-20 h-20"
                        width="800px"
                        height="800px"
                        viewBox="0 0 512 512"
                        version="1.1"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g id="B_-_119_x2C__Support_x2C__Business_x2C__consulting_x2C__customer_x2C__man_x2C__online_consultant_x2C__service">
                                {" "}
                                <g>
                                    {" "}
                                    <path d="M285.195,399.619c-1.621,0-2.871-1.327-2.871-2.911 c0-1.62,1.25-2.909,2.871-2.909h38.094c1.622,0,2.875,1.289,2.875,2.909c0,1.584-1.253,2.911-2.875,2.911H285.195z M285.195,423.491c-1.621,0-2.871-1.289-2.871-2.911c0-1.62,1.25-2.909,2.871-2.909h38.094c1.622,0,2.875,1.289,2.875,2.909 c0,1.622-1.253,2.911-2.875,2.911H285.195z M365.066,320.413c-11.346-6.04-24.83-13.298-40.6-22.251l-41.85,68.854 c-0.148,0.222-0.293,0.405-0.44,0.627c-1.105,1.178-2.946,1.252-4.128,0.147l-21.955-20.483l-24.314,24.167v0.036l0,0h-0.075 v0.038l-0.072,0.036v0.037l0,0v0.037h-0.072v0.035l0,0l-0.076,0.038l0,0v0.036l-0.072,0.038l-0.076,0.036l0,0l-0.221,0.111 l-0.072,0.036l0,0l-0.075,0.037l0,0l0,0l-0.072,0.036l0,0l-0.072,0.037l-0.076,0.037l0,0l-0.073,0.037l0,0h-0.076l0,0 l-0.072,0.037l0,0h-0.072l0,0l-0.076,0.035l0,0h-0.072l0,0h-0.075l0,0l-0.072,0.038l0,0l0,0h-0.072l0,0h-0.076l0,0h-0.072l0,0 h-0.076l0,0h-0.145h-0.076h-0.072h-0.075h-0.072l0,0h-0.076l0,0l-0.072-0.038l0,0h-0.072l0,0h-0.076l0,0l-0.072-0.035l0,0h-0.076 l-0.072-0.037l0,0h-0.072l0,0l-0.147-0.074l0,0l-0.148-0.073l0,0l-0.072-0.037l0,0l-0.076-0.036l0,0l0,0l-0.072-0.038l0,0 l-0.148-0.073v-0.036h-0.072l-0.075-0.112h-0.072v-0.035v-0.037h-0.076v-0.037v-0.036h-0.072v-0.038h-0.072v-0.036v-0.037h-0.076 V371.4v-0.038h-0.072v-0.036v-0.038l-0.075-0.035l0,0l-0.073-0.074v-0.037l-0.072-0.185l0,0l-0.075-0.036l-0.072-0.147 l-0.076-0.11l-39.639-72.427c-16.207,9.21-29.987,16.541-41.405,22.62c-26.526,14.183-40.379,21.551-47.156,32.565 c-7.367,12.01-7.147,29.398-6.63,65.611c0.147,10.278,0.295,21.993,0.295,34.04c54.521,12.452,108.969,18.53,163.421,18.456 c54.449-0.073,108.896-6.335,163.421-18.456c0-11.604,0.145-23.062,0.293-33.155c0.443-36.583,0.664-54.155-6.778-66.312 C406.031,342.37,392.03,334.854,365.066,320.413z M259.925,342.886l19.45,18.199l40.303-66.349l-14.66-13.445L259.925,342.886z M192.289,294.811l38.166,69.811l21.735-21.661l-45.167-61.669L192.289,294.811z M257.495,68.873 c-21.884,0-41.777,8.88-56.146,23.247c-11.566,11.567-19.525,26.672-22.251,43.507c0.147,0.406,0.22,0.884,0.147,1.326 c-0.295,1.841-0.516,3.72-0.588,5.599c-0.148,1.843-0.221,3.759-0.221,5.711c0,4.273,0.293,8.841,0.881,13.63v0.111 c0.592,4.79,1.477,9.799,2.582,14.81c0.072,0.258,0.146,0.589,0.146,0.883c0,0.259-0.073,0.479-0.073,0.737 c4.2,18.162,11.935,37.614,22.917,53.528c13.112,19.009,30.795,32.824,52.606,32.824c21.808,0,39.563-13.815,52.679-32.824 c1.4-2.063,2.799-4.2,4.128-6.373l-44.208,16.799c-2.285,0.847-4.644,0.737-6.705-0.185c-1.99-0.922-3.76-2.616-4.568-4.863 c-0.885-2.247-0.736-4.642,0.221-6.667c0.884-2.063,2.578-3.758,4.787-4.605l61.744-23.504 c7.441-18.972,11.349-38.865,11.349-54.3c0-21.92-8.915-41.777-23.284-56.144C299.27,77.752,279.449,68.873,257.495,68.873z M194.499,129.364c-0.737-1.4-0.148-3.168,1.25-3.905c1.4-0.737,3.17-0.147,3.907,1.252c1.545,2.948,3.387,5.49,5.452,7.663 c6.262,6.668,14.81,9.983,23.501,10.794c8.696,0.811,17.611-0.921,24.317-4.384c2.43-1.253,4.641-2.727,6.333-4.421l0.076-0.038 c15.25-14.441,20.923-17.129,23.357-14.588l0.145,0.147c1.477,1.731,1.032,4.237,0.443,7.146 c-0.443,2.137-0.957,4.606-0.516,5.785v0.074c0.367,0.589,1.841,0.553,5.82-0.922c5.453-2.063,13.484-4.532,20.703-4.863h0.076 c8.104-0.295,15.177,1.989,17.459,10.131c0.445,1.547-0.512,3.131-2.062,3.573c-1.546,0.405-3.167-0.515-3.535-2.025 c-1.329-4.752-6.116-6.078-11.643-5.858h-0.072c-6.413,0.295-13.853,2.58-18.864,4.458c-8.18,3.02-11.787,1.289-13.26-2.284 l-0.076-0.295c-1.029-2.689-0.368-6.042,0.221-8.915c0.296-1.4,1.4-1.695,0.961-2.137c-0.148-0.185-3.172,3.463-15.178,14.81 v0.037c-2.214,2.063-4.793,3.832-7.739,5.341c-7.664,3.979-17.684,5.932-27.481,5.011c-10.021-0.922-19.893-4.826-27.264-12.563 C198.403,135.848,196.265,132.827,194.499,129.364z M279.375,178.692c-1.474,0.626-3.168-0.073-3.832-1.547 c-0.588-1.474,0.076-3.168,1.549-3.795c0.072-0.037,18.053-8.104,26.744,0.627c1.105,1.105,1.105,2.983,0,4.125 c-1.177,1.105-3.019,1.105-4.123-0.037C293.891,172.245,279.449,178.692,279.375,178.692z M159.5,139.458 c3.315-27.703,15.105-52.275,32.272-69.995c17.459-18.051,40.524-28.993,65.722-28.993c25.271,0,48.331,10.942,65.794,28.993 c17.167,17.72,28.958,42.292,32.272,69.995h7.663v35.33h-23.137c1.915-9.506,2.875-18.567,2.875-26.524 c0-2.948-0.076-5.895-0.443-8.805h7.222c-3.315-26.12-14.44-49.254-30.651-65.943c-16.431-16.946-37.946-27.224-61.595-27.224 c-23.578,0-45.168,10.278-61.523,27.224c-16.21,16.688-27.408,39.823-30.651,65.943h7.147c-0.296,2.91-0.441,5.857-0.441,8.805 c0,7.957,0.958,17.019,2.947,26.524h-22.695v-35.33H159.5z M348.56,189.892c0-1.622,1.329-2.948,2.95-2.948 c1.618,0,2.871,1.326,2.871,2.948v12.157c0,1.326-0.884,2.432-2.062,2.799l-84.292,32.087c-1.545,0.589-3.166-0.184-3.755-1.657 c-0.589-1.51,0.147-3.205,1.694-3.758l82.593-31.461V189.892z M237.97,173.35c1.473,0.627,2.134,2.322,1.473,3.795 c-0.589,1.474-2.286,2.173-3.759,1.547c-0.072,0-14.513-6.447-20.334-0.627c-1.105,1.142-2.947,1.142-4.127,0.037 c-1.104-1.142-1.104-3.02,0-4.125C219.918,165.246,237.894,173.313,237.97,173.35z" />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Layer_1" />{" "}
                        </g>
                    </svg>
                    <h3 className="text-lg text-primary dark:text-white font-bold py-2 text-center">
                        Υποστήριξη Επιχειρήσεων
                    </h3>
                    <p className="text-center w-full md:w-1/2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nihil nesciunt reiciendis, quas dolorum sint vero
                        non impedit iure praesentium doloremque!
                    </p>
                </div>
                <div
                    data-aos="slide-right"
                    className="absolute -left-[10%] md:-left-[15%] -top-0 md:-top-20"
                >
                    <svg
                        className="w-[40%] md:w-[80%] h-full -rotate-45 rounded-full"
                        viewBox="0 0 400 400"
                    >
                        <defs>
                            <pattern
                                id="bg_pattern-1"
                                width="100"
                                height="100"
                                patternUnits="userSpaceOnUse"
                            >
                                <polygon
                                    points="25,25 75,50, 25,75"
                                    fill="#25A3D4"
                                ></polygon>{" "}
                            </pattern>
                        </defs>
                        <rect
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            fill="url(#bg_pattern-1)"
                        ></rect>
                    </svg>
                </div>
            </div>
        </div>
    );
}
