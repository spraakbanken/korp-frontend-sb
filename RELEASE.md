# Release manual
- Note: `yarn` and `rsync` commands are run from `korp-frontend` repository. Branch instructions are meant for both repositories.
- Note: if the `.htaccess` file is accidentally deleted from the server it can be copy-pasted from this repository.

Begin with:
- Make sure that all changes are commited and pushed!
- Run `yarn test`


## Deploy Korplabb
- Always use `dev` branch!
```bash
yarn build:labb
rsync --delete --exclude ".htaccess" -r dist/ fkkorp@k2.spraakdata.gu.se:/var/www/html_sb/korplabb
# OR:
ssh -A fkkorp@k2.spraakdata.gu.se deploy-korp-frontend/deploy-labb.sh
```

## Deploy Korp (production)
- Make sure you're on `master` branch
- Tag latest release (skip this step for config-changes)
- Build and deploy:
```bash
yarn build
rsync --delete --exclude ".htaccess" -r dist/ fkkorp@k2.spraakdata.gu.se:/var/www/html_sb/korp
```
