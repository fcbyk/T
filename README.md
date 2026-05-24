# demo68

## IoC
> Spring的IoC（Inversion of Control，控制反转）容器是Spring框架的核心，主要用来管理应用程序中的组件（或称为Bean）。

IoC容器的作用包括：

1. 对象的创建和管理：IoC容器负责实例化、配置和管理应用中的对象实例。开发人员只需要通过配置文件或注解告诉容器哪些类是Bean，容器会负责创建这些Bean并在需要时将它们注入到其他组件中。
2. 依赖注入：IoC容器通过依赖注入（Dependency Injection，DI）将对象之间的依赖关系在外部进行配置。这样可以降低组件之间的耦合度，使得代码更加灵活、可维护和可测试。
3. 生命周期管理：IoC容器管理Bean的生命周期，包括初始化和销毁。开发人员可以通过回调方法（如@PostConstruct和@PreDestroy）来定义Bean的初始化和销毁逻辑。
4. AOP支持：IoC容器通常集成了AOP（Aspect-Oriented Programming，面向切面编程）功能，可以方便地实现横切关注点的功能，如事务管理、日志记录等。
5. 对象的作用域管理：IoC容器管理Bean的作用域，如单例、原型、会话、请求等，确保Bean的实例化和使用符合预期。

总的来说，Spring的IoC容器帮助开发人员解耦组件、简化配置、提高可维护性，并且提供了很多额外的功能，使得应用程序的开发更加高效和灵活。


## ApplicationContext
ApplicationContext 是 Spring 框架中的一个接口，它是 Spring IoC 容器的顶层接口，
定义了一系列方法用于访问和管理应用中的 Bean。

实际上，Spring 框架提供了多种实现了 ApplicationContext 接口的类，
用于支持不同的配置方式和应用场景，比如基于 XML 配置、基于注解配置、基于 Java 配置等。

这些不同的实现类包括 ClassPathXmlApplicationContext、AnnotationConfigApplicationContext 等，它们都是 ApplicationContext 接口的具体实现。


## ClassPathXmlApplicationContext
ClassPathXmlApplicationContext 是 Spring 框架中用于基于 XML 配置文件创建 IoC 容器的一个实现类。

它可以从类路径中加载指定的 XML 配置文件，并根据配置文件中的信息来实例化和管理 Bean。

下面是关于 ClassPathXmlApplicationContext 的一些重要信息：

1. 加载方式：ClassPathXmlApplicationContext 会从类路径中加载指定的 XML 配置文件，这意味着配置文件通常会放在项目的 src/main/resources 目录下或者在 Jar 包中的根目录下。
2. 配置文件：XML 配置文件中包含了应用程序中所有 Bean 的定义、依赖关系以及其他配置信息。
3. Bean 实例化：根据 XML 配置文件中的信息，ClassPathXmlApplicationContext 负责实例化应用程序中的 Bean 对象。
4. 容器功能：创建 ClassPathXmlApplicationContext 对象后，可以通过该对象来访问和管理其中的 Bean，比如获取 Bean 实例、处理依赖注入、执行 AOP 等操作。

使用 ClassPathXmlApplicationContext 可以方便地基于 XML 配置文件创建 Spring IoC 容器，
是 Spring 框架中常用的一种创建 IoC 容器的方式。

