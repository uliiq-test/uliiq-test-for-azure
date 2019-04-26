import{ CommonConst }from "~/types/CommonConst"
export default function ({ route, redirect, store }) {

    for(let page of CommonConst.PAGE.AUTH_PAGES){
        // 認証系のページへの遷移
        if(route.path.startsWith(page) ) {
            // アクセストークンの情報が無い場合、TOPページへ遷移
            if(!store.state.accessToken) {
                return redirect('/');
            }
        }
    }
    
    for(let page of CommonConst.PAGE.DIRECT_GARD_PAGE){
        // 直接アクセス禁止ページ
        if(route.path.startsWith(page)) {
            if(store.state.canTransition) {
                // アクセス許可
                store.dispatch('transitionDenial');
            } else {
                // 不正アクセス
                return redirect('/');
            }

        }
    }
}

