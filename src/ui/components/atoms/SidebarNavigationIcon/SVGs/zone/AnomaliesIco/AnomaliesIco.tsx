"use client";

import { CategoryIconType } from "@types";

export const AnomaliesIco = ({ color }: CategoryIconType) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3673_33049)">
                <path d="M16 22.4C14.24 22.4 12.7333 21.7733 11.48 20.52C10.2267 19.2667 9.6 17.76 9.6 16C9.6 14.24 10.2267 12.7333 11.48 11.48C12.7333 10.2267 14.24 9.6 16 9.6C17.76 9.6 19.2667 10.2267 20.52 11.48C21.7733 12.7333 22.4 14.24 22.4 16C22.4 17.76 21.7733 19.2667 20.52 20.52C19.2667 21.7733 17.76 22.4 16 22.4ZM16 19.2C16.88 19.2 17.6333 18.8867 18.26 18.26C18.8867 17.6333 19.2 16.88 19.2 16C19.2 15.12 18.8867 14.3667 18.26 13.74C17.6333 13.1133 16.88 12.8 16 12.8C15.12 12.8 14.3667 13.1133 13.74 13.74C13.1133 14.3667 12.8 15.12 12.8 16C12.8 16.88 13.1133 17.6333 13.74 18.26C14.3667 18.8867 15.12 19.2 16 19.2ZM23.24 32C23.72 30.5067 24.08 29.1733 24.32 28C24.56 26.8267 24.7467 25.8933 24.88 25.2C23.7333 26.32 22.4 27.2 20.88 27.84C19.36 28.48 17.7333 28.8 16 28.8C12.3733 28.8 9.19333 28.5533 6.46 28.06C3.72667 27.5667 1.57333 27.0933 0 26.64V23.24C1.49333 23.72 2.82667 24.08 4 24.32C5.17333 24.56 6.10667 24.7467 6.8 24.88C5.68 23.7333 4.8 22.4 4.16 20.88C3.52 19.36 3.2 17.7333 3.2 16C3.2 12.3467 3.44667 9.16 3.94 6.44C4.43333 3.72 4.90667 1.57333 5.36 0H8.76C8.28 1.49333 7.91333 2.82667 7.66 4C7.40667 5.17333 7.22667 6.10667 7.12 6.8C8.26667 5.68 9.6 4.8 11.12 4.16C12.64 3.52 14.2667 3.2 16 3.2C19.6533 3.2 22.84 3.44667 25.56 3.94C28.28 4.43333 30.4267 4.90667 32 5.36V8.76C30.5067 8.28 29.1733 7.91333 28 7.66C26.8267 7.40667 25.8933 7.22667 25.2 7.12C26.32 8.26667 27.2 9.6 27.84 11.12C28.48 12.64 28.8 14.2667 28.8 16C28.8 19.6533 28.5533 22.84 28.06 25.56C27.5667 28.28 27.0933 30.4267 26.64 32H23.24ZM16 25.6C18.6667 25.6 20.9333 24.6667 22.8 22.8C24.6667 20.9333 25.6 18.6667 25.6 16C25.6 13.3333 24.6667 11.0667 22.8 9.2C20.9333 7.33333 18.6667 6.4 16 6.4C13.3333 6.4 11.0667 7.33333 9.2 9.2C7.33333 11.0667 6.4 13.3333 6.4 16C6.4 18.6667 7.33333 20.9333 9.2 22.8C11.0667 24.6667 13.3333 25.6 16 25.6Z" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_3673_33049">
                    <rect width="32" height="32" fill={color} />
                </clipPath>
            </defs>
        </svg>
    );
};