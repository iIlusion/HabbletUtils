declare global {
    declare module 'gnode-api' {
        interface Extension {
            commands: Map<string, any>;
            initialized: boolean;
            state: {
                antiAfk: boolean;
                antiTurn: boolean;
                antiTyping: boolean;
                antiShowClick: boolean;
                stay: boolean;
                blockMove: boolean;
                selectingUser: boolean;
                selectedUser?: Number;
                clickFlood: boolean;
                selectingHandItemFurni: boolean;
                handItemFurni?: Number;
                handItemFlood: Boolean;
                antiSpam: boolean;
            };
            roomUsers: HEntity[];
            userObject: {
                id?: number;
                name?: string;
                motto?: string;
                figure?: string;
                gender?: string;
                index?: number
            };
        }
    }
}