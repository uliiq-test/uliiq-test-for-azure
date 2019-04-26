import { Profile } from "~/types/models/Profile";

export const state = () =>  ({
  myProfile: {
    accountId: null,
    clientCode: null,
    credentialId: null,
    accountName: null,
    displayName: null,
    birthday: null,
    gender: null,
    description: null,
    profileImage: null,
    profileImageUrl: null,
    profileBackgroundImage: null,
    profileBackgroundImageUrl: null,
    facebookId: null,
    twitterId: null,
    instagramId: null,
    blogUrl: null,
    thanksMessage:  null,
    etcUrl: null,
    permissionCode: null,
    permissions:null,
    tokens: null,
   },
  accessToken: '',
  isLoading: false,
  isCreator: false,
  isAdmin:false,
  canTransition:false,
})
// mutaions
export const mutations = {
  setAccessToken(state, accessToken: string) {
    state.accessToken = accessToken
  },
  setMyProfile(state, profile: Profile) {
    state.myProfile = profile
  },
  setIsCreator(state, isCreator: boolean) {
    state.isCreator = isCreator
  },
  setIsAdmin(state, isAdmin: boolean) {
    state.isAdmin = isAdmin
  },
  setIsLoading(state, isLoading: boolean) {
    state.isLoading = isLoading
  },
  setTransition(state, canTransition: boolean) {
    state.canTransition = canTransition
  },
}

// actions
export const actions = {
  async addAccessToken({ commit }, accessToken: string|null) {
    commit("setAccessToken", accessToken)
  },
  addMyProfile({ commit }, profile: Profile) {
    var isCreator: boolean = false;
    var isAdmin: boolean = false;

    if(profile.permissions) {
      for(let permission of profile.permissions){
        // クリエイター権限
        if(permission === 'C') {
          isCreator = true;
        }
        // アドミン権限
        if (permission === 'A'){
          isAdmin = true;
        }
      }
    }
    commit("setIsAdmin", isAdmin);
    commit("setIsCreator", isCreator);
    commit("setMyProfile", profile);
  },
  updateIsLoading({ commit }, flg: boolean) {
    commit("setIsLoading", flg)
  },
  transitionAllow({ commit }){
    commit("setTransition", true);
  },
  transitionDenial({ commit }){
    commit("setTransition", false);
  },
  logout({ commit }) {
    var profle:Profile = {"accountId": null, "clientCode": null, "credentialId": null, "accountName": null, "displayName": null, "birthday": null, "gender": null, "description": null, "profileImage": null, "profileImageUrl": null, "profileBackgroundImage": null, "profileBackgroundImageUrl": null, "facebookId": null, "twitterId": null, "instagramId": null, "blogUrl": null, "thanksMessage":  null, "etcUrl": null, "permissionCode": null, "tokens": null, "permissions":null };
    commit("setAccessToken", null);
    commit("setMyProfile", profle);
    commit("setIsLoading", false);
    commit("setIsCreator", false);
    commit("setTransition", false);
  }
}