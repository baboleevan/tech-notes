---
description: 교살자 패턴
---

# 스트랭글러 패턴 (Strangler Pattern)

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption><p>Strangler figs</p></figcaption></figure>

Strangler Pattern은 소프트웨어 개발에서 기존의 레거시 시스템을 점차 새로운 시스템으로 대체하는 방법론 중 하나이다. 주로 큰 규모의 애플리케이션 또는 서비스에서 적용되며, 이를 통해 대규모의 리디자인이나 리팩토링보다 안전하게 기존 서비스를 개선하거나 교체할 수 있다.&#x20;

기존에 구축된 레거시 시스템을 한 번에 완전히 대체하는 **빅뱅 방식** 대신, 시스템의 **일부를 점진적으로 대체**하면서 새로운 시스템으로 전환하는 방식이다.

주로 백엔드 애플리케이션을 새로운 아키텍처로 점진적으로 마이그레이션하는 경우 이 패턴을 사용한다.

예를 들어 모놀리식 아키텍처를 마이크로 서비스 아키텍처로(MSA) 전환한다고 할때, 기존에 구축된 기능을 한 번에 옮기는 것은 예상치 못한 여러 가지 문제를 야기 할 수 있으므로, 일부분씩 MSA로 분리하여 적용 하면 사이드 이펙트를 최소하 할 수 있다.

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

* 레거시 시스템의 일부를 새로운 애플리케이션 또는 서비스로 교체한다.
* 일정 기간이 지난 후, (새로운 애플리케이션 또는 서비스가 정상적으로 동작한다면) 대체된 레거시 기능을 제거한다.
* 위 작업을 반복한다.
* 레거시 시스템이 모두 사라지고 완전히 새로운 애플리케이션(또는 서비스)로 서비스가 대체된다.

Martin Fowler가 아내인 Cindy Folwer와 함께 호주에 갔을 때 본 Strangler figs라는 이름의 식물에서 기원한다.\
다음은 마틴 파울러의 블로그 포스트 "[StranglerFigApplication](https://martinfowler.com/bliki/StranglerFigApplication.html)"에서 발췌한 내용이다.
