# AWS AppSync 설명

AWS AppSync는 서버리스 백엔드 프레임워크로, GraphQL API를 생성하고 관리할 수 있는 서비스입니다. 이 서비스를 사용하면 앱에서 데이터를 효율적으로 가져올 수 있으며, 실시간 데이터 업데이트를 지원합니다.\
\
AWS AppSync는 데이터 소스를 AWS Lambda, Amazon DynamoDB, Amazon Elasticsearch Service, AWS HTTP 데이터 소스 등과 연결할 수 있습니다. 이 서비스는 GraphQL 스키마를 사용하여 API를 정의하며, 클라이언트 애플리케이션이 필요한 데이터를 요청하는 GraphQL 쿼리를 처리합니다.\
\
클라이언트 애플리케이션이 AWS AppSync에 GraphQL 쿼리를 보내면, AppSync는 해당 쿼리를 분석하고 적절한 데이터 소스에 대한 요청을 생성합니다. 데이터 소스에서 데이터를 가져오고, 이를 GraphQL 응답 형식으로 변환하여 클라이언트에 반환합니다.\
\
또한 AWS AppSync는 GraphQL Subscriptions를 지원하여, 실시간 데이터 업데이트를 클라이언트에 전송할 수 있습니다. 이를 위해 AppSync는 데이터 소스에서 데이터 변경 사항을 수신하고, GraphQL Subscription 쿼리를 구독한 클라이언트에게 실시간 업데이트를 보냅니다.\
\
AWS AppSync는 서버리스 백엔드를 구성하는데 필요한 다양한 기능을 제공하며, 간편하게 GraphQL API를 생성하고 관리할 수 있습니다.
