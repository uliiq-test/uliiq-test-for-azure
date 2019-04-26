import { Profile } from "types/models/Profile"

export interface Bounty {
    account: Profile | null;
    bountyId: number | null;
    bountyImage: File | null;
    bountyImageUrl: string | null;
    bountyName: string | null;
    bountyType: string | null;
    canPostComment: boolean | null;
    clientCode: string | null;
    createStatus: number | null;
    commentCount:  number | null;
    completeStatus: number | null;
    completedCommet: string | null;
    credentialId: string | null;
    description: string | null;
    joinCount: number | null;
    participantLimit: number | null;
    participationEndDate: string | null;
    publishStatus: number | null;
    quantity: number | null;
    thanksMessage: string | null;
    tokenId: string | null;
}