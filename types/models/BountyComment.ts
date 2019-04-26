import { Profile } from "types/models/Profile"

export interface BountyComment {
    account:Profile  | null;
    bountyId: number | null;
    bountyCommentId: number | null;
    comment: string | null;
    likeCount: number | null;
    likeQuantity: number | null;
    postedDateTime: string | null;
    replyCommentId: number | null;
    replyComment: BountyComment | null;
    clientCode: string | null;
    credentialId: string | null;
}