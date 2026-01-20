// //NOT NEEDED IN THE v4 VERSION
// //MUST FOR v5 VERSION TO MAINTAIN ALL THE CONFIGURATION HERE

import { handlers } from "./app/api/auth/[...nextauth]/route";

export const { GET, POST } = handlers;
