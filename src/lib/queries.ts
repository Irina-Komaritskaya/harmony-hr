import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { useState } from "react";

export const GET_USER = gql`
    query {
        user(id: 2) {
            name
            avatar
        }
    }
`;

export const LogIn = async ({ email, password }) => {
    const LoginMutation = gql`
        mutation Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
                access_token
                refresh_token
            }
        }
    `;
    const result = await client.mutate({
        mutation: LoginMutation,
        variables: { email, password },
    });
    const login = result?.data?.login
    if (
        login?.access_token &&
        login.refresh_token
    ) {
        localStorage.setItem("accessToken", result.data.login.access_token);
        localStorage.setItem("refreshToken", result.data.login.refresh_token);
    // } else {
    //     return (result.data.error)

    }
    console.log(result);
};

export const GetUser = async () => {
    const userQuery = gql`
        query {
            myProfile {
                id
                name
                avatar
            }
        }
    `;
    const result = await client.query({
        query: userQuery,
    });

    if(result?.data?.myProfile?.id){
        console.log(result?.data?.myProfile?.id)
    }
};
