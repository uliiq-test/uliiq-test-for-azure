export class CommonUtil {

	// ============================================
	// 日付文字列を日付型に返還
	//  返却値 ： Date型日付(制度：YYYY/MM/DD)
	//           nullの場合は現在日付を返却
	// ============================================
	stringToDataYmd(dataString: string | null): Date {
		if(!dataString) return new Date();
		return new Date(dataString.substring(0, 4) + '/' + dataString.substring(4, 6) + '/' + dataString.substring(6, 8));
	} 

	// ============================================
	// 現在日付との比較
	//  返却値 ：-1 現在日付よりも過去
	//           0 現在日付と同日
	//           1 現在日付よりも未来
	// ============================================
	dateNowCompare(date: Date): number {
		const nowDate: Date = new Date();
		const nowYear: number = nowDate.getFullYear();
		const nowMonth: number = nowDate.getMonth() + 1;
		const nowDay: number = nowDate.getDate();

		const year: number = date.getFullYear();
        const month: number = date.getMonth() + 1;
		const day: number = date.getDate();
		
		if (nowYear === year) {
            if (nowMonth === month) {
				if(nowDay < day){
					return 1;
				} else if (nowDay === day) {
					return 0;
				} else {
					return -1;
				}
            }
            else {
                if (nowMonth < month) {
					return 1;
				} else {
					return -1;
				}
            }
        } else {
			if(nowYear < year) {
				return 1;
			} else {
				return -1;
			}
        }
	}
}

