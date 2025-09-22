build: build-packages typecheck lint

typecheck:
    pnpm run -r typecheck

# command run in ci
ci: build-packages test lint

build-root:
    pnpm run -w build

test:
    pnpm run test

build-packages:
    pnpm run -r build

lint:
    pnpm run lint

build2typia:
    pnpm run -r --filter \!geojson build

fmtc:
    pnpm run fmtc

fmt:
    pnpm run fmt

change *ARGS:
    pnpm run change {{ARGS}}

publish:
    # filter root package
    pnpm publish -r --filter \!@jsse/geo-ts
