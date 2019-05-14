const fileClient = SolidFileClient;

//로그인아웃 버튼 보이기 숨기기
var showLogin = function () {
  document.getElementById("login").style.display = "block";
  document.getElementById("logout").style.display = "none";
};
var showLogout = function () {
  document.getElementById("login").style.display = "none";
  document.getElementById("logout").style.display = "block";
};
//처음에 로그인아웃 보일지 말지 설정하기
addEventListener('DOMContentLoaded', function () { showLogin() })
window.onload = function () {
  fileClient.checkSession().then(session => {
    console.log("Logged in as " + session.webId);
    curUser =session.webId;
    showLogout();
  }, err => console.log(err)
  )
}
//로그인
var login = document.getElementById('login');
login.addEventListener('click', function () {
  fileClient.popupLogin().then(webId => {
    console.log(`Logged in as ${webId}.`);
    showLogout();
  }, err => console.log(err));
});

//로그아웃
function logout (){addEventListener('click', function () {
  fileClient.logout().then(function () {
    console.log(`Bye now!`);
    showLogin();
  }
  );
});}

//탭 전환
document.getElementById("defaultOpen").click();
function switchTab(tabName) {
  var tabcontent = document.getElementsByClassName("tabcontent");
  //콘텐츠 내용 숨기기
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  var tablinks = document.getElementsByClassName("navtab");
  //탭 전부 비활성화하기
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  //선택된 탭, 콘텐츠 활성화하기
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

let curUser ;
//파일생성
function createF() {
  var userUrl = curUser.substring(0,curUser.length - 15);
  console.log("createf"+ userUrl);
  var url = userUrl +'chobo/images';
  fileClient.createFolder(url).then(success => {
  console.log(`Created folder ${url}.`);
}, err => console.log(err) );}

//사진 업로드하기
function upload() {
  SolidFileClient.popupLogin().then( ()=>{
      const folder = document.getElementById('targetFolder').value;
      const fileInput = document.getElementById('fileArea');
      const files = fileInput.files;
      for(var i=0;i<files.length;i++){
          var URI = folder + files[i].name;
          var content = files[i];
          SolidFileClient.updateFile(URI, content).then( res=> {
              console.log(res);
          }, err=>{console.log("upload error : "+err)});
      }
  }, err=>{console.log("login error : "+err)});
}
//https://yongjun.inrupt.net/chobo/images