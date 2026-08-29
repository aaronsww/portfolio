import type { StructureResolver } from "sanity/structure";

const SINGLETONS = ["about"];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About")
        .id("about")
        .child(S.document().schemaType("about").documentId("about").title("About")),
      S.divider(),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("featuredLink").title("Featured Links"),
      S.documentTypeListItem("journalEntry").title("Journal"),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["project", "featuredLink", "journalEntry", ...SINGLETONS].includes(item.getId()!),
      ),
    ]);
