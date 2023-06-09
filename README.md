**요약**

- 간단한 **예약 서비스 시나리오를** **nest.js**가 지원하는 마이크로서비스 라이브러리를 통해 구현

**역할**

- 1인 개인 프로젝트

**기간**

- 2023.01

**목적**

- **“그동안 써왔던 기술의 익숙함에서 벗어나기”**가 이번 프로젝트의 목적
- 간단한 **예약 시나리오**를 nest.js에서 지원하는 마이크로서비스 아키텍처로 구현함으로써 **새로운 기술 및 관점 습득**
- 그동안 마이크로서비스를 배포할 때 이용한 **aws lambda, serverless framework 조합에서 벗어나** Kubernetes의 컨테이너 배포 관리 시스템을 이용해보며 **새로운 기술 및 관점 학습**
- 배포를 하는 인프라도 그동안 써왔던 **AWS**에서 **GCP**로 변경해서 장단점을 비교하며 **시야를 넓히고자 함**

**세부 기능**

- 회원 가입 및 인증의 책임을 가진 auth 모듈, 예약의 책임을 가진 reservation 모듈, 결제의 책임을 가진 payment 모듈로 나눈 후 각각의 모듈이 tcp transport 방식으로 통신하는 아키텍처
- 예약 모듈인 reservation 모듈을 중심으로 예약을 하기 위한 인증은 auth module, 예약 후 결제를 위한 모듈은 payment 모듈에서 각각 처리하는 구조

**프로젝트를 통해 배운 점**

- nest.js가 지원하는 마이크로서비스 방식이 아주 간편했고, 구조적인 장점과 맞물려 빠르게 개발할 수 있어 생산성 좋아 **추후에 필요할 경우 쓸 수 있겠다는 생각**.
- lambda와 비교했을 때 컨테이너의 설정과 관리가 생각보다 작업 워크로드가 컸음. 넥스트 스텝으로 컨테이너 배포와 관리의 자동화를 배우면 좋겠다는 생각.
- 비교했을 때 이식성이 좋고 서비스를 패키징 할 수 있어 균일한 상태를 유지한다는 점에서는 장점이 확실했음
- 무엇보다 그동안 익숙했던 기술 스택에서 벗어나 다른 기술을 사용함으로써 시야를 넓힐 수 있었고 **또 다른 학습의 계기**가 되었다는 점에 의의.

**사용 기술**

- language: Typescript
- database: mongoDB
- backend: nest.js, Docker, kubernetes
- Infra: Google Cloud Platform (kubernetes engine, ingress, Artifact Registry…)