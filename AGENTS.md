# Guidelines

This repository uses trunk-based development, without release branches.

## Branching

Branch follow the Conventional Branch standard. Use the following ABNF as a guideline:

```sh
branch-name     = trunk-branch / prefixed-branch
trunk-branch    = "main" / "master" / "develop"
prefixed-branch = type "/" description
type            = "feature" / "feat" / "bugfix" / "fix"
                / "hotfix" / "release" / "chore"
description     = desc-segment *("-" desc-segment)
desc-segment    = 1*(ALPHA / DIGIT) *("." 1*(ALPHA / DIGIT))
ALPHA           = %x61-7A   ; lowercase a-z
DIGIT           = %x30-39   ; 0-9
```

This guideline is enforced through pre-commits as well.

## Adding new examples

Examples are built as Declarative Automation bundles (formerly Databricks Asset Bundles). This repository uses uv workspaces to manage the individual bundles and their dependencies. Use 'uv init --package' inside the examples' subfolder.
