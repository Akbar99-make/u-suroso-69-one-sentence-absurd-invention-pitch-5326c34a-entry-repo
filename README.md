# SockRansom 2000 — One-Sentence Absurd Invention Pitch

Entry for the make.fun bounty **One-Sentence Absurd Invention Pitch**
(`u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a`).

## The pitch (169 characters, one sentence)

> The SockRansom 2000 is a washing machine that eats exactly one sock per load, then leaves a tiny ransom note demanding one capful of fabric softener for its safe return.

The tiny everyday annoyance: one sock vanishes in every wash.
The absurd fix: the machine stops pretending it is innocent, admits it eats
exactly one sock per load, and negotiates — a tiny ransom note, payable in
one capful of fabric softener, for the sock's safe return.

## How it works

`main.ts` (Node 22, standard library only) writes that single sentence to
`entry.txt` inside the output directory (`MAKEFUN_OUTPUT_DIR` when set,
otherwise `/output`). No input, no randomness, no network, no clock — the
output is byte-identical on every run.

```sh
node main.ts
```

## Validation

- Sentence length: 169 characters (gate allows 1–220)
- One line, no trailing newline, UTF-8
- Two runs produce byte-identical output
