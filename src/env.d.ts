/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    /** Set by src/middleware.ts on every gated request; null on open paths. */
    authTier: import('./lib/auth').AuthTier | null;
    /** Set in the /write journal zone: is the journal password validated? */
    journalAuthed?: boolean;
  }
}
