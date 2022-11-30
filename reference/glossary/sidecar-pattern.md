---
description: 어플리케이션 컨테이너와 독립적으로 동작하는 별도의 컨테이너를 붙이는 패턴
---

# 사이드카 패턴 (Sidecar Pattern)

****

![image](https://user-images.githubusercontent.com/42582516/108616806-4f36d300-7454-11eb-8d58-ceadd4f438ac.png)

일반적으로 사이드카 패턴은 다음과 같이 구성된다. 사이드카 서비스는 어플리케이션의 일부일 필요는 없으며 애플리케이션에 연결되어 있다. 사이드카는 기본 어플리케이션을 사용해서 배포되는 프로세스 또는 서비스를 지원한다.



**예시**

* 정적 파일 컨텐츠를 처리하도록 NGINX Proxy를 node.js 서비스 인스턴스 앞에 배치한다.
* 보안을 위해 사이드카로 NGINX reverse proxy 등을 붙여서 HTTPS 통신을 한다.
* 성능을 위해 사이드카로 NGINX content cache 등을 붙인다.
* 컨테이너 외부로 로그를 모으기 위해 logstash, fluentd 등을 붙인다. (centralized logging)

**장점**

* 상호 의존성을 줄일 수 있다.
* 사이드카 장애 시 어플리케이션이 영향을 받지 않는다. (Isolation)
* 사이드카 적용/변경/제거 등의 경우에 어플리케이션은 수정이 필요 없다.
* 어플리케이션과 사이드카를 다른 언어로 만들 수 있다.
* 대부분 같은 스토리지를 공유할 수 있기 때문에 공유에 대한 고민이 적다.

**단점**

* 어플리케이션이 너무 작은 경우 배 보다 배꼽이 커질 수 있다.
* 프로세스간 통신이 많고 최적화 해야 한다면, 어플리케이션에서 함께 처리하는게 좋을 수 있다.

**참고링크**

* [The Sidecar Pattern](https://blog.davemdavis.net/2018/03/13/the-sidecar-pattern/)
* [Sidecar pattern - Azure docs](https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar)
* [How Pods manage multiple Containers - kubernetes Pod Overview doc](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/#how-pods-manage-multiple-containers)
* [Deploying an NGINX Reverse Proxy Sidecar Container on Amazon ECS](https://aws.amazon.com/ko/blogs/compute/nginx-reverse-proxy-sidecar-container-on-amazon-ecs/)
* [Centralized logging in Kubernetes](https://medium.com/@maanadev/centralized-logging-in-kubernetes-d5a21ae10c6e)

**원문링크** 

* [https://blog.leocat.kr/notes/2019/02/16/cloud-sidecar-pattern](https://blog.leocat.kr/notes/2019/02/16/cloud-sidecar-pattern)\
* [https://azderica.github.io/00-design-pattern-sidecar/](https://azderica.github.io/00-design-pattern-sidecar/)
