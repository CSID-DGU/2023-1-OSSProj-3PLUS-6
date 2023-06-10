

## 00. 프로젝트 소개
동국대학교 희망강의 신청 서비스를 오픈소스를 활용해서 구현하고
기존의 불편했던 점들을 개선하는 프로젝트입니다.
<br></br>
<br></br>

## 01. 프로젝트 방향
기존 동국대학교 희망강의 신청 서비스에 아래 기능을 추가 및 보완했습니다.
 - 드래그 앤 드롭을 통한 강의 신청: 기존에는 버튼을 통한 신청 기능만 제공함.
 - 시간표 뷰 기능 개선 
	 - `교과목명`과 `교원명` 표기: 기존에는 학수번호만 표기함.
	 - `시간표가 겹치는 강의` 표기: 기존에는 시간이 겹치는 강의는 '중복'으로만 표기함.
	 -  `9:00 - 10:00` 으로 시간 표시: 기존에는 `1.0 - 2.0 ` 으로 시간을 표기함.

<br></br>
<br></br>

## 02. 기능
본 프로젝트는 크게 유저, 강의 검색, 강의 신청, 강의 조회, 강의 삭제 등 다섯가지 기능을 제공합니다.

 - 유저 
	 - 회원가입
	 - 로그인
	 - 로그아웃
	 - 정보조회
- 강의검색
	- 필터링 검색
	- 텍스트 검색
 - 강의신청
	 - 버튼 신청
	 - 드래그 앤 드롭 신청
 - 강의조회
	 - 테이블뷰
	 - 시간표뷰
 - 강의삭제
<br></br>
<br></br>
## 03. 실행 방법
### 1) local에서 실행하기

 - `git clone https://github.com/CSID-DGU/2023-1-OSSProj-3PLUS-6.git`
 - `node 설치` 
 - `backend 실행`
	 - `backend 폴더 내부로 이동: cd ./backend`  
	 - `npm install`
	 - `nodemon server.js`
- frontend 실행
	- `frontend 폴더 내부로 이동: cd ./frontend`
	- `npm install`
	- `npm start`
- `브라우저에 localhost:3000으로 접속`

### 2) URL로 실행하기
https://www.3plus.world/signin
<br></br>
<br></br>

## 04. 기술 스택
|역할|종류|
|-|-| 
|DB|![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
|사용언어|![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
|서버 프레임워크| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
|프론트 프레임워크|![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
|스타일링|![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)
|패키지매니저|![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)                                         
|배포| 클라우드타입

<br />
<br/>

## 05. 팀원소개
|남윤형|신서영|이윤서
|:-:|:-:|:-:|
|<img src="https://avatars.githubusercontent.com/u/117243352?v=4" width="200px" />|<img src="https://avatars.githubusercontent.com/u/124651984?v=4" width="200px" />|<img src="https://avatars.githubusercontent.com/u/112849440?v=4" width="200px" />|
|[@yunhyungNAM](https://github.com/yunhyungNAM)|[@banban555](https://github.com/banban555)|[@Yunseo Lee](https://github.com/lys3269)|
<br />
