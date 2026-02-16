#!/bin/bash
port=8000
echo -e "Serving at: \033[1;36m http://localhost:${port}\033[0m"
caddy file-server --listen :$port
