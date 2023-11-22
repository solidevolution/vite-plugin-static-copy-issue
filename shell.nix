{ pkgs ? import
    (fetchTarball {
      url =
        "https://github.com/nixos/nixpkgs/tarball/ef8e9997fcb37d5c8372dc1349185bd0d31752a6";
      sha256 = "sha256-KqzFNzhq0GpT09h1w2r2h7NxYvxDnzU3qOWYbfbAqyw=";
    })
    { }
}:

with pkgs;
mkShell {
  name = "vite-plugin-static-copy";
  venvDir = "./.venv";

  buildInputs = [
    nodejs_20
    pre-commit
  ];

  postVenvCreation = ''
    pre-commit install
    npm install
  '';
}
