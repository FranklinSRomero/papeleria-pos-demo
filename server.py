from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler


def main() -> None:
    host = "127.0.0.1"
    port = 8000
    server = ThreadingHTTPServer((host, port), SimpleHTTPRequestHandler)
    print(f"Serving http://{host}:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
