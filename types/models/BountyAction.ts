import { Profile } from "types/models/Profile"

export interface BountyAction {
    account: Profile | null;
    bountyId: number | null;
    bountyActionId: number | null;
    bountyActionNo: number | null;
    bountyActionName: string | null;
    bountyActionType: number | null;
    description: string | null;
    bountyActionImage: string | null;
    bountyActionImageUrl: string | null;
    clientCode: string | null;
    credentialId: number | null;
    joinCount: number | null;
}