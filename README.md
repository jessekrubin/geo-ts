# `@jsse/geo-ts`

geospatial typescript mono-repo

## packages 

**Packages are under `./packages/*`**

- `@jsse/geotypes`: types only package of geospatial types
- `@jsse/geo`: geo-spatial toolbox
- `@jsse/utiles`: web-map-tile-util(e)s in/for/with typescript; see also python+rust cli/lib [utiles](https://github.com/jessekrubin/utiles)
- TBD:
  - `@jsse/geotypia`: validators (maybe) built using `typia` and `@jsse/geotypes`

## dev

- `pnpm` is the package manager; repo is a pnpm workspace
- `just`
  - this repo uses `just` to manage scripts on top on (p)npm package-json scripts (`cargo install just`)
- `prettier` default config for formating and checking
- `eslint` my config is use for linting

## notes

- Figuring out changesets

___

## related

- [utiles](https://github.com/jessekrubin/utiles): web-map-tile-util(e)s library and cli for python/rust
- [@jsse/pbfont](https://github.com/jessekrubin/pbfont): pbf-font compositing in typescript
- [@jsse/geobox](https://github.com/jessekrubin/geobox): geo json-schema building library for use with typebox
