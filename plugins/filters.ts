import Vue from "vue";
import dayjs from "dayjs";

// 表示日時のフォーマット
Vue.filter('formatDate', (value) => {
  if (value) {
    return dayjs(value).format('YYYY/MM/DD HH:mm')
  }
})

// 表示日時のフォーマット
Vue.filter('formatDateMmDd', (value) => {
  if (value) {
    return dayjs(value).format('MM/DD')
  }
})

// 数値カンマ区切り
Vue.filter('toLocaleString', (value) => {
  if (value) {
    return value.toLocaleString()
  } else {
    return 0;
  }
})

// null⇒0に変更
Vue.filter('noneToZero', (value) => {
  if (!value) {
    return 0;
  } else {
    return value;
  }
})

// 0⇒なしに変更
Vue.filter('zeroToNone', (value) => {
  if (value === 0) {
    return 'なし';
  } else {
    return value;
  }
})

// Null⇒なしに変更
Vue.filter('nullToNone', (value: string|null, addString:string|null) => {
  if (!value) {
    return 'なし';
  } else {
    if(addString) return value + addString;
    return value;
    
  }
})

// 値を消す。
Vue.filter('delete', (value: string, isDelete: boolean) => {
  if(isDelete) {
    return null;
  } else {
    return value;
  }
})


// 残り日数
Vue.filter('toDaysLeft', (value) => {
  if (value) {
    var fromDay:Date = new Date();
		var toDay:Date = new Date(value.substring(0, 4) + '/' + value.substring(4, 6) + '/' + value.substring(6, 8));
		//差日を求める（86,400,000ミリ秒＝１日）
		var termDay = (Number(toDay) - Number(fromDay)) / 86400000;
		return String(Math.ceil(termDay));
  } else {
    return '-';
  }
})

// 改行コードを<br>に変換
Vue.filter('newLine', (value) => {
  if (value) {
    return value.replace(/\n/g,'<br>');
  } else {
    return value;
  }
})