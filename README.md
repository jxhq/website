# JXHQ

The bilingual website and browser-tool collection for [jxhq.net](https://jxhq.net).

## Included tools

- Domain / RDAP lookup
- Password generator
- UUID v4 generator
- JSON formatter and minifier
- QR-code generator
- JWT decoder
- Line-based diff checker
- HEX, RGB and HSL color converter

All tools except the public RDAP lookup run entirely in the visitor's browser. The selected Dutch or English language is stored locally in the browser.

## Deployment

The repository is ready for CapRover. Its `captain-definition` builds the included PHP 8.3 Apache image and exposes port 80.

No secrets or CapRover credentials belong in this repository.

## JXHQ Lab convention

Public repositories from the configured GitHub accounts are intended to appear automatically on `/lab/`. Repository work should follow the checklist in [`AGENTS.md`](./AGENTS.md), including accurate descriptions, homepage links, topics, and the optional `hide-from-lab` exclusion topic.
