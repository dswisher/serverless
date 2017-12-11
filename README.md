## Experiments with AWS serverless web apps

This is a bit of a playground to experiment with setting up a serverless
web application using AWS tools.

* [Commands](aws/Commands.md)


## Possibly Useful Links

* **Serverless Samples/tutorials**
  * vuejs + cognito samples - [Paul Maddox](https://github.com/PaulMaddox/aws-vuejs-cognito) - [wolfeidau](https://github.com/wolfeidau/cognito-vue-bootstrap) (yarn, bootstrap, .env)
  * WildRydes - [blog](http://connorleech.info/blog/Tutorial-for-building-a-Web-Application-with-Amazon-S3-Lambda-DynamoDB-and-API-Gateway/) - [github](https://github.com/awslabs/aws-serverless-workshops/tree/master/WebApplication)
  * Rackspace serverless sample - [part1](https://blog.rackspace.com/part-1-building-server-less-architecture-aws) - [part2](https://blog.rackspace.com/part-2-building-serverless-architecture-aws) - [part3](https://blog.rackspace.com/part-3-building-serverless-architecture-aws) - [github](https://github.com/rackerlabs/serverless-demo)
  * Serverless Framework - [blog](https://medium.freecodecamp.org/i-just-deployed-a-serverless-app-and-i-cant-code-here-s-how-i-did-it-94983d7b43bd)
* **S3 web sites**
  * Cloud formation - samples: [Matthew Andrews](https://github.com/matthew-andrews/s3-static-website-cloudformation)
  * Restricting access by IP - [bucket policy](http://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html#example-bucket-policies-use-case-3)
* **Web dev tools**
  * npm v. gulp v. bower v. etc. - [SO post](https://stackoverflow.com/questions/35062852/npm-vs-bower-vs-browserify-vs-gulp-vs-grunt-vs-webpack)
  * Why NPM scripts? [css-tricks](https://css-tricks.com/why-npm-scripts/)
* **Useful Libraries**
  * axios - Promise based HTTP client for the browser - [github](https://github.com/axios/axios)
* **CSS frameworks**
  * bulma - Flexbox-based framework - [home](https://bulma.io/)
* **Vue**
  * Templates: [webpack](http://vuejs-templates.github.io/webpack/) - [webpack-simple](https://github.com/vuejs-templates/webpack-simple)
  * Tutorials: DZone Auth [part1](https://dzone.com/articles/vuejs-2-authentication-tutorial-part-1) [part2](https://dzone.com/articles/vuejs-2-authentication-tutorial-part-2) [part3](https://dzone.com/articles/vuejs-2-authentication-tutorial-part-3)
  * Samples: [VueChess](https://github.com/gustaYo/vue-chess)
* **Blog Posts**
  * Reed Dadoune - Automatic static website deployments via AWS and GitHub - [post](https://www.dadoune.com/blog/aws-codepipeline-cloudbuild-static-s3-website/) - [github](https://github.com/ReedD/dadoune.com)
* **grip** - preview github markdown locally - [github](https://github.com/joeyespo/grip) - just run `grip` in root dir

## AWS Documentation

* Cognito
  * SDK - [github](https://github.com/aws/amazon-cognito-identity-js/) - [using tokens](http://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html) - [remembering tokens](https://github.com/aws/amazon-cognito-identity-js/issues/271) - [more storing](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage)
  * Samples - [Auth SDK](https://github.com/aws/amazon-cognito-auth-js)
  * Docs - [LOGIN endpoint](http://docs.aws.amazon.com/cognito/latest/developerguide/login-endpoint.html)
  * CSRF - [wikipedia](https://en.wikipedia.org/wiki/Cross-site_request_forgery)
* API Gateway - [with cognito](http://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html#apigateway-enable-cognito-user-pool)
* **CLI** - [installing](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) - [reference](http://docs.aws.amazon.com/cli/latest/reference/index.html#cli-aws)
* **CloudFormation**
  * [Parameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html)
* **IAM** - [access](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-controlling-access-to.html)
* **CodePipeline** - [home](https://aws.amazon.com/codepipeline/)
* **S3**
  * [Hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) a static web site - [virtual hosting](http://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html)

