{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    utils.url = "github:numtide/flake-utils";
    hugo-coder = {
      url = "github:luizdepra/hugo-coder";
      flake = false;
    };
  };

   outputs = { self, nixpkgs, utils, hugo-coder, ... }:
    utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs {
            inherit system;
          };
        in
        {
        devShells.default =
            pkgs.mkShell {
              buildInputs = [ pkgs.hugo pkgs.dart-sass ];
            };
        });
}
