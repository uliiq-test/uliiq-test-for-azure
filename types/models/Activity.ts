import { Bounty }  from  "~/types/models/Bounty"

export interface Activity {
    accountActionId: number | null;
    accountActionType: string | null;
    bounty:Bounty | null;
    createDateTime: string | null;
    description: string | null;
    fromAccount: Account | null;
    fromAccountId: number | null;
    likeCount: number | null;
    likeQuantity: number | null;
    toAccount: Account | null;
    toAccountId: number | null;
    updateDateTime:string | null;

}

export interface Account{
    accountId: number | null;
    clientCode: string | null;
    credentialId: string | null;
    accountName: string | null;
    displayName: string | null;
    birthday: string | null;
    gender: number | null;
    description: string | null;
    profileImageUrl: string | null;
    profileBackgroundImageUrl: string | null;
    facebookId: string | null;
    twitterId: string | null;
    instagramId: string | null;
    blogUrl: string | null;
    etcUrl: string | null;
    active: number | null;
    createDateTime: string | null;
    updateDateTime: string | null;
}