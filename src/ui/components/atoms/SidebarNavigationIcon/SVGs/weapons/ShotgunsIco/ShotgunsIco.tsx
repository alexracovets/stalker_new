"use client";

import { CategoryIconType } from "@types";

export const ShotgunsIco = ({ color }: CategoryIconType) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" fill={color} d="M19.2252 10.172C25.3834 5.19437 28.7758 2.41517 28.7813 2.3606C28.7868 2.30604 28.8321 2.23612 28.8841 2.19419C28.936 2.15226 28.999 2.14323 29.0203 2.16773C29.0417 2.19224 29.1255 2.16643 29.2086 2.09934C29.2823 2.03155 29.4152 1.9911 29.4953 2.00167C29.5753 2.01224 29.7272 2.11523 29.8255 2.22796C29.9239 2.3407 30.003 2.50239 29.9999 2.58004C29.9956 2.71716 29.7089 2.95686 26.2441 5.7444C23.3187 8.10497 22.5002 8.79053 22.4919 8.87238C22.4855 8.93603 22.5108 9.01582 22.5365 9.04523C22.5664 9.07954 22.6337 9.0754 22.6856 9.03347C22.7324 8.99574 22.8265 8.96155 22.8928 8.96651C22.9591 8.97147 23.0878 9.06814 23.1818 9.17597C23.2759 9.2838 23.3526 9.4224 23.3419 9.48116C23.3388 9.55882 23.1169 9.77129 22.6025 10.1864C21.9894 10.6811 21.8723 10.8007 21.8533 10.9413C21.8334 11.091 21.6402 11.2552 17.3483 14.7185L17.1299 14.5189L12.2404 18.4644L12.2227 18.6875C12.2098 18.8148 12.2467 18.9688 12.3066 19.0374C12.3665 19.106 12.4337 19.2439 12.4562 19.351C12.4883 19.4588 12.4797 19.591 12.4501 19.6483C12.4247 19.7106 12.2556 19.872 12.079 20.0146C11.8442 20.2124 11.7033 20.2843 11.5594 20.2918C11.425 20.3001 11.2694 20.2335 11.0971 20.0969C10.9291 19.9652 10.7693 19.8937 10.6452 19.8936C10.5349 19.8991 10.3656 19.9689 10.2669 20.0485C10.1682 20.1282 9.99849 20.3904 9.89361 20.6254C9.78262 20.8736 9.69697 21.2017 9.69661 21.3941C9.69197 21.5816 9.74353 21.8741 9.81132 22.0532C9.87483 22.2275 9.9973 22.4795 10.0749 22.609C10.1619 22.7392 10.2154 22.8715 10.197 22.9114C10.1839 22.947 9.97208 23.0595 9.72851 23.1558C9.47974 23.2563 9.15855 23.3651 9.01186 23.4C8.85997 23.439 8.69678 23.4955 8.65521 23.5291C8.61364 23.5626 7.93425 24.9962 7.14018 26.7144C6.35131 28.4285 5.64594 29.883 5.57319 29.9417C5.45368 30.0382 5.42619 30.027 5.24229 29.8162C5.12681 29.6838 4.65605 29.1951 4.19385 28.7161C3.72644 28.2413 3.04304 27.59 2.66941 27.2734C2.14241 26.8216 1.99608 26.6641 2.00008 26.5773C2.00835 26.4955 2.7236 25.793 4.43804 24.1757C5.77286 22.9149 7.00527 21.77 7.17674 21.6317C7.40017 21.4514 7.56092 21.3718 7.7455 21.3398C7.88088 21.3224 8.04927 21.2617 8.11682 21.2072C8.17917 21.1569 8.30088 20.8499 8.37706 20.5211C8.45751 20.1972 8.65904 19.6671 8.811 19.344C8.97243 19.0217 9.22864 18.5643 9.67741 17.9015L19.2252 10.172ZM15.2842 13.4691C15.2805 13.5055 15.2897 13.5566 15.3162 13.5769C15.3385 13.5923 15.5739 13.4358 15.8285 13.2303C16.1766 12.9494 16.2781 12.8425 16.2292 12.8068C16.1818 12.7727 16.0152 12.8625 15.7295 13.0763C15.4966 13.2559 15.2931 13.4285 15.2842 13.4691ZM16.9976 12.287C16.6391 12.5763 16.5431 12.6286 16.4918 12.5698C16.4405 12.511 16.5108 12.4292 16.8693 12.1399C17.2278 11.8506 17.3238 11.7982 17.3751 11.857C17.4264 11.9159 17.3561 11.9977 16.9976 12.287ZM17.6869 11.6055C17.7382 11.6643 17.8341 11.6119 18.1927 11.3226C18.5512 11.0333 18.6215 10.9515 18.5702 10.8927C18.5189 10.8339 18.4229 10.8863 18.0644 11.1756C17.7058 11.4649 17.6355 11.5467 17.6869 11.6055ZM18.8495 10.7257C18.8229 10.7054 18.8138 10.6543 18.8175 10.618C18.8263 10.5774 19.0299 10.4048 19.2628 10.2252C19.5485 10.0114 19.715 9.92153 19.7625 9.95562C19.8114 9.99135 19.7099 10.0983 19.3618 10.3792C19.1072 10.5847 18.8718 10.7412 18.8495 10.7257ZM20.0126 9.65362C20.0089 9.68999 20.018 9.74108 20.0446 9.76139C20.0669 9.7768 20.2824 9.62799 20.5223 9.42602C20.758 9.21915 20.9392 9.03113 20.924 8.99333C20.9035 8.95973 20.7159 9.06939 20.4631 9.25665C20.225 9.44043 20.0214 9.61305 20.0126 9.65362ZM21.1165 10.1577C20.9906 10.1758 20.8708 10.1806 20.8537 10.1609C20.8323 10.1364 21.0689 9.92048 21.3754 9.6731C21.7599 9.36283 21.9745 9.22311 22.0555 9.22458C22.1218 9.22954 22.1991 9.2674 22.229 9.30171C22.2675 9.34582 22.1504 9.46534 21.8127 9.73788C21.4594 10.023 21.2916 10.125 21.1165 10.1577ZM21.2201 8.75434C21.2715 8.81316 21.3674 8.76078 21.726 8.47147C22.0845 8.18216 22.1548 8.10037 22.1035 8.04156C22.0521 7.98274 21.9562 8.03512 21.5977 8.32443C21.2391 8.61373 21.1688 8.69552 21.2201 8.75434ZM22.921 7.50712C22.5625 7.79642 22.4665 7.8488 22.4152 7.78998C22.3639 7.73117 22.4342 7.64938 22.7927 7.36007C23.1513 7.07077 23.2472 7.01838 23.2985 7.0772C23.3499 7.13602 23.2796 7.21781 22.921 7.50712ZM23.5458 6.80248C23.5422 6.83886 23.5513 6.88994 23.5779 6.91025C23.6002 6.92567 23.8355 6.76918 24.0901 6.56373C24.4383 6.28281 24.5398 6.17586 24.4909 6.14013C24.4434 6.10604 24.2768 6.1959 23.9912 6.40971C23.7583 6.5893 23.5547 6.76191 23.5458 6.80248ZM25.2507 5.61053C24.8903 5.91803 24.8048 5.96202 24.7534 5.90321C24.703 5.83529 24.7672 5.76679 25.1395 5.4831C25.3975 5.29164 25.6111 5.16101 25.6368 5.19042C25.6624 5.21983 25.4915 5.39947 25.2507 5.61053ZM25.9485 4.93885C25.9998 4.99767 26.0958 4.94529 26.4543 4.65598C26.8128 4.36668 26.8832 4.28489 26.8318 4.22607C26.7805 4.16725 26.6845 4.21963 26.326 4.50894C25.9675 4.79824 25.8972 4.88003 25.9485 4.93885ZM27.1518 4.03467C27.1201 4.01855 27.0944 3.98914 27.0981 3.95277C27.0923 3.91568 27.2925 3.72907 27.5315 3.5362C27.8796 3.25528 27.9756 3.2029 28.0269 3.26171C28.0782 3.32053 28.0079 3.40232 27.6494 3.69163C27.4052 3.88869 27.1845 4.0417 27.1518 4.03467ZM28.2742 2.98699C28.2705 3.02337 28.2797 3.07445 28.3063 3.09477C28.3286 3.11018 28.5587 2.95788 28.8185 2.74824C29.1666 2.46732 29.2681 2.36037 29.2192 2.32464C29.1718 2.29055 29.0052 2.38041 28.7195 2.59423C28.4866 2.77381 28.2831 2.94643 28.2742 2.98699ZM11.2968 19.727C11.273 19.6794 11.2556 19.5681 11.2638 19.4863C11.2636 19.3946 11.3375 19.2765 11.4519 19.1842C11.5567 19.0913 11.7303 19.0264 11.8647 19.0181C12.0188 19.0052 12.1357 19.0445 12.2155 19.136C12.2797 19.2095 12.3374 19.3467 12.3514 19.4439C12.3651 19.5916 12.3208 19.6524 12.0142 19.8998C11.7379 20.1311 11.6325 20.1828 11.4766 20.1665C11.3724 20.1587 11.2899 20.1251 11.2945 20.0796C11.2982 20.0432 11.3801 20.0356 11.4773 20.0658C11.5702 20.0911 11.6701 20.094 11.7013 20.0688C11.7324 20.0436 11.6665 19.9883 11.5436 19.9287C11.4303 19.8698 11.3154 19.7788 11.2968 19.727ZM11.6391 17.2373C11.5398 17.1337 11.458 16.9993 11.4635 16.9447C11.4656 16.8762 11.6001 16.7259 11.7976 16.5666C12.0158 16.3905 12.1524 16.3136 12.2065 16.3452C12.2658 16.3725 12.2762 16.3641 12.2698 16.2857C12.2616 16.2256 12.3795 16.097 12.6583 15.8887C12.9734 15.6512 13.0736 15.6037 13.125 15.6625L13.4885 16.0791L11.8258 17.4208L11.6391 17.2373Z" />
        </svg>
    );
};