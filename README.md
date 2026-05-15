# playwrighttest
playwright test data driven framework creation.

This is simple playwright datadriven framework using POM. Here I use 2 pages Homepage and Login page. Script was written in TypeScript. Input Data is coming from loginData.json. This framework will run in the CI/CD pipeline using the trigger from a commit push. It will take screechot on failure. After finishing the run it will send a notification to a SLACK channel using incoming webhook URL. Here two environmental secrets were used one for SLACK incoming webhook URL and another for Password.