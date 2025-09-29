# Release manual

For the `korp-frontend` repo, checkout the [README](https://github.com/spraakbanken/korp-frontend/blob/dev/README.md#branches-releases-and-versions) on how to manifest new versions of the code.

For this repo (`korp-frontend-sb`), do the same but skip `package.json` and `CHANGELOG.md`. If nothing has changed between two releases, optionally add the new version tag to the same commit.


## Instances

- **Production:** `master` branch at [/korp](https://spraakbanken.gu.se/korp/)
- **Staging:** `dev` branch at [/korplabb](https://spraakbanken.gu.se/korplabb/)

See [Instanser.md](https://github.com/spraakbanken/dev-docs/blob/main/Instanser.md)


## Deploying

You can build the frontend locally and copy the built files to the server.

1. Check out the correct branch in both repos
2. `cd korp-frontend`
3. `yarn install`
4. Build
5. `rsync --delete --exclude .htaccess -r dist/` to destination

|            | Branch | Build command     | Destination                            |
|------------|--------|-------------------|----------------------------------------|
| Staging    | dev    | `yarn build:labb` | `fkkorp@k2:/var/www/html_sb/korplabb/` |
| Production | master | `yarn build`      | `fkkorp@k2:/var/www/html_sb/korp/`     |


## General notes

- If the `.htaccess` file is accidentally deleted from the server it can be copy-pasted from this repository
