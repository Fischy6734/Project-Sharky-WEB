import { Talk } from "talkjs";

await Talk.ready;

const me = new Talk.User("sample_user_alice");
const session = new Talk.Session({ appId: "tL75CG3p", me });

const inbox = session.createInbox();
inbox.select("sample_conversation");
inbox.mount(document.getElementById("talkjs-container"));
