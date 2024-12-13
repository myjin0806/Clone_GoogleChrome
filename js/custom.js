/* 
1. 스크롤하면 download가 보여진다.
2. .active가 추가된다.
3. link_item_tilte을 클릭하면 형제인 link_item_content가 보여진다.
4. 클릭시 rotate라는 클래스가 추가된다.
*/
document.addEventListener("DOMContentLoaded", function(){
  //스크롤 이벤트
  window.addEventListener("scroll", function(){
    /* 선택, 조건 */
    let downloadBtn = document.querySelector('.dwn');
    console.log("선택이 잘 되었는지 확인", downloadBtn);
    if(this.window.scrollY > 100/* 조건 */){
    /* 버튼에 active 추가 */
    downloadBtn.classList.add('active')
    }else{
     /*  버튼에 active 삭제 */
      downloadBtn.classList.remove('active')
    }
  });
  /* 사이트맵 아코디언
  1. link_item_title을 클릭하면 형제인 link_item_content가 보여진다.
  2. 클릭시 rotate라는 클래스가 추가 된다. */
  let linkItems = document.querySelectorAll('.link_item_title');
  linkItems.forEach(function(linkItem){
    linkItem.addEventListener('click',function(){
      let content = linkItem.nextElementSibling;
      //모든 아코디언 내용을 닫고 현재 선택된 것만 열기
      linkItems.forEach(function(otherlinkItem){
        otherlinkItem.nextElementSibling.style.display = 'none';
        otherlinkItem.classList.remove('rotate')
      });
      //선택된 것만 열기
      content.style.display = "block";
      linkItem.classList.add('rotate');
    });
  });
});