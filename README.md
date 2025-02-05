# DeerHacks

[![DeerHacks Image](public/backgrounds/collage_close.jpg)](https://2024.deerhacks.ca)

> DeerHacks Hackathon 2024 Dashboard

[![Build Status](https://api.netlify.com/api/v1/badges/e85686f6-63b4-4028-94f2-c27d34c488d7/deploy-status)](https://app.netlify.com/sites/deerhacks/deploys)
[![Website Status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2F2024.deerhacks.ca)](https://deerhacks.ca)

## Open Source & Attribution

This project is an open source archive of the DeerHacks 2024 Website & Dashboard and is licensed under the [GPL v3.0 License](LICENSE). We also ask that you keep the footer attribution to the original creators if you decide to use this project for any derivative works.

## Setup

1. Run `yarn install` to install dependencies
2. Install all the required workspace `@recommended` extensions
3. Add the required `.env` files from discord `#configs` / mcss drive

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Going Full Stack

The DeerHacks dashboard leverages the [DeerHacks Backend](https://github.com/utmmcss/deerhacks-backend) and [DeerHacks CMS](https://github.com/utmmcss/deerhacks-cms) to provide a full stack experience. To get started, follow the instructions in the respective repositories.

Ensure that the ports and environments are configured to work with each other.

## Testing

Run the commands to catch any linting / type errors:

```bash
yarn lint
yarn check-types
```

These commands are run before pushing with `husky` and in our CI/CD pipeline with `GitHub Actions`.
