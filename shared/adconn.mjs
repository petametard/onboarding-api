var ActiveDirectory = require('activedirectory');
var config = { url: process.env.LDAP_URL,
               baseDN: process.env.BASE_DN,
               username: process.env.AD_USER,
               password: process.env.AD_PASSWORD }
var ad = new ActiveDirectory(config);

export default ad;