const apiBaseUrl = "http://localhost:8282/";
const authStoreKey = "@formStore";


// APIs for FormI1A
const formI1AAPI = `${apiBaseUrl}api/formI1A`;

// APIs for FormI1C
const formI1CAPI = `${apiBaseUrl}api/formI1C`;

// APIs for FormI1B
const formI1BAPI = `${apiBaseUrl}api/formI1B`;

// APIs for FormI1B Approval
const formI1BOnlineAPI = `${apiBaseUrl}api/formI1BOnline`;

// APIs for FormI5A
const formI5AAPI = `${apiBaseUrl}api/formI5A`;

// APIs for FileUpload
const fileUploadAPI = `${apiBaseUrl}api/upload`;

export {
    apiBaseUrl,
    formI1AAPI,
    authStoreKey,
    formI1CAPI,
    formI1BAPI,
    formI5AAPI,
    fileUploadAPI,
    formI1BOnlineAPI
}