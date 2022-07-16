import { createClient, dedupExchange, cacheExchange } from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";

export const client = createClient({
  url: "http://localhost:5000/graphql",
  exchanges: [dedupExchange, cacheExchange, multipartFetchExchange],
});
