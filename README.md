# sharedarraybuffer_demo

A site must be cross-origin isolated for this to work. The following headers must be used:
- Cross-Origin-Opener-Policy: same-origin
- Cross-Origin-Embedder-Policy: require-corp

How to run the demo:

1. Install miniserve (cargo install miniserve)
2. Execute ./run.sh to start miniserve with required headers
3. Navigate to localhost:8080
