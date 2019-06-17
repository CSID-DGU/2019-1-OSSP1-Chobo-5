# Chobo

Chobo는 Solid를 지원하기 위해 만들어진 웹 프로그램입니다.
Solid Pod 저장소를 통해 이미지를 관리 및 업로드하고 메세지를 적을 수 있으며, 좋아요를 할 수 있습니다.

이 애플리케이션은 [Solid React Application Generator](https://github.com/inrupt/generator-solid-react)를 통해 생성되었습니다.


## 기능
사용자는 Inrupt 또는 Solid Community 웹 ID를 이용하여 로그인할 수 있습니다.

이 애플리케이션은 메세지를 포함한 이미지를 사용자의 Solid Pod에 업로드할 수 있습니다. 
The user can also set access rights for newly uploaded images to either be public or private.
또한 사용자는 업로드를 할 때, 액세스 권한을 공개 혹은 비공개로 설정할 수 있습니다.
비공개로 설정하면, 애플리케이션을 통해 이미지에 접근할 수 있는 (친구로 등록되어 있는) 사용자들을 선택할 수 있습니다.

이 애플리케이션은 사용자의 이미지를 보는 기능을 제공합니다.
사용자는 애플리케이션을 통해 친구가 공개한 이미지를 볼 수 있습니다.

이 애플리케이션은 이미지에 메세지를 같이 작성할 수 있으며, 댓글을 작성할 수 있습니다.
또한 작성된 이미지에 좋아요를 표시할 수 있습니다.
메세지와 댓글, 좋아요는 세부 정보에 표시됩니다.

이 애플리케이션은 게시된 이미지의 세부 정보를 보는 기능도 지원합니다.
세부 정보로는 같이 작성된 메세지, 작성자, 댓글, 좋아요 숫자 및 작성 날짜가 표시된 이미지가 있습니다.


모든 데이터는 이미지를 게시한 사용자의 Solid Pod에 저장됩니다.
애플리케이션에서는 사용자의 Pod에서 모든 컨텐츠를 가져옵니다.


## 설치

다음 명령어를 통해서 설치가 가능합니다.

npm install

또는

yarn install


## 실행

다음 명령을 통해 실행이 가능합니다.

npm start

또는

yarn start

애플리케이션은 당신의 브라우저에서 [http://localhost:3000](http://localhost:3000)를 통해 사용 가능합니다.


## 빌드

다음 명령을 통해 배포용 애플리케이션을 빌드할 수 있습니다.

npm run build

또는

yarn build

빌드된 애플리케이션은 'build' 폴더에서 찾아볼 수 있습니다.

또한 정적 서버(ex. 'serve')를 실행하고 빌드 폴더를 전달할 수 있습니다.

serve -s ./build/ -l 3000
애플리케이션은 당신의 브라우저에서 [http://localhost:3000](http://localhost:3000)를 통해 사용 가능합니다.
