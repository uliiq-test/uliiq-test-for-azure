import { Tokens } from "~/types/models/Tokens"

export interface Profile {
    accountId: number | null;
    accountName: string | null;
    birthday: string | null;
    blogUrl: string | null;
    clientCode: string | null;
    credentialId: string | null;
    description: string | null;
    displayName: string | null;
    etcUrl: string | null;
    facebookId: string | null;
    gender: number | null;
    instagramId: string | null;
    permissionCode: string | null;
    permissions: string[] |null;
    profileBackgroundImage: File | null;
    profileBackgroundImageUrl: string | null;
    profileImage: File | null;
    profileImageUrl: string | null;
    thanksMessage: string | null;
    tokens:Tokens[] | null;
    twitterId: string | null;
}