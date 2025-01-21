import { Extension, HDirection, HMessage } from "gnode-api"
import { createConsole } from "../functions/initialize"

export let userObject: Extension['userObject'] = {
    id: undefined,
    name: undefined,
    figure: undefined,
    gender: undefined,
    motto: undefined
}

export const run = (ext: Extension , hMessage: HMessage) => {
    const packet = hMessage.getPacket();
    const [id, name, figure, gender, motto ] = packet.read('iSSSSS')
    
    ext.userObject = {
        id,
        name,
        figure,
        gender,
        motto
    }

    createConsole(ext)
}

export const config = {
    direction: HDirection.TOCLIENT,
    header: 'UserObject',
}