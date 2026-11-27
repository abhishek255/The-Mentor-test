# Contributing to The Mentor

Thank you for your interest in contributing to The Mentor! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Adding a New Agent](#adding-a-new-agent)
- [Agent Quality Checklist](#agent-quality-checklist)
- [Pull Request Process](#pull-request-process)
- [Getting Help](#getting-help)

## Code of Conduct

Be respectful and kind. We are committed to providing a welcoming and inspiring community for all.

## How to Contribute

### Reporting Issues

- **Search existing issues** first to avoid duplicates.
- **Use a clear, descriptive title** for your issue.
- **Provide detailed steps** to reproduce the problem.
- **Include relevant screenshots or logs** when applicable.

Open a GitHub issue at: https://github.com/ps06756/The-Mentor/issues

### Suggesting Improvements

- Open an issue with the label "enhancement".
- Describe the improvement and why it would be useful.
- Be open to discussion about your suggestion.

## Adding a New Agent

We welcome new interview agents! Follow these steps to add one:

### Step 1: Fork the Repository

Fork the repository to your own GitHub account.

### Step 2: Copy the Template

Copy the skill template to the appropriate directory:

```bash
cp templates/skill-template.md agents/{role-name}/{agent-name}.md
```

Choose the right directory:
- `agents/swe-i/` - Entry-level algorithms and data structures
- `agents/data-engineer/` - Data engineering topics
- `agents/systems-design/` - System design and distributed systems

### Step 3: Fill in the Template

Replace all `{{placeholder}}` values in the template:

- **Skill Name**: A clear, descriptive name
- **Target Role**: e.g., SWE-I, SWE-II, Data Engineer
- **Topic**: The specific interview topic
- **Difficulty**: Easy, Medium, or Hard
- **Persona**: Define the interviewer's style and approach
- **Sample Questions**: Add 3-4 difficulty-appropriate problems
- **Hint Levels**: Provide all 4 hint levels for each problem

### Step 4: Test Your Agent

Test your agent with Claude Code or another AI assistant:

```
/plugin install <path_to_your_agent>
```

Then practice with it to ensure:
- Instructions are clear and complete
- Hint system works properly
- Visualizations render correctly
- Feedback is actionable

### Step 5: Submit a Pull Request

1. Push your changes to your fork
2. Open a pull request against the `main` branch
3. Fill in the pull request template
4. Wait for review

## Agent Quality Checklist

Before submitting, ensure your agent meets all criteria:

- [ ] Clear, consistent persona defined
- [ ] 3-4 difficulty-appropriate problems
- [ ] All 4 hint levels for each problem
- [ ] At least 2 visual diagrams (ASCII or Remotion)
- [ ] Evaluation rubric included
- [ ] Resources section with further reading
- [ ] Tested with at least one AI assistant

## Pull Request Process

### Before Submitting

1. Ensure your code follows the existing style
2. Test your changes thoroughly
3. Update documentation if needed
4. Add your name to contributors (optional)

### Review Process

1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, a maintainer will merge your PR

### Release Verification

For maintainers reviewing and merging PRs:
- Review the exact pull request changes, not what you assume they contain
- Check that all proposed checks passed before approving
- Let the owner merge; do not merge on their behalf

## Getting Help

If you have questions:

- Open a [GitHub Discussions](https://github.com/ps06756/The-Mentor/discussions) thread
- Check existing issues for similar questions
- Review the README.md for project overview

---

Thank you for contributing to The Mentor! Your efforts help make interview preparation accessible to everyone.
