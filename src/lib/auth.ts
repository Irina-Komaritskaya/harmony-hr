"use client";
export function useAuth() {
    const token = localStorage.getItem("accessToken");
    const isSignedIn = () => {
        if (token) {
            return true;
        } else {
            return false;
        }
    };
    return isSignedIn;
}
