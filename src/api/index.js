import requests from "@/api/requests";

export const reqGetLoginQrKey = ()=> requests.get('/login/qr/key')