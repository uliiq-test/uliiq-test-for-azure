import { Profile } from "types/models/Profile"

export interface Reward {
    rewardId: number | null;
    tokenCode: string | null;
    tokenTypeCode: string | null;
    rewardName: string | null;
    description: string | null;
    rewardImage: File | null;
    rewardImageUrl: string | null;
    quantity: number | null;
    exchangeTokenCode: string | null;
    exchangeRate: number | null;
    isPreview: boolean | null;
    ownQuantity: number | null;
    thanksMessage: string | null;
    publishStatus: number | null;
    createStatus: number | null;
    account: Profile | null;
    clientCode: string | null;
    credentialId: number | null;
    exchangeEndDate: string | null;
    useChat: number | null;
  }