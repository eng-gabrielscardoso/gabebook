# Contributing with Gabebook

Thank you for considering contributing to the Gabebook project! We welcome contributions from anyone who wants to improve or enhance the project. By following these guidelines, you can ensure that your contributions are effective and aligned with the project's goals.

- [Contributing with Gabebook](#contributing-with-gabebook)
  - [Installation](#installation)
  - [Useful commands](#useful-commands)
    - [Project scripts](#project-scripts)
    - [Nuxi scripts](#nuxi-scripts)
  - [How to Contribute](#how-to-contribute)
  - [Guidelines](#guidelines)
  - [Code of Conduct](#code-of-conduct)
  - [Licence](#licence)

## Installation

1. Firstly, you should have installed the latest version of PNPM in your machine and the IDE of your preference (we strongly recommend the Visual Studio Code).
2. Checkout to the `develop` branch using the following command: `git checkout develop`
3. Copy the the `.env.example` file as `.env` and setup the environment variables values with your own credentials or secrets
4. Install the dependencies using the command: `pnpm install`
5. Serve the application using the following command (this will up the server in the `:3000` port of your localhost): `pnpm dev`

## Useful commands

### Project scripts

- `pnpm build`: build the application
- `pnpm dev`: serve application using the development server
- `pnpm generate`: generate the static assets present in the `.nuxt` directory
- `pnpm preview`: generate a preview of the application (build and run)
- `pnpm prepare`: install husky Git hooks
- `pnpm postinstall`: setup and configurations after husky git hooks installation
- `pnpm format`: format the code base using Prettier
- `pnpm lint`: lint the code base using Prettier check and ESLint

### Nuxi scripts

- `pnpm nuxi cleanup`: clean up the application (remove the static assets)

## How to Contribute

1. Fork the repository and clone it locally.
2. Create a new branch from the `develop` branch to work on your changes.
3. Implement your changes, ensuring that your code follows the project's coding style and guidelines.
4. Write tests to validate your changes and ensure that existing functionality remains unaffected.
5. Document any new features, changes, or significant updates in the project's documentation.
6. Commit your changes with a clear and descriptive commit message.
7. Push your branch to your forked repository.
8. Submit a pull request (PR) to the `develop` branch of the original repository. Clearly describe the purpose and scope of your changes in the PR description.
9. Engage in discussions and address any feedback or suggestions provided by the maintainers or reviewers.
10. Once your changes have been reviewed and approved, they will be merged into the `develop` branch.

## Guidelines

- Follow the established coding style and conventions used in the project.
- Ensure that your changes do not introduce new warnings or errors when building or running the project.
- Keep your changes focused and limited to the purpose of the PR. If you have multiple unrelated changes, consider submitting separate PRs.
- Be respectful and professional when interacting with others in the project. Provide constructive feedback and engage in meaningful discussions.
- Prioritize writing clear and concise documentation to help users understand and utilize the project's features effectively.
- Test your changes thoroughly to ensure they work as intended and do not introduce regressions.
- Be responsive to any comments, feedback, or requests for changes from the maintainers or reviewers.

## Code of Conduct

Please note that by contributing to this project, you are expected to adhere to the [Code of Conduct](CODE_OF_CONDUCT.md). Ensure that all interactions and contributions align with the principles outlined in the code of conduct.

## Licence

By contributing to this project, you agree that your contributions will be licenced under the [project's licence](LICENSE).

We appreciate your contributions and look forward to your involvement in making the Gabebook project even better! If you have any questions or need assistance, feel free to reach out to the project maintainers.

Thank you for being a part of this project!
