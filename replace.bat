del *.js
del package.json
rd /s /q .nuxt
rd /s /q modules
rd /s /q static

copy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\env.local.js .
copy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\env.production.js .
copy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\env.test.js .
copy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\env.uliiq.js .
copy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\nuxt.config.js .
copy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\package.json .
copy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\server.js .
echo D|xcopy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\.nuxt .\.nuxt /S
echo D|xcopy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\modules .\modules /S
echo D|xcopy C:\work\contentsworks\src\Applications\CWorks.WishHub.Web.Front\static .\static /S
