build: build-packages lint

build-root:
    pnpm run -w build

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
