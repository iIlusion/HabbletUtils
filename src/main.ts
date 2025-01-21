import { readFileSync, readdirSync, lstatSync } from 'fs'
import { Extension, HEntity, HMessage } from 'gnode-api';
import { ExtensionInfo } from 'gnode-api/lib/extension/extensioninfo';
import { ExtensionState, initialState, initilizeExtension, setChatInitialized } from './functions/initialize';
import { roomUsers } from './events/Users';
import { userObject } from './events/UserObject';

const extensionInfo: ExtensionInfo = JSON.parse(readFileSync('./package.json', 'utf8'));
extensionInfo.name = "Habblet Utils";

export const ext = new Extension(extensionInfo);
ext.commands = new Map()
ext.state = initialState
ext.roomUsers = roomUsers
ext.userObject = userObject

async function loadCommands(path: string) {
    const files = readdirSync(path);

    for (const file of files) {
        const pathStat = lstatSync(`${path}/${file}`)
        if (pathStat.isFile()) {
            const command = await import(`./commands/${file}`);
            ext.commands.set(command.config.name, command);
            console.log(`[LOG COMANDOS] Carregando o comando - [${file}]`);
        }
    }
}

async function loadEvents(path: string) {
    const files = readdirSync(path);
    for (const file of files) {
        const event = await import (`./events/${file}`);
        if (typeof(event.config.header) === "string") {
            ext.interceptByNameOrHash(event.config.direction, event.config.header, (hMessage: HMessage) => event.run(ext, hMessage))
        } else if (typeof(event.config.header === "number")) {
            ext.interceptByHeaderId(event.config.direction, event.config.header, (hMessage: HMessage) => event.run(ext, hMessage))
        }
        
        console.log(`[LOG EVENTS] Carregando o evento - [${file}]`);
    }
}

async function init() {
    try {
        await loadCommands('./src/commands');
        await loadEvents('./src/events');
        
        ext.run();
        
        ext.on('connect', async (host, connectionPort, hotelVersion, clientIdentifier, clientType) => {
            initilizeExtension(ext)
        });

        ext.on('end', () => {
            setChatInitialized(false)
            });
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

init()