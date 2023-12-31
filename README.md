# 디자인 패턴 패캠 강의 정리

디자인 패턴은 좋은 설계를 유도하여 소프트웨어의 유지보수에 들어가는 비용을 절약할 수 있음

## SOLID 원칙

1. 단일 책임 원칙 (Single Responsibility Principle)
   - 하나의 클래스는 하나의 기능만을 구현하도록 한다. 즉, 어떤 클래스를 변경하는 이유는 하나이어야 한다.
   - 한 클래스에서 여러 기능을 제공하게 되면 유지보수가 어려움
2. 개방 폐쇄의 원칙 (Oepn-Closed Principle)
   - 객체 자신의 수정에 대해서는 유연하고, 다른 클래스가 수정될 때는 영향을 받지 않는다.
   - 인터페이스나 추상클래스를 통해 접근 하도록 함
   - 예 : 자바 JDBC, I/O Stream
3. 리스코프 치환 원칙 (Liskov Subsititution Principle)
   - 상위 클래스에 제공되는 여러 기능은 하위 클래스가 모두 사용가능 해야 한다.
   - IS-A 관게, "is a kind of" 관계
4. 인터페이스 분리 원칙 (Interface Segregation Principle)

   - 제공하는 기능에 대한 인터페이스에만 종속적이어야 함
   - 만약 하나의 객체가 여러 기능을 제공해야 한다면 ( 단일 책임 원칙에 위배 ) 이때 클라이언트가 사용할 수 있는 여러 인터페이스로 분리하여 제공하면 클라이언트가 사용하지 않는 기능에 종속적이지 않을 수 있음

5. 의존 역전 원칙 (Dependency Inversion Principle)

   - 의존 관계는 구체적인 것보다는 추상적인 것에 의존한다.
   - 구체적인 것은 이미 구현이 되어있고 변하기 쉬운것
   - 추상적인 것은 인터페이스나 추상 클래스(상위 클래스)
