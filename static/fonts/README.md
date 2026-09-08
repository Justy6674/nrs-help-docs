# NRS help fonts

These self-hosted fonts match the NRS public website's font families. They were copied from the existing NRS production build assets on 8 September 2026; the help site does not request fonts from a third-party server at runtime.

- `ibm-plex-sans-latin.woff2`: IBM Plex Sans, body and interface, weights 100–700.
- `instrument-sans-latin.woff2`: Instrument Sans, article headings, weights 400–700.
- `chakra-petch-600-latin.woff2`: Chakra Petch, navigation and help-home heading, weight 600.

Each family is licensed under the SIL Open Font License. The corresponding `*-OFL.txt` files preserve its copyright and licence notice. Latin subsets include common punctuation; system fonts supply characters absent from the subset.

Source mapping from the NRS `.next/static/media` build: `26d4368bf94c0ec4-s.p.woff2`, `26d0ba92e140f0dc-s.p.woff2`, and `4c7c43bdd7a35c63-s.p.woff2`, respectively. These hashes are provenance, not runtime dependencies.
