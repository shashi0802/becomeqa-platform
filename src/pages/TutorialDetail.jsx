import { useParams, Link } from 'react-router-dom';
import { useContentstackGlobal } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';
import { getFieldValue } from '../utils/contentHelpers';
import './TutorialDetail.css';

const TutorialDetail = () => {
  const { tutorialSlug } = useParams();
  
  // Fetch tutorial detail content from Contentstack
  const { data: tutorialData, loading, error } = useContentstackGlobal(CONTENT_TYPES.TUTORIAL_DETAIL);

  // Default tutorial details
  const defaultTutorials = {
    'selenium': {
      name: 'Selenium',
      icon: '🔷',
      tagline: 'Master Web Automation Testing with Selenium WebDriver',
      paragraphs: [
        {
          title: 'What is Selenium?',
          content: 'Selenium is a powerful open-source framework for automating web browsers. It provides a suite of tools for testing web applications across different browsers and platforms. Selenium WebDriver is the core component that allows you to write test scripts in various programming languages like Java, Python, C#, JavaScript, and Ruby. With Selenium, you can simulate user interactions such as clicking buttons, filling forms, navigating between pages, and validating web elements.'
        },
        {
          title: 'Why Learn Selenium?',
          content: 'Selenium is the most widely adopted web automation tool in the software testing industry. Learning Selenium opens up numerous career opportunities as a QA Automation Engineer, SDET, or Test Architect. It integrates seamlessly with popular testing frameworks like TestNG, JUnit, and Cucumber for BDD. Selenium also works well with CI/CD tools like Jenkins, making it essential for DevOps practices. Major companies like Google, Netflix, Amazon, and Microsoft use Selenium in their testing pipelines.'
        },
        {
          title: 'What You Will Learn',
          content: 'In our comprehensive Selenium training, you will learn everything from basics to advanced concepts. This includes setting up Selenium WebDriver, locating web elements using various strategies (ID, XPath, CSS Selectors), handling different types of web elements, working with waits and synchronization, managing browser windows and frames, handling alerts and pop-ups, implementing Page Object Model (POM), data-driven testing, and integrating with TestNG for test management. You will also work on real-world projects to gain practical experience.'
        }
      ],
      duration: '40+ Hours',
      modules: '12 Modules',
      projects: '5 Real Projects',
      certification: 'Yes'
    },
    'cypress': {
      name: 'Cypress',
      icon: '⚡',
      tagline: 'Modern End-to-End Testing Made Simple',
      paragraphs: [
        {
          title: 'What is Cypress?',
          content: 'Cypress is a next-generation front-end testing tool built for the modern web. Unlike Selenium, Cypress runs directly in the browser alongside your application, giving it native access to every element. This architecture enables faster, more reliable tests with automatic waiting, real-time reloads, and time-travel debugging. Cypress provides a complete end-to-end testing experience with built-in assertions, mocking, and stubbing capabilities.'
        },
        {
          title: 'Why Learn Cypress?',
          content: 'Cypress has gained massive popularity due to its developer-friendly approach and excellent debugging experience. It eliminates the flakiness commonly associated with end-to-end tests through automatic waiting and retry-ability. The Cypress Test Runner provides visual feedback during test execution, making it easy to understand what your tests are doing. With its growing ecosystem and community support, Cypress is becoming the go-to choice for many development teams.'
        },
        {
          title: 'What You Will Learn',
          content: 'Our Cypress training covers installation and project setup, writing your first tests, selecting elements and performing actions, assertions and validations, handling network requests with cy.intercept(), fixtures and test data management, custom commands, page object pattern in Cypress, API testing, visual testing integration, CI/CD integration with GitHub Actions and Jenkins, and best practices for writing maintainable tests.'
        }
      ],
      duration: '30+ Hours',
      modules: '10 Modules',
      projects: '4 Real Projects',
      certification: 'Yes'
    },
    'rest-assured': {
      name: 'Rest Assured',
      icon: '🔶',
      tagline: 'Master API Testing with Java',
      paragraphs: [
        {
          title: 'What is Rest Assured?',
          content: 'Rest Assured is a Java-based library that simplifies testing and validation of REST APIs. It provides a domain-specific language (DSL) for writing powerful yet readable API tests. Rest Assured supports all HTTP methods (GET, POST, PUT, DELETE, PATCH) and handles various authentication mechanisms including OAuth, Basic Auth, and API keys. It integrates seamlessly with testing frameworks like TestNG and JUnit.'
        },
        {
          title: 'Why Learn Rest Assured?',
          content: 'API testing is crucial in modern software development, especially with microservices architecture. Rest Assured is the industry standard for API testing in Java environments. It allows you to validate response status codes, headers, body content, and response times. With Rest Assured, you can easily serialize and deserialize JSON/XML payloads, making data validation straightforward. Companies increasingly demand API testing skills, making Rest Assured expertise highly valuable.'
        },
        {
          title: 'What You Will Learn',
          content: 'This comprehensive course covers REST API fundamentals, HTTP methods and status codes, setting up Rest Assured with Maven/Gradle, writing GET, POST, PUT, DELETE tests, request and response specifications, JSON and XML parsing, authentication and authorization testing, data-driven API testing, request chaining, logging and reporting, integration with CI/CD pipelines, and building a complete API testing framework from scratch.'
        }
      ],
      duration: '35+ Hours',
      modules: '11 Modules',
      projects: '4 Real Projects',
      certification: 'Yes'
    },
    'appium-studio': {
      name: 'Appium Studio',
      icon: '📱',
      tagline: 'Mobile App Automation for iOS and Android',
      paragraphs: [
        {
          title: 'What is Appium?',
          content: 'Appium is an open-source automation framework for testing native, hybrid, and mobile web applications on iOS and Android platforms. It uses the WebDriver protocol, allowing you to write tests in any language that has a Selenium client library. Appium works with real devices, emulators, and simulators, providing flexibility in your testing approach. It supports automation of native apps, hybrid apps, and mobile browsers.'
        },
        {
          title: 'Why Learn Appium?',
          content: 'Mobile applications are everywhere, and the demand for mobile automation testers is continuously growing. Appium allows you to use the same API to write tests for both iOS and Android, reducing the learning curve and code duplication. It is platform-agnostic and doesnt require app source code modification. Major companies use Appium for their mobile testing needs, making it a valuable skill for QA professionals looking to specialize in mobile testing.'
        },
        {
          title: 'What You Will Learn',
          content: 'Our Appium training covers mobile testing fundamentals, setting up Appium server and clients, Android SDK and Xcode setup, locating mobile elements using UI Automator and XCUITest, gestures and touch actions, handling permissions and alerts, testing hybrid applications, parallel execution on multiple devices, cloud testing with BrowserStack and Sauce Labs, integrating with TestNG and building a mobile testing framework.'
        }
      ],
      duration: '35+ Hours',
      modules: '10 Modules',
      projects: '3 Real Projects',
      certification: 'Yes'
    },
    'cucumber': {
      name: 'Cucumber',
      icon: '🥒',
      tagline: 'Behavior-Driven Development (BDD) Testing Framework',
      paragraphs: [
        {
          title: 'What is Cucumber?',
          content: 'Cucumber is a testing tool that supports Behavior-Driven Development (BDD). It allows you to write test scenarios in plain English using Gherkin syntax, making tests readable by non-technical stakeholders. Cucumber bridges the gap between business requirements and technical implementation by using a common language that everyone can understand. It supports multiple programming languages including Java, JavaScript, Ruby, and Python.'
        },
        {
          title: 'Why Learn Cucumber?',
          content: 'BDD has become a standard practice in Agile development teams. Cucumber helps improve collaboration between developers, testers, and business analysts by using a shared vocabulary. Test scenarios written in Gherkin serve as living documentation that stays up-to-date with the application. Learning Cucumber enhances your ability to work in cross-functional teams and makes your test automation more maintainable and business-focused.'
        },
        {
          title: 'What You Will Learn',
          content: 'This course covers BDD fundamentals and Gherkin syntax, writing feature files and scenarios, step definitions in Java, data tables and scenario outlines, hooks and tags, integrating Cucumber with Selenium and Rest Assured, generating reports with Cucumber Reports and Allure, parallel execution, best practices for BDD, and building a complete BDD framework with Page Object Model.'
        }
      ],
      duration: '25+ Hours',
      modules: '8 Modules',
      projects: '3 Real Projects',
      certification: 'Yes'
    },
    'postman': {
      name: 'Postman',
      icon: '📮',
      tagline: 'API Development and Testing Platform',
      paragraphs: [
        {
          title: 'What is Postman?',
          content: 'Postman is a comprehensive API development and testing platform used by millions of developers worldwide. It provides an intuitive interface for sending HTTP requests, inspecting responses, and automating API tests. Postman supports collections, environments, pre-request scripts, and test scripts written in JavaScript. It also offers collaboration features, documentation generation, and mock servers for API development.'
        },
        {
          title: 'Why Learn Postman?',
          content: 'Postman is the most popular tool for API testing and development, used by companies of all sizes. Its user-friendly interface makes it easy to get started with API testing without deep programming knowledge. Postman collections can be shared across teams, promoting collaboration. With Newman (Postmans CLI), you can run collections in CI/CD pipelines. Learning Postman is essential for any QA engineer working with APIs.'
        },
        {
          title: 'What You Will Learn',
          content: 'Our training covers Postman interface and features, creating and organizing requests, working with environments and variables, writing test scripts and assertions, collection runner and data-driven testing, pre-request scripts, mock servers, API documentation, Newman CLI for CI/CD integration, Postman monitors for API monitoring, and advanced workflows with Postman Flows.'
        }
      ],
      duration: '20+ Hours',
      modules: '8 Modules',
      projects: '3 Real Projects',
      certification: 'Yes'
    },
    'testng': {
      name: 'TestNG',
      icon: '🧪',
      tagline: 'Next Generation Testing Framework for Java',
      paragraphs: [
        {
          title: 'What is TestNG?',
          content: 'TestNG is a testing framework inspired by JUnit but introducing new functionalities that make it more powerful and easier to use. It is designed to cover all categories of tests: unit, functional, end-to-end, and integration. TestNG provides powerful features like annotations, grouping, parameterization, parallel execution, and flexible test configuration through XML files. It is the preferred framework for Selenium test automation.'
        },
        {
          title: 'Why Learn TestNG?',
          content: 'TestNG is the industry standard testing framework for Java-based automation projects. It provides better test organization and execution control compared to JUnit. Features like data providers, test dependencies, and parallel execution make it ideal for large-scale automation projects. TestNG integrates well with build tools like Maven and Gradle, and CI/CD tools like Jenkins. Most Selenium automation frameworks are built on TestNG.'
        },
        {
          title: 'What You Will Learn',
          content: 'This course covers TestNG annotations and their lifecycle, assertions and soft assertions, grouping and prioritizing tests, parameterization with DataProviders, parallel test execution, TestNG XML configuration, listeners and reporters, retry logic for failed tests, integrating TestNG with Selenium, generating Extent and Allure reports, and building a robust test automation framework.'
        }
      ],
      duration: '20+ Hours',
      modules: '7 Modules',
      projects: '2 Real Projects',
      certification: 'Yes'
    },
    'git': {
      name: 'Git',
      icon: '🔀',
      tagline: 'Version Control for Test Automation',
      paragraphs: [
        {
          title: 'What is Git?',
          content: 'Git is a distributed version control system that tracks changes in source code during software development. It allows multiple developers to work on the same project simultaneously without conflicts. Git maintains a complete history of all changes, enabling you to revert to previous versions when needed. It is the foundation of modern software development workflows and is essential for any automation engineer.'
        },
        {
          title: 'Why Learn Git?',
          content: 'Git is a fundamental skill required in virtually every software development role. It enables collaboration through branching and merging strategies. Platforms like GitHub, GitLab, and Bitbucket provide hosting for Git repositories along with additional features like pull requests, code reviews, and CI/CD integration. Understanding Git is crucial for maintaining test automation code and collaborating with development teams.'
        },
        {
          title: 'What You Will Learn',
          content: 'Our Git training covers version control fundamentals, Git installation and configuration, basic commands (init, add, commit, push, pull), branching and merging strategies, resolving merge conflicts, Git workflows (GitFlow, trunk-based), working with remote repositories, pull requests and code reviews, Git hooks, and best practices for managing test automation code in Git repositories.'
        }
      ],
      duration: '15+ Hours',
      modules: '6 Modules',
      projects: '2 Real Projects',
      certification: 'Yes'
    },
    'docker': {
      name: 'Docker',
      icon: '🐳',
      tagline: 'Containerization for Test Automation',
      paragraphs: [
        {
          title: 'What is Docker?',
          content: 'Docker is a platform for developing, shipping, and running applications in containers. Containers package an application with all its dependencies, ensuring consistent behavior across different environments. For test automation, Docker enables running tests in isolated, reproducible environments. Selenium Grid on Docker allows parallel test execution across multiple browsers without complex infrastructure setup.'
        },
        {
          title: 'Why Learn Docker?',
          content: 'Docker has revolutionized how we deploy and run applications, including test automation. It eliminates the "it works on my machine" problem by providing consistent environments. Docker makes it easy to set up Selenium Grid for parallel test execution. Many CI/CD pipelines run tests in Docker containers. Understanding Docker is increasingly important for QA engineers working in DevOps environments.'
        },
        {
          title: 'What You Will Learn',
          content: 'This course covers Docker fundamentals and architecture, installing Docker, Docker images and containers, Dockerfile creation, Docker Compose for multi-container applications, setting up Selenium Grid with Docker, running tests in Docker containers, Docker volumes and networking, integrating Docker with CI/CD pipelines, and best practices for containerized test automation.'
        }
      ],
      duration: '20+ Hours',
      modules: '7 Modules',
      projects: '3 Real Projects',
      certification: 'Yes'
    },
    'maven': {
      name: 'Maven',
      icon: '📦',
      tagline: 'Build Automation for Java Projects',
      paragraphs: [
        {
          title: 'What is Maven?',
          content: 'Maven is a powerful build automation and project management tool primarily used for Java projects. It uses a Project Object Model (POM) file to manage project dependencies, build processes, and documentation. Maven simplifies dependency management by automatically downloading required libraries from central repositories. It standardizes project structure and provides a consistent build process across different development environments.'
        },
        {
          title: 'Why Learn Maven?',
          content: 'Maven is the standard build tool for Java-based test automation frameworks. It manages all your project dependencies including Selenium, TestNG, and reporting libraries. Maven integrates seamlessly with CI/CD tools like Jenkins, enabling automated test execution. Understanding Maven is essential for setting up and maintaining professional test automation projects. It also supports plugins for generating test reports and documentation.'
        },
        {
          title: 'What You Will Learn',
          content: 'Our Maven training covers Maven fundamentals and installation, POM file structure and configuration, dependency management, Maven repositories (local, central, remote), Maven build lifecycle and phases, creating test automation projects with Maven, Maven profiles for different environments, Surefire plugin for running tests, generating reports, integration with Jenkins and other CI tools, and best practices for managing automation projects.'
        }
      ],
      duration: '15+ Hours',
      modules: '6 Modules',
      projects: '2 Real Projects',
      certification: 'Yes'
    }
  };

  // Convert slug to key format
  const tutorialKey = tutorialSlug?.toLowerCase().replace(/-/g, ' ').replace(/\s+/g, '-') || '';
  
  // Find tutorial by matching slug or name
  const findTutorial = () => {
    // Try exact match first
    if (defaultTutorials[tutorialSlug]) {
      return defaultTutorials[tutorialSlug];
    }
    
    // Try matching by converting slug
    for (const [key, value] of Object.entries(defaultTutorials)) {
      if (key === tutorialSlug || 
          key.replace(/-/g, ' ') === tutorialSlug?.replace(/-/g, ' ') ||
          value.name.toLowerCase().replace(/\s+/g, '-') === tutorialSlug) {
        return value;
      }
    }
    
    return null;
  };

  const tutorial = tutorialData || findTutorial();

  if (loading) {
    return (
      <div className="tutorial-detail-page">
        <div className="container">
          <div className="loading">Loading tutorial...</div>
        </div>
      </div>
    );
  }

  if (!tutorial) {
    return (
      <div className="tutorial-detail-page">
        <div className="container">
          <div className="not-found">
            <h1>Tutorial Not Found</h1>
            <p>The tutorial you're looking for doesn't exist.</p>
            <Link to="/tutorials" className="btn btn-primary">Back to Tutorials</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tutorial-detail-page">
      <div className="tutorial-hero">
        <div className="container">
          <div className="tutorial-hero-content">
            <span className="tutorial-icon-large">{tutorial.icon}</span>
            <h1>{tutorial.name}</h1>
            <p className="tagline">{tutorial.tagline}</p>
            <div className="tutorial-stats">
              <div className="stat">
                <span className="stat-value">{tutorial.duration}</span>
                <span className="stat-label">Duration</span>
              </div>
              <div className="stat">
                <span className="stat-value">{tutorial.modules}</span>
                <span className="stat-label">Modules</span>
              </div>
              <div className="stat">
                <span className="stat-value">{tutorial.projects}</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-value">{tutorial.certification}</span>
                <span className="stat-label">Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tutorial-content">
          <div className="tutorial-paragraphs">
            {tutorial.paragraphs.map((para, index) => (
              <section key={index} className="tutorial-section">
                <h2>{para.title}</h2>
                <p>{para.content}</p>
              </section>
            ))}
          </div>

          <div className="enrollment-cta">
            <div className="cta-content">
              <h3>Ready to Master {tutorial.name}?</h3>
              <p>Join our comprehensive training program and become an expert in {tutorial.name}. Get hands-on experience with real-world projects and earn your certification.</p>
              <div className="cta-features">
                <span>✓ Live Interactive Sessions</span>
                <span>✓ Hands-on Projects</span>
                <span>✓ Certificate of Completion</span>
                <span>✓ Lifetime Access</span>
              </div>
              <Link to="/enrollment" className="btn btn-primary btn-large enroll-btn">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>

        <div className="back-link">
          <Link to="/tutorials">← Back to All Tutorials</Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialDetail;

