# Release manual

For the `korp-frontend` repo, checkout the [README](https://github.com/spraakbanken/korp-frontend/blob/dev/README.md#branches-releases-and-versions) on how to manifest new versions of the code.

For this repo (`korp-frontend-sb`), do the same but skip `package.json` and `CHANGELOG.md`.

(TODO: Should we tag commits in this repo?)


## Instances

- **Production:** `master` branch at [/korp](https://spraakbanken.gu.se/korp/)
- **Staging:** `dev` branch at [/korp](https://spraakbanken.gu.se/korplabb/)

See [Instanser.md](https://github.com/spraakbanken/dev-docs/blob/main/Instanser.md)

## Deploy scripts

To ensure consistent deployments, there are scripts in `k2:~fkkorp/deploy-korp-frontend/` that pull and build the code for Production and Staging, respectively. Please read them and make sure you understand what they do.

```sh
# Staging - do this after pushing dev
ssh -A fkkorp@k2.spraakdata.gu.se deploy-korp-frontend/deploy-labb.sh

# Production - do this after releasing on master
ssh -A fkkorp@k2.spraakdata.gu.se deploy-korp-frontend/deploy-prod.sh
```

## Deploying manually

If you really need to deploy something out of the ordinary, you can build the frontend locally and copy the built files to the server.

Note:

- For both repositories, use the `dev` branch for `/korplabb` and the `master` branch for `/korp`
- `yarn` and `rsync` commands are run from `korp-frontend` repository

## General notes

- If the `.htaccess` file is accidentally deleted from the server it can be copy-pasted from this repository
- Please run `yarn test` before deploying (although the tests are not quite reliable)
