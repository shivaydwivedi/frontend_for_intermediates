# Claude Code Instructions

Read [AGENTS.md](AGENTS.md) before editing. It is the canonical instruction source for this repository.

This file exists only to add Claude Code operational guidance. If this file appears to conflict with `AGENTS.md`, follow `AGENTS.md` and update this file to remove the conflict.

## Claude-Specific Workflow

- Start every task by checking `git status` and reading the relevant documentation listed in `AGENTS.md`.
- Keep changes scoped to the user's requested project or documentation area.
- Prefer small, readable edits that preserve the repository's educational voice.
- Do not infer permission to implement the next project from roadmap text.
- Do not commit, push, rebase, reset, or switch branches unless the user explicitly asks.
- Report exact commands run and do not claim verification that was not performed.

## Documentation Alignment

When changing project rules, update `AGENTS.md` first, then keep this file as a short pointer to the canonical rules. Avoid duplicating long policy lists here so the two instruction systems do not drift apart.
