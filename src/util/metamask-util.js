import { notification } from "antd"

const checkMetaInstalled = () => {
    if (typeof window.ethereum == 'undefined') {
        notification.warning({
            message: 'Metamask wallet',
            description: 'You have not installed metamask wallet',
            placement: 'topLeft'
        })
        return false;
    }
    return true;
}


const connectMetamask = async () => {
    const addressConnected = await checkMetamaskConnected()
    if (addressConnected) return addressConnected;

    const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return account[0]

}

const checkMetamaskConnected = async () => {
    const installed = checkMetaInstalled();

    if (installed) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) return accounts[0];
    }

    return false;

}


const splitAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 4)}...${address.slice(-5)}`;
}
export const metamaskUtil = { checkMetaInstalled, splitAddress, connectMetamask, checkMetamaskConnected }