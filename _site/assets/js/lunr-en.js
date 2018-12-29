var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  

  
  
    idx.add({
      title: "Adapter",
      excerpt: "This course will help in developing initial platform understanding…\n",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Environment",
      excerpt: "This help you understanding the debugging option to maintain environments…\n",
      categories: [],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Platform",
      excerpt: "Understanding rules and notification framework in APPSeCONNECT…\n",
      categories: [],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Rules",
      excerpt: "This course will help in developing initial platform understanding…\n",
      categories: [],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Touchpoint",
      excerpt: "This course will help in developing initial platform understanding…\n",
      categories: [],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Workflow",
      excerpt: "This course will help in developing initial platform understanding…\n",
      categories: [],
      tags: [],
      id: 5
    });
    
  

  
  
    idx.add({
      title: "SDK Overview",
      excerpt: "APPSeCONNECT is a generic platform that helps a developer as well as an integration consultant to work on specific application,...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 6
    });
    
  
    idx.add({
      title: "Overview on adapter development",
      excerpt: "Adapter in terms of APPSeCONNECT is a piece of software component external to the application core is plugged in to...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 7
    });
    
  
    idx.add({
      title: "Overview on plugin development",
      excerpt: "Plugins are a piece of software which lets to tightly couple with the platform to enhance the platform and /...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 8
    });
    
  
    idx.add({
      title: "Overview on policies development",
      excerpt: "Policies are special modules which hooks over an Http pipeline of API execution. In addition to prebuilt policies, APPSeCONNECT also...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 9
    });
    
  
    idx.add({
      title: "Troubleshooting",
      excerpt: "\n",
      categories: ["SDK"],
      tags: ["developers"],
      id: 10
    });
    
  
    idx.add({
      title: "Inspecting Process / Transaction Logs",
      excerpt: "\n",
      categories: ["SDK"],
      tags: ["developers"],
      id: 11
    });
    
  
    idx.add({
      title: "Implementing Adapter basic functionality viz, Pull, Push & Resync",
      excerpt: "It is evident that implementating adapter requires extensive knowledge about the API which you want to connect to, such that...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 12
    });
    
  
    idx.add({
      title: "How to design an interface for Credentials",
      excerpt: "APPSeCONNECT adapter development SDK allows one to implement and create user interface for credentials. In case of OnPremise agent, you...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 13
    });
    
  
    idx.add({
      title: "Developing APPResource Methods",
      excerpt: "Application resources are special methods that can be added on the adapter code using the interface IAppResources which can be...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 14
    });
    
  
    idx.add({
      title: "Handling various events of Adapter",
      excerpt: "APPSeCONNECT provides a number of events which you as a developer can hook into, to write code specially when the...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 15
    });
    
  
    idx.add({
      title: "How to test an Adapter",
      excerpt: "Adapter development is a common practice, and one of the most challenging thing to do is to debug an adapter...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 16
    });
    
  
    idx.add({
      title: "Implementing Action filter Parser",
      excerpt: "Action filters are special key-value data store for each integration points which provides functionality to have hierarchy and can invoke...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 17
    });
    
  
    idx.add({
      title: "Logging and Tracing",
      excerpt: "Adapter works on background always to communicate data between application and APPSeCONNECT. As there are a large part of code...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 18
    });
    
  
    idx.add({
      title: "Storing Transactional Data",
      excerpt: "Adapter supports a number of storages which you can make use of to perform various tasks. For an adapter developer,...",
      categories: ["SDK"],
      tags: ["developers,reseller"],
      id: 19
    });
    
  
    idx.add({
      title: "Choosing Apps for Integration",
      excerpt: "\n",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 20
    });
    
  
    idx.add({
      title: "Overview of API Management",
      excerpt: "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 21
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 22
    });
    
  
    idx.add({
      title: "Overview of AppseConnect",
      excerpt: "APPSeCONNECT is provider of both hybrid and cloud hosted applications which can connect two or more applications irrespective of ERP,...",
      categories: [],
      tags: ["developers"],
      id: 23
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 24
    });
    
  
    idx.add({
      title: "Quickstart guides to create APIs",
      excerpt: "API Management of APPSeCONNECT helps an organization to create, maintain and publish APIs for their various data sources such that...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 25
    });
    
  
    idx.add({
      title: "Common Use Cases for API management",
      excerpt: "APIs are tje central to any application development process. As data forms an important part of any business it is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 26
    });
    
  
    idx.add({
      title: "Getting Started to APPSeCONNECT",
      excerpt: "CUSTOMER PROFILE INFORMATION This section enables you to quickly access your profile after logging into the application. This is where...",
      categories: [],
      tags: ["developers"],
      id: 27
    });
    
  
    idx.add({
      title: " Creating proxy endpoint",
      excerpt: "Proxies are the full REST (Representational State Transfer) services which allows to create proxy over a set of existing data...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 28
    });
    
  
    idx.add({
      title: " Creating Webhook endpoint",
      excerpt: "Webhooks are custom callbacks from an application which is generated by the caller and data is pushed to all of...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 29
    });
    
  
    idx.add({
      title: "Create Api Using Custom Datasource",
      excerpt: "title: “Create API to Connect On-premise Database” toc: true tag: developers APIs is required when you don’t have an existing...",
      categories: [],
      tags: [],
      id: 30
    });
    
  
    idx.add({
      title: "Transformation",
      excerpt: "This document will guide you through the TRANSFORMATION functionality in APPSeCONNECT portal. TRANSFORMATION is the field where the corresponding to...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 31
    });
    
  
    idx.add({
      title: "Steps to define logic over destination mapping",
      excerpt: "Steps to define logic over destination mapping Mapping in APPSeCONNECT is done so that a Source Application can communicate with...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 32
    });
    
  
    idx.add({
      title: "Basics of Source-Destination Mapping",
      excerpt: "Mapping is done to initiate the transformation process successfully between the Source and the Destination apps. This document will help...",
      categories: ["Transformation"],
      tags: ["developers"],
      id: 33
    });
    
  
    idx.add({
      title: "Architecture",
      excerpt: "Workflow is a visual representation of a business process integration, which helps you as an user to orchestrate a business...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 34
    });
    
  
    idx.add({
      title: "Overview of Workflows",
      excerpt: "Workflow is group of instructions to the integration service in APPSeCONNECT. APPSeCONNECT workflow application can be considered as a strong...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 35
    });
    
  
    idx.add({
      title: "Create Api Connecting To Api",
      excerpt: "\ntitle: “Create API proxy existing API”\ntoc: true\ntag: developers\n",
      categories: [],
      tags: [],
      id: 36
    });
    
  
    idx.add({
      title: "Quickstart guides to create Workflow",
      excerpt: "Workflows are the diagrammatic representation of a business process. As an organization, you can have a number of business processes...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 37
    });
    
  
    idx.add({
      title: "Steps to choose your workflow",
      excerpt: "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 38
    });
    
  
    idx.add({
      title: "Policy Overview",
      excerpt: "Policies are hooks to an API which you can punch at differnt levels of execution. They are powerful capabilities to...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 39
    });
    
  
    idx.add({
      title: "Quota for a Key policy",
      excerpt: "The Rate-limit quota policy prevents an API usage spikes on per user basis, such that if the same API is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 40
    });
    
  
    idx.add({
      title: "Create API to consume Webhooks",
      excerpt: "\n",
      categories: ["API-Management"],
      tags: ["developers","usecases"],
      id: 41
    });
    
  
    idx.add({
      title: "Steps to create your first workflow",
      excerpt: "Introduction This section will guide you through workflow creation &amp; configuration in simple steps. By reading this section of the...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 42
    });
    
  
    idx.add({
      title: "Filter Request by IP policy",
      excerpt: "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 43
    });
    
  
    idx.add({
      title: "Deploying a workflow and executing it",
      excerpt: "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 44
    });
    
  
    idx.add({
      title: "Listing of Snapshot for a Workflow for OP Agent",
      excerpt: "List of snapshot is a pictorial representation of the executed workflow at various node level. Here the user will get...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 45
    });
    
  
    idx.add({
      title: "Nodes and Link overview",
      excerpt: "Workflow in APPSeCONNECT generates flow that executes integration endpoints one by one through our Micro-service architecture and updates business data...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 46
    });
    
  
    idx.add({
      title: "GET Node",
      excerpt: "What is Get Node? GET node is used for getting data from an application by using the API provided by...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 47
    });
    
  
    idx.add({
      title: "PROCESS Node",
      excerpt: "What is Process Node? PROCESS node is used for transforming data from one format to another format based on the...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 48
    });
    
  
    idx.add({
      title: "Attribute Mapping of workflow",
      excerpt: "An implementer will be able to have a source to destination mapping, such that complex data transformation could be performed...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 49
    });
    
  
    idx.add({
      title: "Validate http headers policy",
      excerpt: "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header or a specified...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 50
    });
    
  
    idx.add({
      title: "POST Node",
      excerpt: "What is Post Node? POST node is used for pushing data to an application based on the API provided by...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 51
    });
    
  
    idx.add({
      title: "Debugging workflows",
      excerpt: "As workflow provides end to end business flow mapping, debugging and changing workflow mapping and links is often a business...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 52
    });
    
  
    idx.add({
      title: "Compression Policy",
      excerpt: "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 53
    });
    
  
    idx.add({
      title: "FILTER Node",
      excerpt: "What is filter node? This node is used to fetch a subset of data from an original data packet based...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 54
    });
    
  
    idx.add({
      title: "Response content format identification policy",
      excerpt: "Reponse Content Format policy inspects Content-Type for each HTTP request header and based upon the identification,it modifies the response content....",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 55
    });
    
  
    idx.add({
      title: "DELAY Node",
      excerpt: "What is Delay node? DELAY node is used to delay or stop an execution flow for a specific period. For...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 56
    });
    
  
    idx.add({
      title: "Configuring APPSeCONNECT for API Hosting",
      excerpt: "APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently. Configuring APPSeConnect For...",
      categories: ["API-Management"],
      tags: ["developers","implementation"],
      id: 57
    });
    
  
    idx.add({
      title: "HALT/RESUME Node",
      excerpt: "What is halt-resume node? HALT and RESUME nodes are used in a combination. We implement HALT node to halt the...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 58
    });
    
  
    idx.add({
      title: "Working with Loops",
      excerpt: "What is Loop Node? In APPSeCONNECT Workflow using a Self-loop, we can repeatedly execute an individual node without affecting the...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 59
    });
    
  
    idx.add({
      title: "Merge Node",
      excerpt: "What is Merge Node? This node is used to merge smaller data chunks into a single data packet. Like a...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 60
    });
    
  
    idx.add({
      title: "Rule Node",
      excerpt: "What is Rule Node? This node is used for decision making during workflow execution. A rule can be applied on...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 61
    });
    
  
    idx.add({
      title: "Sequencer Node",
      excerpt: "What is Sequencer Node? This node is used to order elements by a certain attribute. This node can be applied...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 62
    });
    
  
    idx.add({
      title: "Splitter Node",
      excerpt: "What is Splitter Node? This node is used to split a data packet into smaller chunks for processing in small...",
      categories: ["Workflow"],
      tags: ["developers","nodes"],
      id: 63
    });
    
  
    idx.add({
      title: "Choose Applications from catalog",
      excerpt: "API Proxies are API services which one can create to connect to a remote data source or multiple data sources....",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 64
    });
    
  
    idx.add({
      title: "Workflow Actions",
      excerpt: "Why do you need action? Workflow is capable of generating action by placing an action node directly on the workflow...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 65
    });
    
  
    idx.add({
      title: "Sending Emails",
      excerpt: "Email Action Notification This node is used to send an email notification to a user during workflow execution. For example,...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 66
    });
    
  
    idx.add({
      title: "Generating Support tickets",
      excerpt: "Support Ticket Notification Using this node user can create a support ticket during workflow execution. For example, after data is...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 67
    });
    
  
    idx.add({
      title: "Webhook callback",
      excerpt: "Webhook Callback Action The concept of a WebHook is simple. A webhook occurs when something happens; it is a simple...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 68
    });
    
  
    idx.add({
      title: "Storing Files",
      excerpt: "Storage Action Using this node user can store data in text file during workflow execution for future reference. Created file...",
      categories: ["Workflow"],
      tags: ["developers","actions"],
      id: 69
    });
    
  
    idx.add({
      title: "Connecting an API to any data source",
      excerpt: "In today’s world,organizations are having multiple data sources.With distrubuted architechture in place,these data sources are existing independently and scatteredly.It can...",
      categories: ["API-Management"],
      tags: ["developers","implementation"],
      id: 70
    });
    
  
    idx.add({
      title: "Deploy and publish APIs to different environments",
      excerpt: "Deploying and publishing API is one of the primary concern after you have successfully configured an API on your API...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 71
    });
    
  
    idx.add({
      title: "Basic Workflow for Customer Downloading",
      excerpt: "Use Case Name Basic Workflow for Customer Downloading. Brief Description This is a basic workflow where the user can download...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 72
    });
    
  
    idx.add({
      title: "Common Use Cases for Workflow management",
      excerpt: "Workflow Use Cases for specific business scenario Workflow signifies the definition, execution, and automation of business processes where tasks and...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 73
    });
    
  
    idx.add({
      title: "Delay execution workflow",
      excerpt: "Use Case Name Workflow with delay execution filter Brief Description This workflow enables the user to configure a task iand...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 74
    });
    
  
    idx.add({
      title: "Workflow creation & execution with splitter",
      excerpt: "Use Case Name Workflow showing task configuration with splitter rule Brief Description This workflow enables the user to add customer...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 75
    });
    
  
    idx.add({
      title: "Workflow for adding sales order",
      excerpt: "Use Case Name Creating a Workflow for sales order Brief Description This is a workflow where the user can add...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 76
    });
    
  
    idx.add({
      title: " Workflow execution with data filteration",
      excerpt: "Use Case Name Workflow creation with data filteration Brief Description This workflow enables the user to add customer in Ecommerce...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 77
    });
    
  
    idx.add({
      title: "Workflow for product upload and stock sync",
      excerpt: "Use Case Name Workflow creation with Product upload and stock synchronization-post task scenario Brief Description This workflow enables the user...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 78
    });
    
  
    idx.add({
      title: " Workflow execution with acknowledgement data",
      excerpt: "Use Case Name Workflow showing task configuration with acknowledgement data Brief Description This workflow enables the user to add payment...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 79
    });
    
  
    idx.add({
      title: "Workflow showing salescycle with post and post task inputs",
      excerpt: "Use Case Name Workflow creation of sales cycle with post and post task inputs Brief Description This workflow enables the...",
      categories: ["Workflow"],
      tags: ["developers","usecases"],
      id: 80
    });
    
  
    idx.add({
      title: "Important Terminologies",
      excerpt: "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow A flow or...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 81
    });
    
  
    idx.add({
      title: "Frequently asked questions",
      excerpt: "FAQ is the best way to address frequently asked questions about your business, of course. This section contains list of...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 82
    });
    
  
    idx.add({
      title: "Troubleshooting of Workflows",
      excerpt: "This topic describes common problems that can occur when you develop and test a workflow in AEC Portal. Given below...",
      categories: ["Workflow"],
      tags: ["developers"],
      id: 83
    });
    
  
    idx.add({
      title: "Frequently asked questions",
      excerpt: "FAQ is the best way to address frequently asked questions about your business. This section contains list of questions and...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 84
    });
    
  
    idx.add({
      title: "Create API to Quota Management Access Restriction",
      excerpt: "Use Case Name API to Quota Management Access Restriction Brief Description This is a api which the user can create...",
      categories: ["API-Management"],
      tags: ["developers","usecases"],
      id: 85
    });
    
  
    idx.add({
      title: "Creating Swagger Documentation",
      excerpt: "Swagger is an Open Source Framework for the documentation of API. Swagger is a tools which enables you to generate,...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 86
    });
    
  
    idx.add({
      title: "Authentication & Authorization of Generic REST Adapters",
      excerpt: "APPSeCONNECT Generic REST Adapter provides a detailed way for consuming external RESTful APIs including secure APIs. COMMUNICATION BETWEEN CLIENT AND...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 87
    });
    
  
    idx.add({
      title: "Basic Authentication ",
      excerpt: "Process to Configure Basic Authentication in Generic Rest Adapter To configure the Basic Authentication Type for Generic Rest Adapter follow...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 88
    });
    
  
    idx.add({
      title: "OAuth2.0 Authentication",
      excerpt: "Process to Configure OAuth2.0 in Generic Rest Adapter To configure the OAuth2.0 Authentication type for Generic Rest Adapter follow the...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 89
    });
    
  
    idx.add({
      title: "Overview of Generic Rest Adapters",
      excerpt: "Http based endpoint connector is a pre-packaged software package which provides seamless connectivity to RESTful APIs and leverage to communicate...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 90
    });
    
  
    idx.add({
      title: "Overview of Deployment",
      excerpt: "The APPSeCONNECT Platform either for cloud or on-premise integration is a fully integrated solution that enables organizations to design, develop,...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 91
    });
    
  
    idx.add({
      title: "Getting started with deployment",
      excerpt: "This section lets you get started with the deploying processes and components to an environment for APPSeCONNECT. APPSeCONNECT Components for...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 92
    });
    
  
    idx.add({
      title: "Agent Deactivating",
      excerpt: "\n",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 93
    });
    
  
    idx.add({
      title: "Deployment Configuration",
      excerpt: "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both on the CLOUD PORTAL and in OP Agent....",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 94
    });
    
  
    idx.add({
      title: "Enviornment Overview",
      excerpt: "Environment is the area in the AEC portal where an user can configure and control the agents that are being...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 95
    });
    
  
    idx.add({
      title: "Overview of Plugin",
      excerpt: "A plugin is any kind of an addon or an extension software component that adds a specific feature to an...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 96
    });
    
  
    idx.add({
      title: "Agent Blocking & Unblocking",
      excerpt: "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both from the CLOUD PORTAL as well as from...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 97
    });
    
  
    idx.add({
      title: "HANA Plugin",
      excerpt: "Working with SAP HANA Database requires SAP HANA Plugin that needs to be installed in the agent. The Plugin can...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 98
    });
    
  
    idx.add({
      title: "MYSQL Plugin",
      excerpt: "Working with MySQL Database requires MySQL Plugin that needs to be installed in the agent. The Plugin can be downloaded...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 99
    });
    
  
    idx.add({
      title: "Cors policy",
      excerpt: "Cross-Origin Resource Sharing (CORS) Policy is a mechanism which allows restriction to domain access. Domains configured by the User is...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 100
    });
    
  
    idx.add({
      title: "OLEDB Plugin",
      excerpt: "Plugin for AEC Database of Agent to Support any DBMS at client side/client server such that AEC can support databases...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 101
    });
    
  
    idx.add({
      title: "Overview of Application Connectors",
      excerpt: "An Application connectors are Pre-built optimized solution developed by APPSeCONNECT backend developer team and tested in real-life scenarios. If you...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 102
    });
    
  
    idx.add({
      title: "Overview of Connectors",
      excerpt: "Application configuration is an intregal activity prior to the process of integration. If your choosen application is Shopify, such as...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 103
    });
    
  
    idx.add({
      title: "Overview of Custom Connectors",
      excerpt: "APPSeCONNECT requires connectivity to the application such that it can retrieve or send data to the application or data sources....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 104
    });
    
  
    idx.add({
      title: "Overview of Connectors",
      excerpt: "AEC Connectors acts like a bridge to create connection between applications that connects different data sources both on-premise or in...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 105
    });
    
  
    idx.add({
      title: "Magento2 Configuration",
      excerpt: "Application configuration is an intregal activity prior to the process of integration. If your choosen application is Magento 2, providing...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 106
    });
    
  
    idx.add({
      title: "Overview of Technology Connectors",
      excerpt: "Connectors are part of the communication bridge that connects different data sources both on-premise or in cloud (exposed to WWW)...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 107
    });
    
  
    idx.add({
      title: "Overview of OLEDB Adapters",
      excerpt: "Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 108
    });
    
  
    idx.add({
      title: "Settings",
      excerpt: "Settings panel of AEC Agent enables to change the default settings after the initial setup and installation of the agent....",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 109
    });
    
  
    idx.add({
      title: "Prerequisite",
      excerpt: "Adapter represents an interface between an APP and APPSeCONNECT. An adapter is the most important component which connects your app...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 110
    });
    
  
    idx.add({
      title: "OLEDB Adapters Cloud",
      excerpt: "Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 111
    });
    
  
    idx.add({
      title: "Troubleshooting",
      excerpt: "While executing the integration process on the OP Agent, you may face Techno-Functionality errors common to executing the agent. Given...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 112
    });
    
  
    idx.add({
      title: "Development Guidelines",
      excerpt: "Pascal Case and CamelCase Pascal Casing - First character of all words are Upper Case and other characters are lower...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 113
    });
    
  
    idx.add({
      title: "OLEDB Adapters OnPremise",
      excerpt: "Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal....",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 114
    });
    
  
    idx.add({
      title: "Correct Assembly Version Extraction for Adapter Upload",
      excerpt: "This section of the document provides you the full details of using Assembly Version Extraction and the process of uploading...",
      categories: ["Connectors"],
      tags: ["developers"],
      id: 115
    });
    
  
    idx.add({
      title: "Upgradation & Migration",
      excerpt: "With every update AEC Agent need upgradation to a higher version without losing any data in the agent. This upgradation...",
      categories: ["Deployment"],
      tags: ["developers"],
      id: 116
    });
    
  
    idx.add({
      title: "Best practices",
      excerpt: "Let us discuss some of the Do’s and Don’ts that one need to maintain while developing an Adapter in APPSeCONNECT...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 117
    });
    
  
    idx.add({
      title: "Postrequisites",
      excerpt: "An admin or an end-user can upload updated adapter to an existing app such that the adapter can be changed...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 118
    });
    
  
    idx.add({
      title: "Upgrading and Re-versioning",
      excerpt: "APPSeCONNECT Component Version Pattern contains four numbers, which convey the following information: Pattern- (1st-Number).(2nd-Number).(3rd-Number).(4th-Number) From left to right the numbers...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 119
    });
    
  
    idx.add({
      title: "Deploying",
      excerpt: "Environment section of APPSeCONNECT allows the user to deploy configurations and adapters. In case of APPSeCONNECT, you will automatically get...",
      categories: ["SDK"],
      tags: ["developers"],
      id: 120
    });
    
  
    idx.add({
      title: "Steps to define Static and dynamic criterias for an API",
      excerpt: "This Document provides the details and the functionality aspect of the API components to define static and dynamic criterias for...",
      categories: ["API-Management"],
      tags: ["developers"],
      id: 121
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
  
    
    
    
      
      {
        "title": "Adapter",
        "url": "/listcourses/adapter",
        "excerpt": "This course will help in developing initial platform understanding…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Environment",
        "url": "/listcourses/environment",
        "excerpt": "This help you understanding the debugging option to maintain environments…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Platform",
        "url": "/listcourses/platform",
        "excerpt": "Understanding rules and notification framework in APPSeCONNECT…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Rules",
        "url": "/listcourses/rules",
        "excerpt": "This course will help in developing initial platform understanding…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Touchpoint",
        "url": "/listcourses/touchpoint",
        "excerpt": "This course will help in developing initial platform understanding…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow",
        "url": "/listcourses/workflow",
        "excerpt": "This course will help in developing initial platform understanding…\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
  
    
    
    
      
      {
        "title": "SDK Overview",
        "url": "/sdk/Overview-of-SDK/",
        "excerpt": "APPSeCONNECT is a generic platform that helps a developer as well as an integration consultant to work on specific application,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview on adapter development",
        "url": "/sdk/overview-adapters/",
        "excerpt": "Adapter in terms of APPSeCONNECT is a piece of software component external to the application core is plugged in to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview on plugin development",
        "url": "/sdk/overview-plugins/",
        "excerpt": "Plugins are a piece of software which lets to tightly couple with the platform to enhance the platform and /...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview on policies development",
        "url": "/sdk/overview-policies/",
        "excerpt": "Policies are special modules which hooks over an Http pipeline of API execution. In addition to prebuilt policies, APPSeCONNECT also...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Troubleshooting",
        "url": "/sdk/Debugging/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Inspecting Process / Transaction Logs",
        "url": "/sdk/Logs-&-File-Structure/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Implementing Adapter basic functionality viz, Pull, Push & Resync",
        "url": "/sdk/Implementing-adapter-basic-functionalities/",
        "excerpt": "It is evident that implementating adapter requires extensive knowledge about the API which you want to connect to, such that...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to design an interface for Credentials",
        "url": "/sdk/Designing-&-Mapping-Credentials/",
        "excerpt": "APPSeCONNECT adapter development SDK allows one to implement and create user interface for credentials. In case of OnPremise agent, you...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Developing APPResource Methods",
        "url": "/sdk/Developing-AppResources/",
        "excerpt": "Application resources are special methods that can be added on the adapter code using the interface IAppResources which can be...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Handling various events of Adapter",
        "url": "/sdk/Handling-Events/",
        "excerpt": "APPSeCONNECT provides a number of events which you as a developer can hook into, to write code specially when the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "How to test an Adapter",
        "url": "/sdk/How-to-test-an-Adapter/",
        "excerpt": "Adapter development is a common practice, and one of the most challenging thing to do is to debug an adapter...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Implementing Action filter Parser",
        "url": "/sdk/Implementing-Actionfilter-Parsers/",
        "excerpt": "Action filters are special key-value data store for each integration points which provides functionality to have hierarchy and can invoke...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Logging and Tracing",
        "url": "/sdk/Logging-&-Tracking/",
        "excerpt": "Adapter works on background always to communicate data between application and APPSeCONNECT. As there are a large part of code...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Storing Transactional Data",
        "url": "/sdk/storing-transactional-data/",
        "excerpt": "Adapter supports a number of storages which you can make use of to perform various tasks. For an adapter developer,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Choosing Apps for Integration",
        "url": "/workflow/choosing-apps-for-integration/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of API Management",
        "url": "/api-management/overview/",
        "excerpt": "Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Important Terminologies",
        "url": "/api-management/Terminologies/",
        "excerpt": "This article demonstrates the important terminologies that you need to consider while using our API management system. Webhook API -...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of AppseConnect",
        "url": "/home/",
        "excerpt": "APPSeCONNECT is provider of both hybrid and cloud hosted applications which can connect two or more applications irrespective of ERP,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "/api-management/architecture-design-runtime/",
        "excerpt": "APPSeCONNECT API management is a set of micro service based environment which allows the external users to call and execute...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guides to create APIs",
        "url": "/api-management/quickstart-guides-to-api-management/",
        "excerpt": "API Management of APPSeCONNECT helps an organization to create, maintain and publish APIs for their various data sources such that...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Common Use Cases for API management",
        "url": "/api-management/common-use-cases-on-api-management/",
        "excerpt": "APIs are tje central to any application development process. As data forms an important part of any business it is...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Getting Started to APPSeCONNECT",
        "url": "/getting-started/",
        "excerpt": "CUSTOMER PROFILE INFORMATION This section enables you to quickly access your profile after logging into the application. This is where...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": " Creating proxy endpoint",
        "url": "/api-management/steps-to-create-proxy-endpoint/",
        "excerpt": "Proxies are the full REST (Representational State Transfer) services which allows to create proxy over a set of existing data...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": " Creating Webhook endpoint",
        "url": "/api-management/steps-to-create-webhook-endpoint/",
        "excerpt": "Webhooks are custom callbacks from an application which is generated by the caller and data is pushed to all of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create Api Using Custom Datasource",
        "url": "/create-api-using-custom-datasource/",
        "excerpt": "title: “Create API to Connect On-premise Database” toc: true tag: developers APIs is required when you don’t have an existing...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Transformation",
        "url": "/transformation/overview/",
        "excerpt": "This document will guide you through the TRANSFORMATION functionality in APPSeCONNECT portal. TRANSFORMATION is the field where the corresponding to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to define logic over destination mapping",
        "url": "/transformation/define-logic-over-destination-mapping/",
        "excerpt": "Steps to define logic over destination mapping Mapping in APPSeCONNECT is done so that a Source Application can communicate with...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Basics of Source-Destination Mapping",
        "url": "/transformation/define-source-destination-transformation/",
        "excerpt": "Mapping is done to initiate the transformation process successfully between the Source and the Destination apps. This document will help...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Architecture",
        "url": "/workflow/architecture-design-runtime/",
        "excerpt": "Workflow is a visual representation of a business process integration, which helps you as an user to orchestrate a business...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Workflows",
        "url": "/workflow/overview/",
        "excerpt": "Workflow is group of instructions to the integration service in APPSeCONNECT. APPSeCONNECT workflow application can be considered as a strong...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create Api Connecting To Api",
        "url": "/create-api-connecting-to-api/",
        "excerpt": "\ntitle: “Create API proxy existing API”\ntoc: true\ntag: developers\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quickstart guides to create Workflow",
        "url": "/workflow/quickstart-guides-to-workflow-management/",
        "excerpt": "Workflows are the diagrammatic representation of a business process. As an organization, you can have a number of business processes...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to choose your workflow",
        "url": "/workflow/steps-to-choose-your-workflow/",
        "excerpt": "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Policy Overview",
        "url": "/api-management/policies/",
        "excerpt": "Policies are hooks to an API which you can punch at differnt levels of execution. They are powerful capabilities to...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Quota for a Key policy",
        "url": "/api-management/quota-per-user-key/",
        "excerpt": "The Rate-limit quota policy prevents an API usage spikes on per user basis, such that if the same API is...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create API to consume Webhooks",
        "url": "/api-management/create-api-connecting-to-webhook-Copy/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to create your first workflow",
        "url": "/workflow/steps-to-create-your-first-workflow/",
        "excerpt": "Introduction This section will guide you through workflow creation &amp; configuration in simple steps. By reading this section of the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Filter Request by IP policy",
        "url": "/api-management/ip-restrict/",
        "excerpt": "The IP Restrict Policy is used to restrict the access of an API Proxy by limiting the number of IP...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deploying a workflow and executing it",
        "url": "/workflow/deploying-and-executing/",
        "excerpt": "Workflow in APPSeCONNECT provides integration solution which helps any business to execute integration flow of data between two or more...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Listing of Snapshot for a Workflow for OP Agent",
        "url": "/workflow/list-of-snapshot/",
        "excerpt": "List of snapshot is a pictorial representation of the executed workflow at various node level. Here the user will get...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Nodes and Link overview",
        "url": "/workflow/workflow-nodes-and-links/",
        "excerpt": "Workflow in APPSeCONNECT generates flow that executes integration endpoints one by one through our Micro-service architecture and updates business data...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "GET Node",
        "url": "/workflow/working-with-get/",
        "excerpt": "What is Get Node? GET node is used for getting data from an application by using the API provided by...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "PROCESS Node",
        "url": "/workflow/working-with-process/",
        "excerpt": "What is Process Node? PROCESS node is used for transforming data from one format to another format based on the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Attribute Mapping of workflow",
        "url": "/workflow/attribute-mapping-workflow/",
        "excerpt": "An implementer will be able to have a source to destination mapping, such that complex data transformation could be performed...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Validate http headers policy",
        "url": "/api-management/validate-http-header/",
        "excerpt": "Validate HTTP Header policy inspects each HTTP Request whether the HTTP Request contains a particular Request Header or a specified...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "POST Node",
        "url": "/workflow/working-with-post/",
        "excerpt": "What is Post Node? POST node is used for pushing data to an application based on the API provided by...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Debugging workflows",
        "url": "/workflow/debugging-a-workflow/",
        "excerpt": "As workflow provides end to end business flow mapping, debugging and changing workflow mapping and links is often a business...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Compression Policy",
        "url": "/api-management/compression-apply/",
        "excerpt": "Compression Policy compresses the response coming from the backend and thus can help to increase the performance of websites. As...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "FILTER Node",
        "url": "/workflow/working-with-filter/",
        "excerpt": "What is filter node? This node is used to fetch a subset of data from an original data packet based...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Response content format identification policy",
        "url": "/api-management/response-content-format-Copy/",
        "excerpt": "Reponse Content Format policy inspects Content-Type for each HTTP request header and based upon the identification,it modifies the response content....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "DELAY Node",
        "url": "/workflow/working-with-delay/",
        "excerpt": "What is Delay node? DELAY node is used to delay or stop an execution flow for a specific period. For...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Configuring APPSeCONNECT for API Hosting",
        "url": "/api-management/configure-appseconnect-for-apis/",
        "excerpt": "APPSeCONNECT is a platform which allows hosting of APIs such that the hosted APIs could run independently. Configuring APPSeConnect For...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "HALT/RESUME Node",
        "url": "/workflow/working-with-halt-resume/",
        "excerpt": "What is halt-resume node? HALT and RESUME nodes are used in a combination. We implement HALT node to halt the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Working with Loops",
        "url": "/workflow/working-with-loops/",
        "excerpt": "What is Loop Node? In APPSeCONNECT Workflow using a Self-loop, we can repeatedly execute an individual node without affecting the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Merge Node",
        "url": "/workflow/working-with-merger/",
        "excerpt": "What is Merge Node? This node is used to merge smaller data chunks into a single data packet. Like a...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Rule Node",
        "url": "/workflow/working-with-rule/",
        "excerpt": "What is Rule Node? This node is used for decision making during workflow execution. A rule can be applied on...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sequencer Node",
        "url": "/workflow/working-with-sequencer/",
        "excerpt": "What is Sequencer Node? This node is used to order elements by a certain attribute. This node can be applied...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Splitter Node",
        "url": "/workflow/working-with-splitter/",
        "excerpt": "What is Splitter Node? This node is used to split a data packet into smaller chunks for processing in small...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Choose Applications from catalog",
        "url": "/api-management/choosing-backend-apps/",
        "excerpt": "API Proxies are API services which one can create to connect to a remote data source or multiple data sources....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow Actions",
        "url": "/workflow/generating-actions/",
        "excerpt": "Why do you need action? Workflow is capable of generating action by placing an action node directly on the workflow...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Sending Emails",
        "url": "/workflow/generating-notification-emails/",
        "excerpt": "Email Action Notification This node is used to send an email notification to a user during workflow execution. For example,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Generating Support tickets",
        "url": "/workflow/generating-notification-support-ticket/",
        "excerpt": "Support Ticket Notification Using this node user can create a support ticket during workflow execution. For example, after data is...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Webhook callback",
        "url": "/workflow/generating-notification-webhooks/",
        "excerpt": "Webhook Callback Action The concept of a WebHook is simple. A webhook occurs when something happens; it is a simple...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Storing Files",
        "url": "/workflow/generating-storage-action/",
        "excerpt": "Storage Action Using this node user can store data in text file during workflow execution for future reference. Created file...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Connecting an API to any data source",
        "url": "/api-management/connecting-to-a-data-source/",
        "excerpt": "In today’s world,organizations are having multiple data sources.With distrubuted architechture in place,these data sources are existing independently and scatteredly.It can...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deploy and publish APIs to different environments",
        "url": "/api-management/deployments-and-environments/",
        "excerpt": "Deploying and publishing API is one of the primary concern after you have successfully configured an API on your API...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Basic Workflow for Customer Downloading",
        "url": "/workflow/basic-workflow-customer-download/",
        "excerpt": "Use Case Name Basic Workflow for Customer Downloading. Brief Description This is a basic workflow where the user can download...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Common Use Cases for Workflow management",
        "url": "/workflow/common-use-cases-on-workflow-management/",
        "excerpt": "Workflow Use Cases for specific business scenario Workflow signifies the definition, execution, and automation of business processes where tasks and...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Delay execution workflow",
        "url": "/workflow/delay-execution-in-workflow/",
        "excerpt": "Use Case Name Workflow with delay execution filter Brief Description This workflow enables the user to configure a task iand...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow creation & execution with splitter",
        "url": "/workflow/process-to-configure-customer-with-splitter/",
        "excerpt": "Use Case Name Workflow showing task configuration with splitter rule Brief Description This workflow enables the user to add customer...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow for adding sales order",
        "url": "/workflow/workflow-creation-for-add-salesorder/",
        "excerpt": "Use Case Name Creating a Workflow for sales order Brief Description This is a workflow where the user can add...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": " Workflow execution with data filteration",
        "url": "/workflow/workflow-filter-node-customer-download/",
        "excerpt": "Use Case Name Workflow creation with data filteration Brief Description This workflow enables the user to add customer in Ecommerce...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow for product upload and stock sync",
        "url": "/workflow/workflow-showing-product-upload-with-stock-sync/",
        "excerpt": "Use Case Name Workflow creation with Product upload and stock synchronization-post task scenario Brief Description This workflow enables the user...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": " Workflow execution with acknowledgement data",
        "url": "/workflow/process-to-configure-a-task-with-acknowledgement/",
        "excerpt": "Use Case Name Workflow showing task configuration with acknowledgement data Brief Description This workflow enables the user to add payment...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Workflow showing salescycle with post and post task inputs",
        "url": "/workflow/workflow-showing-salescycle-with-post-and-post-taskinput/",
        "excerpt": "Use Case Name Workflow creation of sales cycle with post and post task inputs Brief Description This workflow enables the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Important Terminologies",
        "url": "/workflow/Terminologies/",
        "excerpt": "This article demonstrates the important terminologies that you need to consider while using our Workflow system. Flow A flow or...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Frequently asked questions",
        "url": "/workflow/faqs/",
        "excerpt": "FAQ is the best way to address frequently asked questions about your business, of course. This section contains list of...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Troubleshooting of Workflows",
        "url": "/workflow/Troubleshooting/",
        "excerpt": "This topic describes common problems that can occur when you develop and test a workflow in AEC Portal. Given below...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Frequently asked questions",
        "url": "/api-management/faqs-api-management/",
        "excerpt": "FAQ is the best way to address frequently asked questions about your business. This section contains list of questions and...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Create API to Quota Management Access Restriction",
        "url": "/api-management/create-api-quotamanagement-to-restriction-access/",
        "excerpt": "Use Case Name API to Quota Management Access Restriction Brief Description This is a api which the user can create...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Creating Swagger Documentation",
        "url": "/api-management/steps-to-create-swagger-documentation/",
        "excerpt": "Swagger is an Open Source Framework for the documentation of API. Swagger is a tools which enables you to generate,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Authentication & Authorization of Generic REST Adapters",
        "url": "/connectors/Authentication-&-Authorization/",
        "excerpt": "APPSeCONNECT Generic REST Adapter provides a detailed way for consuming external RESTful APIs including secure APIs. COMMUNICATION BETWEEN CLIENT AND...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Basic Authentication ",
        "url": "/connectors/BasicAuthentication/",
        "excerpt": "Process to Configure Basic Authentication in Generic Rest Adapter To configure the Basic Authentication Type for Generic Rest Adapter follow...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "OAuth2.0 Authentication",
        "url": "/connectors/OAuth2.0/",
        "excerpt": "Process to Configure OAuth2.0 in Generic Rest Adapter To configure the OAuth2.0 Authentication type for Generic Rest Adapter follow the...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Generic Rest Adapters",
        "url": "/connectors/Overview-of-GenericRest-Adapters/",
        "excerpt": "Http based endpoint connector is a pre-packaged software package which provides seamless connectivity to RESTful APIs and leverage to communicate...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Deployment",
        "url": "/deployment/overview/",
        "excerpt": "The APPSeCONNECT Platform either for cloud or on-premise integration is a fully integrated solution that enables organizations to design, develop,...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Getting started with deployment",
        "url": "/deployment/gettingstarted-with-deployment/",
        "excerpt": "This section lets you get started with the deploying processes and components to an environment for APPSeCONNECT. APPSeCONNECT Components for...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Agent Deactivating",
        "url": "/deployment/Agent-Deactivating/",
        "excerpt": "\n",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deployment Configuration",
        "url": "/deployment/Deployment-Configuration/",
        "excerpt": "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both on the CLOUD PORTAL and in OP Agent....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Enviornment Overview",
        "url": "/deployment/Enviornment-Overview/",
        "excerpt": "Environment is the area in the AEC portal where an user can configure and control the agents that are being...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Plugin",
        "url": "/deployment/Overview-of-Plugin/",
        "excerpt": "A plugin is any kind of an addon or an extension software component that adds a specific feature to an...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Agent Blocking & Unblocking",
        "url": "/deployment/Agent-Blocking-&-Unblocking/",
        "excerpt": "APPSeCONNECT is of Hybrid Architecture and the data can be integrated both from the CLOUD PORTAL as well as from...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "HANA Plugin",
        "url": "/deployment/hana-plugin-installation/",
        "excerpt": "Working with SAP HANA Database requires SAP HANA Plugin that needs to be installed in the agent. The Plugin can...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "MYSQL Plugin",
        "url": "/deployment/MYSQL-plugin-installation/",
        "excerpt": "Working with MySQL Database requires MySQL Plugin that needs to be installed in the agent. The Plugin can be downloaded...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Cors policy",
        "url": "/api-management/cors/",
        "excerpt": "Cross-Origin Resource Sharing (CORS) Policy is a mechanism which allows restriction to domain access. Domains configured by the User is...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "OLEDB Plugin",
        "url": "/deployment/OLE-db-plugin-installation/",
        "excerpt": "Plugin for AEC Database of Agent to Support any DBMS at client side/client server such that AEC can support databases...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Application Connectors",
        "url": "/connectors/Overview-of-Application-Connectors/",
        "excerpt": "An Application connectors are Pre-built optimized solution developed by APPSeCONNECT backend developer team and tested in real-life scenarios. If you...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Connectors",
        "url": "/connectors/Shopify/",
        "excerpt": "Application configuration is an intregal activity prior to the process of integration. If your choosen application is Shopify, such as...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Custom Connectors",
        "url": "/connectors/overview-of-custom-connectors/",
        "excerpt": "APPSeCONNECT requires connectivity to the application such that it can retrieve or send data to the application or data sources....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Connectors",
        "url": "/connectors/Overview-of-Connectors/",
        "excerpt": "AEC Connectors acts like a bridge to create connection between applications that connects different data sources both on-premise or in...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Magento2 Configuration",
        "url": "/connectors/Magento2/",
        "excerpt": "Application configuration is an intregal activity prior to the process of integration. If your choosen application is Magento 2, providing...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of Technology Connectors",
        "url": "/connectors/Overview-of-technology-connectors/",
        "excerpt": "Connectors are part of the communication bridge that connects different data sources both on-premise or in cloud (exposed to WWW)...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Overview of OLEDB Adapters",
        "url": "/connectors/Overview-of-OLEDB-Adapter/",
        "excerpt": "Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Settings",
        "url": "/deployment/settings/",
        "excerpt": "Settings panel of AEC Agent enables to change the default settings after the initial setup and installation of the agent....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Prerequisite",
        "url": "/sdk/Prerequisites/",
        "excerpt": "Adapter represents an interface between an APP and APPSeCONNECT. An adapter is the most important component which connects your app...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "OLEDB Adapters Cloud",
        "url": "/connectors/OLEDB-Adapter-Cloud/",
        "excerpt": "Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Troubleshooting",
        "url": "/deployment/Troubleshooting/",
        "excerpt": "While executing the integration process on the OP Agent, you may face Techno-Functionality errors common to executing the agent. Given...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Development Guidelines",
        "url": "/sdk/Development-Guidelines/",
        "excerpt": "Pascal Case and CamelCase Pascal Casing - First character of all words are Upper Case and other characters are lower...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "OLEDB Adapters OnPremise",
        "url": "/connectors/OLEDB-Adapter-OnPremise/",
        "excerpt": "Generic OLEDB Adapter is a software which provides OLEDB applications a leverage to communicate and adapt with the AEC Portal....",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Correct Assembly Version Extraction for Adapter Upload",
        "url": "/connectors/Version-Extraction-For-Adapter-Upload/",
        "excerpt": "This section of the document provides you the full details of using Assembly Version Extraction and the process of uploading...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Upgradation & Migration",
        "url": "/deployment/upgradation-and-migration/",
        "excerpt": "With every update AEC Agent need upgradation to a higher version without losing any data in the agent. This upgradation...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Best practices",
        "url": "/sdk/Do's-&-Dont's-for-SDK/",
        "excerpt": "Let us discuss some of the Do’s and Don’ts that one need to maintain while developing an Adapter in APPSeCONNECT...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Postrequisites",
        "url": "/sdk/testing-and-uploading-adapter-to-appseconnect-cloud/",
        "excerpt": "An admin or an end-user can upload updated adapter to an existing app such that the adapter can be changed...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Upgrading and Re-versioning",
        "url": "/sdk/upgrading-and-reversioning-adapters/",
        "excerpt": "APPSeCONNECT Component Version Pattern contains four numbers, which convey the following information: Pattern- (1st-Number).(2nd-Number).(3rd-Number).(4th-Number) From left to right the numbers...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Deploying",
        "url": "/sdk/deploying-the-connectivity/",
        "excerpt": "Environment section of APPSeCONNECT allows the user to deploy configurations and adapters. In case of APPSeCONNECT, you will automatically get...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      },
    
      
      {
        "title": "Steps to define Static and dynamic criterias for an API",
        "url": "/api-management/steps-to-assign-parameter-per-actionfilter/",
        "excerpt": "This Document provides the details and the functionality aspect of the API components to define static and dynamic criterias for...",
        "teaser":
          
            "/assets/images/APPSeCONNECT-documentation.png"
          
      }
    
  ]

$(document).ready(function () {
    $('input#search').on('keyup', function () {
        debugger;
        $("#searchFound").addClass('hideBox');
    var resultdiv = $('#results');
    var query = $(this).val();
        var result = idx.search(query);
        if (result.length == 0) {
            $("#searchNotFound").removeClass('hideBox');
            $("#results").addClass('hideBox');
            return false;
        }
        $("#searchNotFound").addClass('hideBox');
        $("#results").removeClass('hideBox');
    resultdiv.empty();
        resultdiv.prepend('<p class="results__found">' + result.length + ' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
