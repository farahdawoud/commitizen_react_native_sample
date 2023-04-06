# commitizen_react_native_sample

This is a sample React Native app that demonstrates how to use Commitizen to enforce conventional commits and automatically bump versions and update the changelog whenever changes are made to the main branch.

# Requirements

To run the app, you will need to have the following installed on your machine:

- Node.js (v12.13.0 or later)
- Yarn (v1.19.1 or later)
- Commitizen (v4.0.3 or later)

# Getting Started

- Clone this repository to your local machine.
- Navigate to the project directory in your terminal.
- Install dependencies by running yarn install.
- Create a commit using Commitizen's conventional commit format. (See commitizen docs or our confluence page for reference)
  - https://bsfdv.atlassian.net/wiki/spaces/DevEx/pages/2181464106/Commitizen+Integration
  - https://commitizen-tools.github.io/commitizen/
- Push the commit to the main branch. The GitHub Action will automatically bump the version and update the changelog.

# How it Works

This app uses Commitizen to enforce conventional commits. When a commit is made using the commitizen commit command, Commitizen prompts the user for the necessary information and asks some questions to help creating a conventional commit. This ensures that all commits follow a consistent format, making it easier to track changes and understand the codebase and also detect breaking changes.

When changes are pushed to the main branch, a GitHub Action is triggered. This action checks the commit history since the last release and determines whether to bump the version and update the changelog. It uses the conventional commit format to determine whether the changes are major, minor, or patch, and updates the version and changelog accordingly.

# Contributing

This app was created as a proof of concept to help integrate commitizen with any future projects.
