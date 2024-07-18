// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// swiper

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});


// // const swiper2 =new Swiper('.swiper',{
// 	scrollbar:{
// 		el:'swiper-scrollbar'
// 	},
// });

// Events
// タイトル要素を追加
let swiperTitleEl=document.getElementById('swiper-title')
// 文字要素を作成
let  textEl =document.createTextNode("スライド１を表示しています")
// 文字要素を表示させる
swiperTitleEl.appendChild(textEl)

swiper.on('slideChange',function(){

//  1.表示するテキストを準備
const currentSliderIndex = swiper.realIndex+1;
console.log(currentSliderIndex)
const text = 'スライド'+currentSliderIndex +'を表示しています。'

// 2.先に追加していた要素を削除
textEl.remove();

// 3.準備したテキストにHTMLを入れる
// HTML側に入れ物を準備して、そこに挿入するコードを書く
textEl=document.createTextNode(text)
swiperTitleEl.appendChild(textEl)

});

// 二個目のスワイパー
const swiper2 = new Swiper('.swiper-2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
    
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	 // And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
    
    });
    
    
    // // const swiper2 =new Swiper('.swiper',{
    // 	scrollbar:{
    // 		el:'swiper-scrollbar'
    // 	},
    // });
    
    // Events 
    let titleList=[
	"ブランコに乗っている女の子",
	"遊んでいる男の子",
	"ご飯を食べている家族"
    ]
    // タイトル要素を追加
    let swiperTitleEl2=document.getElementById('swiper-title-2')
    // 文字要素を作成
    let  textEl2 =document.createTextNode(titleList[0])
    // 文字要素を表示させる
    swiperTitleEl2.appendChild(textEl2)
    
    swiper2.on('slideChange',function(){
    
    //  1.表示するテキストを準備
    const currentSliderIndex = swiper2.realIndex;
    console.log(currentSliderIndex)
    const text = titleList[currentSliderIndex]
    // 2.先に追加していた要素を削除
    textEl2.remove();
    
    // 3.準備したテキストにHTMLを入れる
    // HTML側に入れ物を準備して、そこに挿入するコードを書く
    textEl2=document.createTextNode(text)
    swiperTitleEl2.appendChild(textEl2)
    
    });
 
// just
import JustValidate from 'just-validate';

const validator = new JustValidate('#basic_form');
validator
	.addField('#basic_name', [
		{
			rule: 'required',
			errorMessage: '名前の入力は必須です'
		},
		{
			rule: 'minLength',
			value: 3,
			errorMessage: '名前は3文字以上で入力してください'
		},
		{
			rule: 'maxLength',
			value: 15,
			errorMessage: '最大入力文字数は15文字です。',
		},
	])
	.addField('#basic_email', [
		{
			rule: 'required',
			errorMessage: 'メールアドレスの入力は必須です'
		},
		{
			rule: 'email',
			errorMessage: '形式が正しくありません。',
		},
	])
	.addField('#basic_password', [
		{
			rule: 'required',
			errorMessage: 'パスワードの入力は必須です'
		},
		{
			rule: 'password',
			errorMessage: 'パスワードは8文字以上で入力してください。',
		},
	])
	.addField('#basic_age', [
		{
			rule: 'required',
			errorMessage: '年齢の入力は必須です'
		},
		{
			rule: 'number',
			errorMessage: '数字で入力してください。',
		},
		{
			rule: 'minNumber',
			value: 18,
			errorMessage: '18以上の数字を入力してください。',
		},
		{
			rule: 'maxNumber',
			value: 150,
			errorMessage: '18以上の数字を入力してください。',
		},
	])
	.addField('#basic_address', [
		{
			rule: 'required',
			errorMessage: '住所の入力は必須です'
		},
	])
	.onSuccess(function(event){
		let formData = new FormData(event.target);
		console.log(formData.get("name"));
		console.log(formData.get("email"));
		console.log(formData.get("password"));
		console.log(formData.get("age"));
		console.log(formData.get("address"));
	})
