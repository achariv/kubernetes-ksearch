/*
Configure URLS:
DEV Server :  http://35.80.189.213/
Open Search Server :  http://52.37.89.1/
*/
const apiURL = 'http://52.37.89.1/'
const apiURLWithPORT = `http://52.37.89.1:8080/`
const frontend_url = '/ksearch-enhancement/'

export const VITE_BASE_URL = frontend_url;
export const BASE_URL = frontend_url;
export const VITE_SPRINT_VERSION = 8;
export const VITE_SPRINT_ENV = 'Dev';
export const VITE_SPRINT_DATE = '3 Weks';
export const VITE_API_DOMAIN = apiURL;
export const VITE_API_URL = `${apiURLWithPORT}Kapture-Search/`;
export const VITE_UserManagement_API_URL = `${apiURLWithPORT}Kapture-UserManagement/`;
export const VITE_CMS_URL = `${apiURLWithPORT}Kapture-CMS/`;

var ksearchEnvData =
{
    'VITE_BASE_URL': frontend_url,
    'BASE_URL': frontend_url,
    'VITE_SPRINT_VERSION': 8,
    'VITE_SPRINT_ENV': VITE_SPRINT_ENV,
    'VITE_SPRINT_DATE': VITE_SPRINT_DATE,
    'VITE_API_DOMAIN': VITE_API_DOMAIN,
    'VITE_API_URL': VITE_API_URL,
    'VITE_UserManagement_API_URL': VITE_UserManagement_API_URL,
    'VITE_CMS_URL': VITE_CMS_URL,
};