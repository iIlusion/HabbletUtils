import { ext } from "../../main";
import { HPacket, HDirection } from "gnode-api";

export function sendNotification(text: String, from?: String) {
  if (from === "chat" || !from) {
    let messagePacket = new HPacket('NotificationDialog', HDirection.TOCLIENT)
    .appendString("")
    .appendInt(3)
    .appendString("display")
    .appendString("BUBBLE")
    .appendString("message")
    .appendString(text, 'utf-8')
    .appendString("image")
    .appendString("https://raw.githubusercontent.com/sirjonasxx/G-ExtensionStore/repo/1.5.1/store/extensions/ListeningMotto/icon.png")

  ext.sendToClient(messagePacket);
  } else if (from === "console") {
    let consoleMessagePacket = new HPacket('NewConsole', HDirection.TOCLIENT)
    .appendInt(999999999)
    .appendString(text, 'utf-8')
    .appendInt(0)
    .appendString('')

    ext.sendToClient(consoleMessagePacket)
  }

}