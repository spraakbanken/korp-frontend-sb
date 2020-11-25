# Release manual
- Note: `yarn` and `rsync` commands are run from `korp-frontend` repository. Branch instructions are meant for both repositories.
- Note: if the `.htaccess` file is accidentally deleted from the server it can be copy-pasted from this repository.

Begin with:
- Make sure that all changes are commited and pushed!
- Run `yarn test`


## Deploy Korplabb
- Always use `dev` branch!
```
yarn build
rsync --delete --exclude ".htaccess" -r dist/ fkkorp@k2.spraakdata.gu.se:/var/www/html_sb/korplabb
```

## Deploy release candidate
- On `dev`: bump the version number in `packages.json` and `app/markup/about.html`
- On `master`:
```
merge dev
yarn build
rsync --delete --exclude ".htaccess" -r dist/ fkkorp@demo.spraakdata.gu.se:/export/htdocs/korprc
```
- Available at: https://demo.spraakbanken.gu.se/korprc/


## Deploy Korp (production)
- Make sure you're on `master` branch
- Tag latest release (skip this step for config-changes)
- Build and deploy:
```
yarn build
rsync --delete --exclude ".htaccess" -r dist/ fkkorp@k2.spraakdata.gu.se:/var/www/html_sb/korp
```
- Alternatively, if only mode files and translations were changed:
```
rsync dist/modes/ fkkorp@k2:/var/www/html_sb/korp/modes/ -rcv
rsync dist/translations/ fkkorp@k2:/var/www/html_sb/korp/translations/ -rcv
```
