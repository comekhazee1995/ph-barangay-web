## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CommitLint

This project uses CommitLint to ensure that your commit messages follow a specific format. This helps in maintaining a clean and consistent commit history.

Refer to the [conventional commits documentation](https://www.conventionalcommits.org/en/v1.0.0/) for the specifications and rules for writing a commit message.

## Contributing

We welcome contributions to this project! Follow these steps to contribute:

1. **Fork the repository**: Click the "Fork" button at the top right of this repository to create a copy of the repository in your GitHub account.

2. **Clone your fork**: Clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/your-username/ph-barangay-web.git
   cd ph-barangay-web
   ```

3. **Create a new branch**: Create a new branch for your feature or bugfix.

   ```bash
   git checkout -b my-feature-branch
   ```

4. **Make your changes**: Make your changes to the codebase.

5. **Commit your changes**: Commit your changes with a descriptive commit message.

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

6. **Push to your fork**: Push your changes to your forked repository.

   ```bash
   git push origin my-feature-branch
   ```

7. **Create a Pull Request**: Go to the original repository and create a pull request from your forked repository. Provide a clear description of your changes and why they are necessary.

8. **Review and Merge**: Your pull request will be reviewed by the maintainers. Once approved, it will be merged into the main branch.

## Keeping Your Fork Updated

To keep your fork updated with the latest changes from the original repository, follow these steps:

1. **Add the original repository as a remote**: This step is only needed once.

   ```bash
   git remote add upstream https://github.com/original-username/ph-barangay-web.git
   ```

2. **Fetch the latest changes from the original repository**:

   ```bash
   git fetch upstream
   ```

3. **Merge the changes into your local main branch**:

   ```bash
   git checkout main
   git merge upstream/main
   ```

4. **Push the updated main branch to your fork**:
   ```bash
   git push origin main
   ```

Thank you for contributing!
